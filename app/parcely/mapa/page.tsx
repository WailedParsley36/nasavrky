"use client";

import Head from "next/head";
import PropertyCard from "../../../components/PropertyCard";
import { ParcelMap } from "../../../components/ParcelMapWithoutSSR";
import { Parcela } from "../../../ParcelData";

export default function Mapa() {
  return (
    <>
      <div className="relative">
        <div className="absolute right-0 z-[1001]">
          <PropertyCard />
        </div>
        <div className="z-0">
          <ParcelMap onParcelClick={(parcel: Parcela) => { }} />
        </div>
      </div>
    </>
  );
}
