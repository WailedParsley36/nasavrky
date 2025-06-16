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
import { getAllParcels, Parcela } from "../../../ParcelData";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { formatPrice } from "../page";
import { ParcelMap } from "../../../components/ParcelMapWithoutSSR";

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

function PropertyDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id: rawId } = useParams();

  const id = base64url.decode(rawId as string);
  const currentParcel = AllParcels.find((x) => x.id == id);

  if (!currentParcel) return <PropertyNotFoundPage />;
  else if (currentParcel.prodano)
    return <SoldPropertyPage parcel={currentParcel} />;
  else if (currentParcel.rezervovano)
    return <ReservedPropertyPage parcel={currentParcel} />;

  const router = useRouter();
  function handleNextImage() {
    setCurrentImageIndex((prev) => (prev === currentParcel!.obrazky!.length - 1 ? 0 : prev + 1));
  }

  function handlePrevImage() {
    setCurrentImageIndex((prev) => (prev === 0 ? currentParcel!.obrazky!.length - 1 : prev - 1));
  }

  return (
    <>
      <Head>
        <title key={0}>Pozemek {currentParcel.id} | {currentParcel.lokalita}</title>
        <meta key={0}
          name="description"
          content="Stavební parcela na prodej v Nasavrkách"
        />
      </Head>

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
                Nabízíme k prodeji krásný, slunný pozemek v malebném městečku Nasavrky, situovaný v klidné lokalitě s výhledem na okolní přírodu. Tento pozemek je ideální volbou pro ty, kteří sní o výstavbě rodinného domu, rekreačního objektu nebo hledají strategickou investiční příležitost.
              </p>
              <p className="text-gray-700 leading-relaxed">
                S celkovou výměrou {currentParcel.plocha} m² se pozemek nachází v rozvojové zóně obce, což zajišťuje výbornou dostupnost ke všem klíčovým službám. V bezprostřední blízkosti naleznete veškerou občanskou vybavenost – školy, školky, obchody, restaurace a sportoviště. Lokalita Nasavrk nabízí dechberoucí výhledy do okolní krajiny a nekonečné možnosti pro rekreaci a aktivní odpočinek v přírodě.
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
                <ParcelMap onParcelClick={() => { }} selectedIds={[currentParcel.id]} />
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
                    {currentParcel.cena / currentParcel.plocha} Kč <span className="text-xl font-normal">/ m²</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-gray-600 mb-1">Celková cena:</div>
                  <div className="text-3xl font-bold text-amber-500">
                    {formatPrice(currentParcel.cena)}
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

function SoldPropertyPage({ parcel }: { parcel: Parcela }) {
  return (
    <>
      <Head>
        <title>Pozemek {parcel.id} | Nasavrky - Prodáno</title>
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
            <div className="bg-red-100 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 flex items-center">
              <FaExclamationTriangle className="text-red-500 mr-3 text-xl" />
              <div>
                <h2 className="font-bold text-lg">
                  Tento pozemek je již prodaný
                </h2>
                <p>
                  Omlouváme se, ale tento pozemek již není k dispozici.
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
                <div className="bg-red-500/80 text-white font-bold py-3 px-8 rounded-lg transform -rotate-12 text-3xl">
                  PRODÁNO
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
                    {parcel.cena / parcel.plocha} Kč <span className="text-xl font-normal">/ m²</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-gray-600 mb-1">Celková cena:</div>
                  <div className="text-3xl font-bold text-amber-500">
                    {formatPrice(parcel.cena)}
                  </div>
                </div>

                <button
                  disabled
                  className="w-full bg-gray-400 text-white font-bold py-3 px-4 rounded-lg mb-4 cursor-not-allowed"
                >
                  Již prodáno
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

function ReservedPropertyPage({ parcel }: { parcel: Parcela }) {
  console.log(parcel)

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
                    {parcel.cena / parcel.plocha} Kč <span className="text-xl font-normal">/ m²</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-gray-600 mb-1">Celková cena:</div>
                  <div className="text-3xl font-bold text-amber-500">
                    {formatPrice(parcel.cena)}
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


function PropertyNotFoundPage() {
  return (
    <>
      <Head>
        <title>Pozemek nenalezen | Nasavrky</title>
        <meta name="description" content="Požadovaný pozemek nebyl nalezen" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/parcely" className="hover:text-amber-500">
            Parcely na prodej
          </Link>
          <span className="mx-2">›</span>
          <span>Parcela nenalezena</span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-full p-6">
              <FaSearch className="text-gray-400 text-5xl" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">Parcela nebyla nalezena</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Omlouváme se, ale požadovaná parcela neexistuje nebo již není v naší
            nabídce. Zkontrolujte prosím adresu URL nebo se podívejte na naše
            další dostupné parcely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2" />
              Zpět na hlavní stránku
            </Link>
            <Link
              href="/parcely"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg"
            >
              Zobrazit dostupné pozemky
            </Link>
          </div>
        </div>

        {/* Suggested Properties */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dostupné parcely</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard
              image="/images/property1.jpg"
              price={1750}
              size={940}
              parcel="2502/5"
              location="Větrná 415-400, 538 25 Nasavrky"
            />
            <PropertyCard
              image="/images/property2.jpg"
              price={1250}
              size={850}
              parcel="2502/5"
              location="Větrná 415-400, 538 25 Nasavrky"
            />
            <PropertyCard
              image="/images/property3.jpg"
              price={1100}
              size={1002}
              parcel="2502/5"
              location="Větrná 415-400, 538 25 Nasavrky"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">
            Proč hledat pozemek v Nasavrkách?
          </h2>

          <div className="space-y-6">
            <BenefitItem
              icon={<BusIcon />}
              title="Skvělá dostupnost"
              description="Ve městě jsou 2 aut. zastávky, díky kterým se dostanete kam potřebujete"
            />
            <BenefitItem
              icon={<ShopIcon />}
              title="Vše co potřebujete na jednom místě"
              description="V okolí je spousta obchodů pro uspokojení i těch nejnáročnějších potřeb"
            />
            <BenefitItem
              icon={<LeafIcon />}
              title="Perfektní na odpočinek od rušného města"
              description="V blízkosti Nasavrk je spoustu přírody, které Vám umožní si vydechnout"
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface PropertyCardProps {
  parcel: Parcela
}

function PropertyCard({
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
          {formatPrice(parcel.cena)}
        </div>
        <div className="text-gray-600 text-xs mb-2 truncate">{parcel.lokalita}</div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <FaRuler className="mr-1 text-gray-500" />
            <span>{parcel.plocha} m²</span>
          </div>
          <div className="flex items-center">
            <span>{parcel.cena / parcel.plocha} Kč / m²</span>
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

interface AmenityItemProps {
  title: string;
  distance: string;
}

function AmenityItem({ title, distance }: AmenityItemProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
      <div className="font-medium">{title}</div>
      <div className="text-gray-600 text-sm">{distance}</div>
    </div>
  );
}

export default PropertyDetailPage;

// Amenities Section
function AmenitiesSection() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6">Občanská vybavenost</h2>

      {/* Benefits */}
      <div className="space-y-4 mb-8">
        <BenefitItem
          icon={<BusIcon />}
          title="Skvělá dostupnost"
          description="Ve městě jsou 2 aut. zastávky, díky kterým se dostanete kam potřebujete"
        />
        <BenefitItem
          icon={<ShopIcon />}
          title="Vše co potřebujete na jednom místě"
          description="V okolí je spousta obchodů pro uspokojení i těch nejnáročnějších potřeb"
        />
        <BenefitItem
          icon={<LeafIcon />}
          title="Perfektní na odpočinek od rušného města"
          description="V blízkosti Nasavrk je spoustu přírody, které Vám umožní si vydechnout"
        />
      </div>

      <div className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Restaurace</h3>
            <ul className="space-y-2 text-gray-600">
              <li>U Kozlíků (300m)</li>
              <li>Jiná rest. (150m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Hospoda</h3>
            <ul className="space-y-2 text-gray-600">
              <li>U Kozlíků (300m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Bus MHD</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (400m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Lékař</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (595m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Pošta</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (595m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Sportoviště</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (595m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Školka</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (595m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Škola</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (595m)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Obchod</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Nasavrky (595m)</li>
              <li>Nasavrky (595m)</li>
              <li>Nasavrky (595m)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start">
      <div className="text-gray-400 mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function BusIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16C4 17.1 4.9 18 6 18H7V19C7 19.55 7.45 20 8 20H9C9.55 20 10 19.55 10 19V18H14V19C14 19.55 14.45 20 15 20H16C16.55 20 17 19.55 17 19V18H18C19.1 18 20 17.1 20 16V6C20 2.5 16.42 2 12 2C7.58 2 4 2.5 4 6V16ZM7.5 14C6.67 14 6 13.33 6 12.5C6 11.67 6.67 11 7.5 11C8.33 11 9 11.67 9 12.5C9 13.33 8.33 14 7.5 14ZM16.5 14C15.67 14 15 13.33 15 12.5C15 11.67 15.67 11 16.5 11C17.33 11 18 11.67 18 12.5C18 13.33 17.33 14 16.5 14ZM18 9H6V6H18V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4H4V6H20V4Z" fill="currentColor" />
      <path d="M4 8H20V20H4V8Z" fill="currentColor" />
      <path
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.05 8.05C4.95 9.15 4.95 10.95 6.05 12.05L12 18L17.95 12.05C19.05 10.95 19.05 9.15 17.95 8.05C16.85 6.95 15.05 6.95 13.95 8.05L12 10L10.05 8.05C8.95 6.95 7.15 6.95 6.05 8.05Z"
        fill="currentColor"
      />
    </svg>
  );
}
