"use client";
import { CSSProperties, SVGProps, useEffect } from "react";
import { MapContainer, TileLayer, useMap, GeoJSON } from "react-leaflet";
import buildings from "../homes.json";
import { Layer, PathOptions } from "leaflet";
import { AllParcels, Parcela } from "../MockData";

const featureStyle: PathOptions = {
  color: "#E2AC36",
  dashArray: "4",
  opacity: 0.7,
  fillOpacity: 0.1,
  fillColor: "#E2AC36",
};

const soldFeatureStyle: PathOptions = {
  color: "#E2AC36",
  dashArray: "4",
  opacity: 0.7,
  fillOpacity: 0.1,
  fillColor: "#E2AC36",
};

const highlightStyle: PathOptions = {
  color: "#E2AC36",
  opacity: 1,
  dashArray: "0",
  fillOpacity: 0.4,
  fillColor: "#FFAE00",
};

const soldHighlightStyle: PathOptions = {
  color: "#ffc9c9",
  opacity: 1,
  dashArray: "0",
  fillOpacity: 0.4,
  fillColor: "#FFAE00",
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

function onEachFeature(
  feature: any,
  layer: Layer,
  onClick: (parcel: Parcela) => void
) {
  const parcela = AllParcels.find(
    (x) => x.id == feature.properties.cisloparcely
  );

  layer.on({
    click: (e) => {
      onClick(parcela!);
    },
    mouseover: (e) => {
      const layer = e.target;
      layer.setStyle(parcela?.prodano ? soldHighlightStyle : highlightStyle);
      layer.bringToFront();
    },
    mouseout: (e) => {
      const layer = e.target;
      layer.setStyle(parcela?.prodano ? soldFeatureStyle : featureStyle);
    },
  });
}

interface Props {
  className?: string;
  onParcelClick: (parcel: Parcela) => void;
}

export default function ParcelMapBroken({
  className = "w-full min-h-[92.5vh]",
  onParcelClick,
}: Props) {
  return (
    <MapContainer
      className={className}
      center={[49.84185377806506, 15.796974067267506]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <MapScroller />
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

