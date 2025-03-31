"use client";

import React, { useState } from "react";
import { Parcela } from "../../MockData";
import { AllParcels } from "../../MockData";
import { ParcelMap } from "../../components/ParcelMapWithoutSSR";
import { useRouter } from "next/navigation";
import ParcelCard from "../../components/ParcelCard";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [sizeRange, setSizeRange] = useState({ min: 800, max: 1500 });
  const [filteredParcels, setFilteredParcels] = useState<Parcela[]>(AllParcels);

  const router = useRouter();

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handlePriceMinChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 });
  }

  function handlePriceMaxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 0 });
  }

  function handleSizeMinChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSizeRange({ ...sizeRange, min: parseInt(e.target.value) || 0 });
  }

  function handleSizeMaxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSizeRange({ ...sizeRange, max: parseInt(e.target.value) || 0 });
  }

  return (
    <div className="container mx-auto p-4">
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
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            {/* Map placeholder */}
            <div className="h-64 bg-gray-300 rounded-lg mb-4">
              <ParcelMap
                className="w-full h-full"
                onParcelClick={(p) => router.push(`/parcely/${btoa(p.id)}`)}
              />
            </div>
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
            <h2 className="font-bold mb-2">Celková cena</h2>
            <div className="flex gap-2 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Od</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="0"
                  />
                  <span className="bg-gray-100 p-2 border border-l-0 rounded-r">
                    CZK
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Do</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="0"
                  />
                  <span className="bg-gray-100 p-2 border border-l-0 rounded-r">
                    CZK
                  </span>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-2 mt-4">Cena za m²</h2>
            <div className="flex gap-2 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Od</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="0"
                    value={priceRange.min}
                    onChange={handlePriceMinChange}
                  />
                  <span className="bg-gray-100 p-2 border border-l-0 rounded-r">
                    CZK
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Do</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="0"
                    value={priceRange.max}
                    onChange={handlePriceMaxChange}
                  />
                  <span className="bg-gray-100 p-2 border border-l-0 rounded-r">
                    CZK
                  </span>
                </div>
              </div>
            </div>

            <h2 className="font-bold mb-2 mt-4">Rozloha</h2>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Od</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="800"
                    value={sizeRange.min}
                    onChange={handleSizeMinChange}
                  />
                  <span className="bg-gray-100 p-2 border border-l-0 rounded-r">
                    m²
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Do</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="1500"
                    value={sizeRange.max}
                    onChange={handleSizeMaxChange}
                  />
                  <span className="bg-gray-100 p-2 border border-l-0 rounded-r">
                    m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AllParcels.map((prop, index) => (
              <ParcelCard key={index} parcel={prop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
