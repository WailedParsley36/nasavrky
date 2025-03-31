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
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MapScroller } from "../../components/ParcelMap";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Kontakt | Stavební parcely Nasavrky</title>
        <meta
          name="description"
          content="Kontaktní informace pro zájemce o stavební parcely v Nasavrkách"
        />
      </Head>

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
                <MapContainer
                  center={[49.844399740570665, 15.802567982690675]}
                  zoom={16}
                  className="w-full h-full"
                >
                  <MapScroller />
                  <Marker position={[49.84445841564695, 15.802217735898903]} />
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
                    subdomains="abcd"
                    maxZoom={20}
                  />
                </MapContainer>
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

              <form>
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
                    className="w-full p-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
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
                    className="w-full p-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500"
                    required
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

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Proč Nasavrky?</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 16C4 17.1 4.9 18 6 18H7V19C7 19.55 7.45 20 8 20H9C9.55 20 10 19.55 10 19V18H14V19C14 19.55 14.45 20 15 20H16C16.55 20 17 19.55 17 19V18H18C19.1 18 20 17.1 20 16V6C20 2.5 16.42 2 12 2C7.58 2 4 2.5 4 6V16Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Skvělá dostupnost</h3>
                    <p className="text-gray-600 text-sm">
                      Ve městě jsou 2 aut. zastávky, díky kterým se dostanete
                      kam potřebujete
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 4H4V6H20V4Z" fill="currentColor" />
                      <path d="M4 8H20V20H4V8Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Vše co potřebujete na jednom místě
                    </h3>
                    <p className="text-gray-600 text-sm">
                      V okolí je spousta obchodů pro uspokojení i těch
                      nejnáročnějších potřeb
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-gray-400 mr-4 mt-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.05 8.05C4.95 9.15 4.95 10.95 6.05 12.05L12 18L17.95 12.05C19.05 10.95 19.05 9.15 17.95 8.05C16.85 6.95 15.05 6.95 13.95 8.05L12 10L10.05 8.05C8.95 6.95 7.15 6.95 6.05 8.05Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Perfektní na odpočinek od rušného města
                    </h3>
                    <p className="text-gray-600 text-sm">
                      V blízkosti Nasavrk je spoustu přírody, které Vám umožní
                      si vydechnout
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
