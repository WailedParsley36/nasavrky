"use client";

import React, { useEffect, useState } from "react";
import { Parcela } from "../../ParcelData";
import { AllParcels } from "../../ParcelData";
import { ParcelMap } from "../../components/ParcelMapWithoutSSR";
import { useRouter } from "next/navigation";
import ParcelCard from "../../components/ParcelCard";
import base64url from "base64url";

import MultiRangeSlider from "../../components/multi-range/MultiRangeSlider";

const { maxPrice, minPrice } = (() => {
  const result = AllParcels.sort((x, y) => y.cena - x.cena)
  return { maxPrice: result[0].cena, minPrice: result[result.length - 1].cena };
})()
const { maxSize, minSize } = (() => {
  const result = AllParcels.sort((x, y) => y.plocha - x.plocha)
  return { maxSize: result[0].plocha, minSize: result[result.length - 1].plocha };
})()
const { maxPricePerMeter, minPricePerMeter } = (() => {
  const result = AllParcels.sort((x, y) => (y.cena / y.plocha) - (x.cena / x.plocha))
  const first = result[0];
  const last = result[result.length - 1]
  return { maxPricePerMeter: first.cena / first.plocha, minPricePerMeter: last.cena / last.plocha };
})();

export function formatPrice(price: number) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price);
};

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: minPrice, max: maxPrice });
  const [pricePerMeterRange, setPricePerMeterRange] = useState({ min: 0, max: maxPricePerMeter });
  const [sizeRange, setSizeRange] = useState({ min: 0, max: maxSize });
  const [filteredParcels, setFilteredParcels] = useState<Parcela[]>(AllParcels);

  const router = useRouter();

  useEffect(() => {
    setFilteredParcels(AllParcels.filter(parcel => {
      // Check if the search term matches id, name, or location
      const matchesSearch =
        parcel.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        parcel.nazev.toLowerCase().includes(searchTerm.toLowerCase()) ||
        parcel.lokalita.toLowerCase().includes(searchTerm.toLowerCase());

      // Check if the price is within the specified range
      const matchesPrice =
        parcel.cena >= priceRange.min &&
        parcel.cena <= priceRange.max;


      // Check if the price is within the specified range
      const pricePerM = parcel.cena / parcel.plocha;
      const matchesPricePerMeter =
        pricePerM >= pricePerMeterRange.min &&
        pricePerM <= pricePerMeterRange.max;

      // Check if the size is within the specified range
      const matchesSize =
        parcel.plocha >= sizeRange.min &&
        parcel.plocha <= sizeRange.max;

      // Return true only if all conditions are met
      return matchesSearch && matchesPrice && matchesSize && matchesPricePerMeter;
    }));
  }, [searchTerm, priceRange, sizeRange, pricePerMeterRange]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handlePriceChange(values: { min: number, max: number }) {
    setPriceRange({ min: values.min, max: values.max });
  }

  function handlePricePerMeterChange(values: { min: number, max: number }) {
    setPricePerMeterRange({ min: values.min, max: values.max });
  }

  function handleSizeChange(values: { min: number, max: number }) {
    setSizeRange({ min: values.min, max: values.max });
  }

  return (
    <div className="container mx-auto p-10 mb-8">
      <h1 className="text-2xl font-bold mb-4">Hledat</h1>
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Adresa, číslo parcely..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 pl-10 border rounded"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="sticky top-6">
            <div className="rounded-lg mb-4">
              <ParcelMap
                zoom={16}
                className="w-full h-84 rounded-lg mb-4"
                selectedIds={filteredParcels.map(x => x.id)}
                onParcelClick={(p) => router.push(`/parcely/${base64url(p.id)}`)}
              />
              <button
                className="w-full bg-amber-500 text-white py-2 rounded flex items-center justify-center cursor-pointer"
                onClick={() => router.push("/parcely/mapa")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Zobrazit na mapě
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-bold mb-4">Celková cena</h2>
              <div className="mb-4 relative">
                <MultiRangeSlider
                  min={minPrice}
                  max={maxPrice}
                  onInput={handlePriceChange}
                />
                <div className="flex justify-between mt-5 text-sm text-gray-600">
                  <span>{formatPrice(priceRange.min)}</span>
                  <span>{formatPrice(priceRange.max)}</span>
                </div>
              </div>

              <h2 className="font-bold mb-4 mt-4">Cena za m²</h2>
              <div className="mb-4 relative">
                <MultiRangeSlider
                  min={minPricePerMeter == maxPricePerMeter ? 0 : minPricePerMeter}
                  max={maxPricePerMeter}
                  onInput={handlePricePerMeterChange}
                />
                <div className="flex justify-between text-sm mt-5 text-gray-600">
                  <span>{formatPrice(pricePerMeterRange.min)}</span>
                  <span>{formatPrice(pricePerMeterRange.max)}</span>
                </div>
              </div>

              <h2 className="font-bold mb-4 mt-4">Rozloha</h2>
              <div className="mb-4 relative">
                <MultiRangeSlider
                  min={minSize}
                  max={maxSize}
                  onInput={handleSizeChange}
                />
                <div className="flex justify-between mt-5 text-sm text-gray-600">
                  <span>{sizeRange.min} m²</span>
                  <span>{sizeRange.max} m²</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredParcels.map((prop, index) => (
              <ParcelCard key={index} parcel={prop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
