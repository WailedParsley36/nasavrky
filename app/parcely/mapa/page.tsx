"use client";

import Head from "next/head";
import PropertyCard from "../../../components/PropertyCard";
import ParcelMap from "../../../components/ParcelMap";
import { Parcela } from "../../../MockData";

export default function Mapa() {
  return (
    <>
      <Head>
        <title>Stavební parcely Nasavrky - Váš nový domov čeká</title>
        <meta
          name="description"
          content="Objevte prémiové stavební pozemky v Nasavrkách, ideální pro výstavbu vašeho vysněného domova."
        />
      </Head>
      <div className="relative">
        <div className="absolute right-0 z-[1001]">
          <PropertyCard />
        </div>
        <div className="z-0">
          <ParcelMap onParcelClick={(parcel: Parcela) => {}} />
        </div>
      </div>
    </>
  );
}
