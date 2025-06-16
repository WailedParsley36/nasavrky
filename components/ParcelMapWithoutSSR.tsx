'use client'

import dynamic from "next/dynamic";

export const ParcelMap = dynamic(() => import("./ParcelMap"), {
  ssr: false,
});

export const NasavrkyMap = dynamic(() => import("./NasavrkyMap"), {
  ssr: false,
});
