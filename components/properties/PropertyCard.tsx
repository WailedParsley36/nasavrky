'use client'

import Image from "next/image";
import { Parcela } from "../../ParcelData";
import { FaMapMarkerAlt, FaRuler } from "react-icons/fa";
import { formatPrice } from "../../app/parcely/page";
import base64url from "base64url";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
    parcel: Parcela
}

export default function PropertyCard({
    parcel,
}: PropertyCardProps) {
    const router = useRouter();

    return (
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer" onClick={() => router.push(`/parcely/${base64url(parcel.id)}`)}>
            <div className="w-1/3 relative">
                <Image
                    src={parcel.obrazky[0]}
                    alt="Property thumbnail"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-2/3 p-4">
                <div className="text-lg font-bold mb-1">
                    {formatPrice(parcel.cena!)}
                </div>
                <div className="text-gray-600 text-xs mb-2 truncate">{parcel.lokalita}</div>
                <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                        <FaRuler className="mr-1 text-gray-500" />
                        <span>{parcel.plocha} m²</span>
                    </div>
                    <div className="flex items-center">
                        <span>{parcel.cena! / parcel.plocha} Kč / m²</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{parcel.id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}