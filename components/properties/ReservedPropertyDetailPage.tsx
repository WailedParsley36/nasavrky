'use client'
import PropertyCard from "./PropertyCard";
import base64url from "base64url";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
    FaArrowLeft,
    FaBaseballBall,
    FaBus,
    FaExclamationTriangle,
    FaHandsHelping,
    FaLeaf,
    FaMapMarkerAlt,
    FaRoad,
    FaRuler,
    FaSchool,
    FaSearch,
} from "react-icons/fa";
import { getAllParcels, Parcela } from "../../ParcelData";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { formatPrice } from "../../app/parcely/page";
import { ParcelMap } from "../ParcelMapWithoutSSR";
import AmenityItem from "./AmenityItem";
import { shuffle } from "./functions";

const AllParcels = shuffle(getAllParcels());

export default function ReservedPropertyPage({ parcel }: { parcel: Parcela }) {
    return (
        <>
            <Head>
                <title>Pozemek {parcel.id} | Nasavrky - Rezervováno</title>
                <meta
                    name="description"
                    content="Stavební parcela v Nasavrkách - již prodáno"
                />
            </Head>

            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="mb-4 text-sm text-gray-600">
                    <Link href="/" className="hover:text-amber-500">
                        Pozemky na prodej
                    </Link>
                    <span className="mx-2">›</span>
                    <span>Pozemek {parcel.id}</span>
                </div>

                {/* Property Header */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Property Info */}
                    <div className="lg:w-2/3">
                        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start">
                            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                                <FaRuler className="mr-2 text-gray-600" />
                                <span>{parcel.plocha} m²</span>
                            </div>
                            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                                <svg
                                    className="w-5 h-5 mr-2 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M12 12H12.01"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span>Orná půda</span>
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold mb-2">Pozemek {parcel.id}</h1>
                        <p className="text-gray-600 mb-6 flex items-center">
                            <FaMapMarkerAlt className="mr-2" />
                            {parcel.lokalita}
                        </p>

                        {/* Sold Banner */}
                        <div className="bg-orange-100 border border-orange-200 text-orange-800 px-6 py-4 rounded-lg mb-6 flex items-center">
                            <FaExclamationTriangle className="text-orange-500 mr-3 text-xl" />
                            <div>
                                <h2 className="font-bold text-lg">
                                    Tento pozemek je zarezervovaný
                                </h2>
                                <p>
                                    Omlouváme se, ale tento pozemek si již někdo zarezervoval.
                                    Podívejte se na naše další nabídky.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 z-10"></div>
                            <Image
                                src={parcel.obrazky[0]}
                                alt={`Pozemek ${parcel.id} - Prodáno`}
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="bg-orange-500/80 text-white font-bold py-3 px-8 rounded-lg transform -rotate-12 text-3xl">
                                    REZERVOVÁNO
                                </div>
                            </div>
                        </div>

                        {/* Property Description */}
                        <div className="mb-8 opacity-70">
                            <h2 className="text-xl font-bold mb-4">Popis</h2>
                            <p className="text-gray-700 mb-4">
                                Nabízíme k prodeji krásný pozemek v malebném městečku Nasavrky,
                                situovaný v klidné lokalitě v blízkosti rybníka. Tento pozemek
                                je ideální pro výstavbu rodinného domu, rekreačního objektu nebo
                                jako investiční příležitost.
                            </p>
                            <p className="text-gray-700">
                                Pozemek o celkové výměře {parcel.plocha} m² se nachází v rozvojové zóně
                                obce s výbornou dostupností. V okolí se nachází veškerá občanská
                                vybavenost včetně školy, školky, obchodů a restaurací. Lokalita
                                nabízí krásné výhledy do okolní krajiny a skvělé možnosti pro
                                rekreaci v přírodě.
                            </p>
                        </div>

                        {/* Map Section */}
                        <div className="mb-8 opacity-70">
                            <h2 className="text-xl font-bold mb-4">Poloha</h2>
                            <div className="h-[300px] bg-gray-200 rounded-lg relative overflow-hidden">
                                <ParcelMap onParcelClick={() => { }} autoCenter selectedIds={[parcel!.id]} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Price and Contact */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-6">
                            <div className="bg-white z-50 p-6 rounded-lg shadow-md mb-6">
                                <div className="mb-6">
                                    <div className="text-gray-600 mb-1">Výměra:</div>
                                    <div className="text-2xl font-bold flex items-center">
                                        <FaRuler className="mr-2 text-gray-500" />
                                        {parcel.plocha} m²
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-gray-600 mb-1">Cena za m²:</div>
                                    <div className="text-2xl font-bold">
                                        {parcel.cena! / parcel.plocha} Kč <span className="text-xl font-normal">/ m²</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-gray-600 mb-1">Celková cena:</div>
                                    <div className="text-3xl font-bold text-amber-500">
                                        {formatPrice(parcel.cena!)}
                                    </div>
                                </div>

                                <button
                                    disabled
                                    className="w-full bg-gray-400 text-white font-bold py-3 px-4 rounded-lg mb-4 cursor-not-allowed"
                                >
                                    Již zarezervovaný
                                </button>

                                <div className="text-center text-gray-600 text-sm">
                                    Máte zájem o podobné pozemky? Prohlédněte si naše další
                                    nabídky.
                                </div>
                            </div>

                            {/* Similar Properties */}
                            <div>
                                <h2 className="text-xl font-bold mb-4">
                                    Další dostupné pozemky
                                </h2>
                                <div className="space-y-4">
                                    {AllParcels.filter(x => x.id != parcel.id && !x.prodano && !x.rezervovano).slice(0, 3).map(x =>
                                        <PropertyCard key={x.id} parcel={x} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}