"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { NasavrkyMap } from "../../components/ParcelMapWithoutSSR";
import { MdPhonelinkErase } from "react-icons/md";
import { getBaseUrl } from "../../components/properties/functions";
import { getAllParcels } from "../../ParcelData";

const AllParcels = getAllParcels();
const availableParcelsCount = AllParcels.filter(x => !x.prodano && !x.rezervovano).length;

const realEstateAgencySchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgency",
  "name": "Stavební parcely Nasavrky",
  "description": `Oficiální prodej stavebních parcel v Nasavrkách. Kompletně zasíťované pozemky pro váš nový domov v malebné krajině Železných hor, blízko Pardubic a Chrudimi. Aktuálně k dispozici ${availableParcelsCount} parcel.`,
  "url": getBaseUrl(),
  "image": `${getBaseUrl()}/hero.jpg`,
  "telephone": "+420 123 456 789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Náměstí 1",
    "addressLocality": "Nasavrky",
    "postalCode": "538 25",
    "addressCountry": "CZ"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+420 123 456 789",
    "contactType": "customer service"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nabídka stavebních parcel v Nasavrkách",
    "url": `${getBaseUrl()}/parcely`,
    "numberOfItems": availableParcelsCount
  },
  "openingHours": "Mo-Fr 08:00-16:00",
};

const IconBus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-4 flex-shrink-0">
    <path d="M18 6H8a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4Z" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="18" y1="2" x2="18" y2="6" />
    <path d="M12 10v4" />
    <path d="M15 10v4" />
    <path d="M9 10v4" />
  </svg>
);

const IconShop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-4 flex-shrink-0">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IconNature = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 mr-4 flex-shrink-0">
    <path d="M17.42 6.35a7 7 0 0 0-9.88 0C6.35 7.46 6 8.94 6 10s.35 2.54 1.54 3.73l6.46 6.47a1.5 1.5 0 0 0 2.12 0l4.24-4.24a7 7 0 0 0 0-9.88z" />
    <line x1="15.82" y1="8.18" x2="8.18" y2="15.82" />
  </svg>
);

function ContactPage() {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const telRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgencySchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-8 mt-10">Kontaktní informace</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-xl font-bold mb-4">
                    Městský úřad Nasavrky
                  </h2>

                  <div className="flex items-start mb-4">
                    <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Náměstí, Nasavrky</p>
                      <p className="text-gray-600">538 25 Nasavrky</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <FaPhone className="text-amber-500 mr-3 flex-shrink-0" />
                    <a
                      href="tel:+420123456789"
                      className="hover:text-amber-500"
                    >
                      +420 123 456 789
                    </a>
                  </div>

                  <div className="flex items-center mb-4">
                    <FaEnvelope className="text-amber-500 mr-3 flex-shrink-0" />
                    <a
                      href="mailto:info@nasavrky.cz"
                      className="hover:text-amber-500"
                    >
                      info@nasavrky.cz
                    </a>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h2 className="text-xl font-bold mb-4">Úřední hodiny</h2>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Pondělí</span>
                      <span>8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Úterý</span>
                      <span>8:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Středa</span>
                      <span>8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Čtvrtek</span>
                      <span>8:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pátek</span>
                      <span>8:00 - 14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="h-[400px] relative">
                <NasavrkyMap />
              </div>
            </div>

            {/* How to buy section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Jak koupit parcelu</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 text-amber-500 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="font-bold mb-2">
                    Prohlédněte si dostupné parcely
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prozkoumejte náš katalog dostupných stavebních pozemků a
                    najděte svůj ideální pozemek.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 text-amber-500 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Kontaktujte náš úřad</h3>
                  <p className="text-gray-600 text-sm">
                    Obraťte se na náš městský úřad a domluvte si prohlídku.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 text-amber-500 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="font-bold mb-2">
                    Získejte odborné poradenství
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Získejte profesionální pomoc s procesem nákupu a stavebními
                    předpisy.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 text-amber-500 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Dokončete transakci</h3>
                  <p className="text-gray-600 text-sm">
                    Dokončete svůj nákup s naší podporou v každém kroku.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 top-6">
              <h2 className="text-xl font-bold mb-4">Kontaktujte nás</h2>
              <p className="text-gray-600 mb-6">
                Vyplňte formulář a my se vám ozveme co nejdříve.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault();
                const recipient = "info@nasavrky.cz";
                const subject = `${nameRef.current?.value} - Poptávka po pozemku`;
                const body = bodyRef.current!.textContent!.length > 5 ? bodyRef.current?.textContent : `Dobrý den,

rád bych se nezávazně zeptal na možnost koupi pozemku ve vaší oblasti. Mám zájem o pozemek XXXX.

Byl bych rád, kdybyste mě mohli informovat o aktuálních nabídkách nebo o možnostech získání informací o pozemcích určených k prodeji.

Děkuji za Váš čas a případnou odpověď.

S pozdravem,
${nameRef.current?.value}
Tel: ${telRef.current?.value}`;

                window.open(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
              }}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    className="w-full p-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    ref={telRef}
                    id="phone"
                    className="w-full p-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    ref={bodyRef}
                    className="w-full p-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center"
                >
                  Odeslat zprávu
                  <FaArrowRight className="ml-2" />
                </button>
              </form>
            </div>

            {/* Improved Benefits Panel */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-7.5">Proč Nasavrky?</h2>

              <div className="space-y-6"> {/* Zvětšena mezera mezi položkami */}
                <div className="flex items-start">
                  <IconBus />
                  <div>
                    <h3 className="font-bold text-gray-800">Vynikající dopravní dostupnost</h3>
                    <p className="text-gray-600 text-sm">
                      Město disponuje strategickou polohou a efektivním dopravním spojením, včetně několika autobusových zastávek, které zajišťují rychlou a pohodlnou přepravu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <IconShop />
                  <div>
                    <h3 className="font-bold text-gray-800">Kompletní občanská vybavenost</h3>
                    <p className="text-gray-600 text-sm">
                      Nasavrky nabízejí širokou škálu obchodů a služeb, které uspokojí i ty nejnáročnější potřeby pro každodenní život.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <IconNature />
                  <div>
                    <h3 className="font-bold text-gray-800">Oáza klidu a přírody</h3>
                    <p className="text-gray-600 text-sm">
                      V blízkosti Nasavrk se rozkládá nádherná příroda, která je ideální pro relaxaci a aktivní odpočinek daleko od městského shonu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
