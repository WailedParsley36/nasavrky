import AllParcels from './parcels.json'

export interface Parcela {
  id: string;
  nazev: string;
  lokalita: string;
  plocha: number;
  cena?: number;
  obrazky: string[];
  prodano?: boolean;
  rezervovano?: boolean;
}

export const pricePerMeter = 3450;

// @ts-ignore
let copy: Parcela[] = AllParcels;

for (const parcel of copy) {
  if (!parcel.cena) {
    parcel.cena = Math.round(parcel.plocha * pricePerMeter);
  }
}

console.log(copy);

export function getAllParcels() { return copy };