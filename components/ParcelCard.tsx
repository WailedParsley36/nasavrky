import Image from "next/image";
import Link from "next/link";
import { Parcela } from "../MockData";
import base64url from "base64url";

interface ParcelCardProps {
  parcel: Parcela;
}

export default function ParcelCard({ parcel }: ParcelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-48">
        {/* Sold overlay */}
        {parcel.prodano && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="bg-red-500/80 text-white font-bold py-2 px-6 rounded-lg transform -rotate-12 text-2xl z-20">
              PRODÁNO
            </div>
          </div>
        )}
        <Image
          src={parcel.obrazek}
          alt={`Parcela ${parcel.id}`}
          fill
          className={`object-cover ${parcel.prodano ? "opacity-80" : ""}`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{parcel.nazev}</h3>
        <p className="text-gray-600 mt-1">{parcel.lokalita}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold">{parcel.cena} Kč</span>
          <span className="text-sm text-gray-500">{parcel.plocha} m²</span>
        </div>
        <div className="mt-4">
          <Link
            href={`/parcely/${base64url(parcel.id)}`}
            className={`${
              parcel.prodano
                ? "bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-700/90 transition duration-300"
                : "btn-primary"
            } inline-block w-full text-center`}
          >
            {parcel.prodano ? "Prodáno" : "Zobrazit detail"}
          </Link>
        </div>
      </div>
    </div>
  );
}
