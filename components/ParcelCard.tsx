import Image from 'next/image';
import Link from 'next/link';
import { Parcela } from '../MockData';

interface ParcelCardProps {
  parcel: Parcela;
}

export default function ParcelCard({ parcel }: ParcelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-48">
        <Image 
          src={parcel.obrazek} 
          alt={`Parcela ${parcel.id}`} 
          fill
          className="object-cover"
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
          <Link href={`/parcely/${parcel.id}`} className="btn-primary inline-block w-full text-center">
            Zobrazit detail
          </Link>
        </div>
      </div>
    </div>
  );
}