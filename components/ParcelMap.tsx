"use client";
import { CSSProperties, SVGProps, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, GeoJSON } from "react-leaflet";
import buildings from "../homes.json";
import { LatLngExpression, Layer, PathOptions } from "leaflet";
import { getAllParcels, Parcela } from "../ParcelData";

const AllParcels = getAllParcels();

const featureStyle: PathOptions = {
  color: "#E2AC36",
  dashArray: "4",
  stroke: true,
  opacity: 0.7,
  fillOpacity: 0.1,
  fillColor: "#E2AC36",
};

const soldFeatureStyle: PathOptions = {
  color: "#c10007",
  dashArray: "4",
  stroke: true,
  opacity: 0.7,
  fillOpacity: 0.1,
  fillColor: "#c10007",
};

const reservedFeatureStyle: PathOptions = {
  color: "#a15b00",
  dashArray: "4",
  stroke: true,
  opacity: 0.7,
  fillOpacity: 0.1,
  fillColor: "#a15b00",
};

const highlightStyle: PathOptions = {
  color: "#E2AC36",
  opacity: 1,
  stroke: true,
  dashArray: "0",
  fillOpacity: 0.4,
  fillColor: "#FFAE00",
};

const soldHighlightStyle: PathOptions = {
  color: "#c10007",
  opacity: 1,
  stroke: true,
  dashArray: "0",
  fillOpacity: 0.4,
  fillColor: "#c10007",
};

const reservedHighlightStyle: PathOptions = {
  color: "#a15b00",
  opacity: 1,
  stroke: true,
  dashArray: "0",
  fillOpacity: 0.4,
  fillColor: "#a15b00",
};

export function MapScroller() {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();

    const handleWheel = (e: any) => {
      if (e.ctrlKey) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
      }
    };

    map.getContainer().addEventListener("wheel", handleWheel);

    return () => {
      map.getContainer().removeEventListener("wheel", handleWheel);
    };
  }, [map]);

  return <></>;
}

interface Props {
  className?: string;
  selectedIds?: string[];
  zoom?: number;
  autoCenter?: boolean;
  onParcelClick: (parcel: Parcela) => void;
}

export default function ParcelMapBroken({
  className = "w-full min-h-[92.5vh]",
  selectedIds,
  zoom,
  autoCenter = false,
  onParcelClick,
  children
}: Props) {
  const layerRefs = useRef<Record<string, Layer>>({});
  const mapRef = useRef<L.Map | null>(null);
  const [center, setCenter] = useState<LatLngExpression>(
    autoCenter
      ? [49.83670656492651, 15.796000783466958]
      : [49.84185377806506, 15.796974067267506]
  );
  const selectedFeatureRef = useRef<any>(null);

  // Efekt pro centrování mapy na vybranou parcelu
  useEffect(() => {
    if (
      autoCenter &&
      selectedIds &&
      selectedIds.length > 0 &&
      selectedFeatureRef.current &&
      mapRef.current
    ) {
      const feature = selectedFeatureRef.current;
      const coords = feature.geometry.coordinates[0][0];
      // Převedení na LatLng formát
      const newCenter: LatLngExpression = [coords[1], coords[0]];
      setCenter(newCenter);

      // Alternativně můžete použít přímo metodu setView na mapě
      mapRef.current.setView(newCenter, zoom ?? 17);
    }
  }, [selectedIds, autoCenter, zoom]);

  useEffect(() => {
    if (selectedIds && layerRefs.current) {
      Object.entries(layerRefs.current).forEach(([id, layer]) => {
        const isSelected = selectedIds.includes(id);
        const parcela = AllParcels.find((x) => x.id === id);

        if (isSelected) {
          // Uložení vybrané parcely pro centrování
          const feature = buildings.features.find(
            (f) => f.properties.cisloparcely === id
          );
          if (feature && autoCenter) {
            selectedFeatureRef.current = feature;
          }

          // @ts-ignore
          layer.setStyle(parcela?.prodano ? soldFeatureStyle : parcela?.rezervovano ? reservedFeatureStyle : featureStyle);
          // @ts-ignore
          layer.getElement()?.classList.remove("hidden");
        } else {
          // @ts-ignore
          layer.setStyle({
            fillOpacity: 0,
            stroke: false,
            interactive: false,
          });
          // @ts-ignore
          layer.getElement()?.classList.add("hidden");
        }
      });
    }
  }, [selectedIds, autoCenter]);

  function onEachFeature(
    feature: any,
    layer: Layer,
    onClick: (parcel: Parcela) => void
  ) {
    const id = feature.properties.cisloparcely;
    layerRefs.current[id] = layer;
    const parcela = AllParcels.find((x) => x.id == id);

    if (selectedIds) {
      const isSelected = selectedIds.includes(id);
      if (isSelected) {
        // Uložíme vybranou parcelu pro pozdější centrování, ale neměníme stav během renderování
        if (autoCenter) {
          selectedFeatureRef.current = feature;
        }

        // @ts-ignore
        layer.setStyle(parcela?.prodano ? soldFeatureStyle : parcela?.rezervovano ? reservedFeatureStyle : featureStyle);
        // @ts-ignore
        layer.getElement()?.classList.remove("hidden");
      } else {
        // @ts-ignore
        layer.setStyle({
          fillOpacity: 0,
          stroke: false,
          interactive: false,
        });
        // @ts-ignore
        layer.getElement()?.classList.add("hidden");
      }
    } else {
      // @ts-ignore
      layer.setStyle(parcela?.prodano ? soldFeatureStyle : parcela?.rezervovano ? reservedFeatureStyle : featureStyle);
    }

    layer.on({
      click: (e) => {
        onClick(parcela!);
      },
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle(parcela?.prodano ? soldHighlightStyle : parcela?.rezervovano ? reservedHighlightStyle : highlightStyle);
        layer.bringToFront();
      },
      mouseout: (e) => {
        const layer = e.target;
        layer.setStyle(parcela?.prodano ? soldFeatureStyle : parcela?.rezervovano ? reservedFeatureStyle : featureStyle);
      },
    });
  }

  function MapController() {
    const map = useMap();

    useEffect(() => {
      mapRef.current = map;
    }, [map]);

    return null;
  }

  return (
    <MapContainer
      className={className}
      center={center}
      zoom={zoom ?? autoCenter ? 16 : 17}
      scrollWheelZoom={true}
    >
      <MapScroller />
      <MapController />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
        subdomains="abcd"
        maxZoom={20}
      />
      <GeoJSON
        //@ts-ignore
        data={buildings}
        style={featureStyle}
        onEachFeature={(feature, layer) =>
          onEachFeature(feature, layer, onParcelClick)
        }
      />
    </MapContainer>
  );
}
