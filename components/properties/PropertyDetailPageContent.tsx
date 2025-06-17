"use client";

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
import PropertyCard from "./PropertyCard";
import BenefitItem from "./BenefitItem";

const AllParcels = shuffle(getAllParcels());

function shuffle(array: any[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default function PropertyDetailPage({ parcel: currentParcel }: { parcel: Parcela }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const router = useRouter();
    function handleNextImage() {
        setCurrentImageIndex((prev) => (prev === currentParcel!.obrazky!.length - 1 ? 0 : prev + 1));
    }

    function handlePrevImage() {
        setCurrentImageIndex((prev) => (prev === 0 ? currentParcel!.obrazky!.length - 1 : prev - 1));
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="mb-4 text-sm text-gray-600">
                    <Link href="/parcely" className="hover:text-amber-500">
                        Parcely na prodej
                    </Link>
                    <span className="mx-2">›</span>
                    <span>Pozemek {currentParcel.id}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        {/* Header pozemku */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 animate-slide-up"> {/* Responzivní uspořádání a animace */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Pozemek {currentParcel.id}</h1>
                                <p className="text-gray-600 flex items-center text-lg">
                                    <FaMapMarkerAlt className="mr-2 text-primary" /> {/* Barevná ikona */}
                                    {currentParcel.lokalita}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg text-lg font-medium text-gray-700 shadow-sm"> {/* Větší padding a stín */}
                                    <FaRuler className="w-5 h-5 mr-2 text-gray-500" />
                                    <span>{currentParcel.plocha} m²</span>
                                </div>
                                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg text-lg font-medium text-gray-700 shadow-sm">
                                    <svg
                                        className="w-5 h-5 mr-2 text-gray-500"
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
                                    <span>Orná půda</span> {/* Zde by mohl být dynamický typ pozemku */}
                                </div>
                            </div>
                        </div>

                        {/* Galerie obrázků/videa - Vylepšený Hero Banner pro detail */}
                        <div className="relative h-[450px] md:h-[600px] mb-4 rounded-xl overflow-hidden shadow-lg animate-fade-in"> {/* Větší výška, zaoblení a stín */}
                            {currentParcel.obrazky[currentImageIndex].endsWith("mp4") ? (
                                <video src={currentParcel.obrazky[currentImageIndex]} autoPlay muted loop className="w-full h-full object-cover" />
                            ) : (
                                <Image
                                    src={currentParcel.obrazky[currentImageIndex]}
                                    alt={`Pozemek ${currentParcel.id} - obrázek ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105" // Jemná animace na hover
                                    priority
                                />
                            )}
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-3 rounded-full text-gray-800 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500" // Vylepšený styl
                                aria-label="Předchozí obrázek"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-3 rounded-full text-gray-800 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500" // Vylepšený styl
                                aria-label="Další obrázek"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            {/* Indikátory obrázků */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                                {currentParcel.obrazky.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-amber-500 scale-125' : 'bg-white/70 hover:bg-white'
                                            }`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-10 animate-fade-in delay-200"> {/* Více sloupců pro menší obrázky a animace */}
                            {currentParcel.obrazky.map((img, index) => (
                                <div
                                    key={index}
                                    className={`relative h-20 sm:h-24 rounded-lg overflow-hidden cursor-pointer shadow-sm transition-all duration-300 ${index === currentImageIndex ? "ring-3 ring-amber-500 scale-105" : "hover:scale-105 hover:shadow-md"
                                        }`} // Vylepšený hover a aktivní stav
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    {currentParcel.obrazky[index].endsWith("mp4") ? (
                                        <video src={currentParcel.obrazky[index]} className="w-full h-full object-cover" />
                                    ) : (
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Popis pozemku */}
                        <div className="mb-10 animate-fade-in delay-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-primary/20 pb-2">Popis pozemku</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Nabízíme k prodeji <strong>krásný, slunný stavební pozemek</strong> v malebném městečku Nasavrky. Nachází se v klidné lokalitě s úchvatným výhledem na okolní přírodu Železných hor. Tento pozemek je ideální volbou pro ty, kteří sní o výstavbě <strong>rodinného domu bez starostí</strong>.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                S celkovou výměrou <strong>{currentParcel.plocha} m²</strong> je pozemek <strong>plně zasíťovaný</strong> – to znamená, že na hranici parcely jsou přivedeny veškeré inženýrské sítě: <strong>elektřina, voda, kanalizace a optický internet</strong>. Můžete tak začít stavět okamžitě a bez dalších nákladů na připojení.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Pozemek se nachází v rozvojové zóně obce s <strong>výbornou dostupností ke všem klíčovým službám</strong>. V bezprostřední blízkosti naleznete veškerou občanskou vybavenost – školy, školky, obchody, restaurace a sportoviště. Lokalita Nasavrk navíc nabízí nekonečné možnosti pro rekreaci a aktivní odpočinek v přírodě.
                            </p>
                        </div>

                        {/* Sekce "Proč zvolit Nasavrky?" - Vylepšená a strukturovaná verze */}
                        <div className="mb-10 animate-fade-in-section delay-400">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-primary/20 pb-2">Proč se stěhovat do Nasavrk?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"> {/* 2 sloupce pro lepší přehlednost */}
                                <BenefitItem
                                    icon={<FaRoad className="text-primary" />}
                                    title="Kompletně zasíťované pozemky"
                                    description="Naše parcely jsou plně připraveny k okamžité stavbě s přivedenou elektřinou, vodou, kanalizací a optickým internetem. Ušetříte čas i peníze za zdlouhavé připojování."
                                />
                                <BenefitItem
                                    icon={<FaLeaf className="text-green-600" />}
                                    title="Klid a příroda na dosah"
                                    description="Užijte si život v srdci chráněné oblasti Železných hor. Panoramatické výhledy, čistý vzduch a kilometry cyklostezek a turistických tras přímo za domem."
                                />
                                <BenefitItem
                                    icon={<FaSchool className="text-yellow-600" />}
                                    title="Vzdělání a služby v obci"
                                    description="Moderní školka a kompletní základní škola přímo v Nasavrkách. Dále pošta, lékař, lékárna, obchody a restaurace – vše v docházkové vzdálenosti."
                                />
                                <BenefitItem
                                    icon={<FaBus className="text-blue-600" />}
                                    title="Skvělá dopravní dostupnost"
                                    description="Klid venkova s rychlým spojením do měst. Jen 20 km do Pardubic a 11 km do Chrudimi, s rychlým napojením na hlavní silnici I/37 a dálnici D1."
                                />
                                <BenefitItem
                                    icon={<FaBaseballBall className="text-red-600" />}
                                    title="Sportovní a kulturní vyžití"
                                    description="Fotbalové hřiště, workout zóna, volejbal, tenisové kurty, sokolovna a pravidelné kulturní akce. Aktivní život pro celou rodinu je zaručen."
                                />
                                <BenefitItem
                                    icon={<FaHandsHelping className="text-teal-600" />}
                                    title="Silná komunita a moderní zázemí"
                                    description="Přátelská komunita s moderním náměstím, novou hasičskou zbrojnicí a upravenými veřejnými prostory. Zažijte jedinečnou atmosféru obce."
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4  pb-2">Poloha na mapě</h2>
                            <div className="h-[300px] bg-gray-200 rounded-lg relative overflow-hidden">
                                <ParcelMap onParcelClick={() => { }} selectedIds={[currentParcel.id]} autoCenter />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="sticky top-6">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-2xl font-bold text-primary mb-5">Informace o parcele</h2>
                                <div className="mb-6">
                                    <div className="text-gray-600 mb-1">Výměra:</div>
                                    <div className="text-2xl font-bold flex items-center">
                                        <FaRuler className="mr-2 text-gray-500" />
                                        {currentParcel.plocha} m²
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-gray-600 mb-1">Cena za m²:</div>
                                    <div className="text-2xl font-bold">
                                        {currentParcel.cena! / currentParcel.plocha} Kč <span className="text-xl font-normal">/ m²</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-gray-600 mb-1">Celková cena:</div>
                                    <div className="text-3xl font-bold text-amber-500">
                                        {formatPrice(currentParcel.cena!)}
                                    </div>
                                </div>

                                <button onClick={() => router.push("/kontakt")} className="w-full bg-amber-500 cursor-pointer hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg mb-4">
                                    Nezávazná poptávka
                                </button>

                                <div className="text-center text-gray-600 text-sm">
                                    Máte zájem o prohlídku nebo další informace?
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-4">Další pozemky</h2>
                                <div className="space-y-4">
                                    {AllParcels.filter(x => x.id != currentParcel.id && !x.prodano && !x.rezervovano).slice(0, 3).map(x =>
                                        <PropertyCard key={x.id} parcel={x} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-12">
                    <hr className="border border-gray-200 my-12" />
                    <h2 className="text-2xl font-bold mb-6">Občanská vybavenost</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AmenityItem title="Restaurace" distance="1 Km (10 min)" />
                        <AmenityItem title="Hospoda" distance="1 Km (10 min)" />
                        <AmenityItem title="Bus MHD" distance="400m (5 min)" />
                        <AmenityItem title="Lékař" distance="1 Km (10 min)" />
                        <AmenityItem title="Pošta" distance="1 Km (10 min)" />
                        <AmenityItem title="Sportoviště" distance="1 Km (10 min)" />
                        <AmenityItem title="Školka" distance="1 Km (10 min)" />
                        <AmenityItem title="Škola" distance="1 Km (10 min)" />
                        <AmenityItem title="Obchod" distance="1 Km (10 min)" />
                    </div>
                </div>
            </div>
        </>
    );
}