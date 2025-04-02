import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ParcelCard from "../components/ParcelCard";
import { AllParcels } from "../ParcelData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stavební parcely Nasavrky - Váš nový domov čeká</title>
        <meta name="description" content="Objevte prémiové stavební pozemky v Nasavrkách, ideální pro výstavbu vašeho vysněného domova." />
      </Head>

      {/* Úvodní sekce */}
      <section className="relative h-[70vh]">
        <Image
          src="/hero.jpg"
          alt="Krajina Nasavrk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stavební parcely Nasavrky</h1>
            <p className="text-xl md:text-2xl mb-8">Váš nový domov čeká</p>
            <Link href="/parcely" className="btn-secondary text-lg px-8 py-3">
              Zobrazit dostupné parcely
            </Link>
          </div>
        </div>
      </section>

      {/* Sekce s význačnými parcelami */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Vybrané stavební parcely</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AllParcels.filter(x => !x.prodano).sort((a, b) => a.cena - b.cena).slice(0, 3).map(parcela => (
              <ParcelCard key={parcela.id} parcel={parcela} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/parcely" className="btn-primary px-8 py-3">
              Zobrazit všechny parcely
            </Link>
          </div>
        </div>
      </section>

      {/* Sekce Proč zvolit Nasavrky */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Proč zvolit Nasavrky?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">Přírodní krása</h3>
              <p className="text-gray-600">
                Zasazené v malebném prostředí, Nasavrky nabízejí dokonalou rovnováhu mezi venkovským klidem a moderním pohodlím.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">Silná komunita</h3>
              <p className="text-gray-600">
                Připojte se k naší přátelské komunitě s výbornými školami, místními službami a pravidelnými kulturními akcemi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">Strategická poloha</h3>
              <p className="text-gray-600">
                Užijte si klidný venkovský život s pohodlným spojením do větších městských center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sekce Jak koupit */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Jak koupit parcelu</h2>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Prohlédněte si dostupné parcely</h3>
                  <p className="text-gray-600 mt-1">
                    Prozkoumejte náš katalog dostupných stavebních pozemků a najděte svůj ideální pozemek.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Kontaktujte náš úřad</h3>
                  <p className="text-gray-600 mt-1">
                    Obraťte se na náš městský úřad a domluvte si prohlídku.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Získejte odborné poradenství</h3>
                  <p className="text-gray-600 mt-1">
                    Získejte profesionální pomoc s procesem nákupu a stavebními předpisy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Dokončete transakci</h3>
                  <p className="text-gray-600 mt-1">
                    Dokončete svůj nákup s naší podporou v každém kroku.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/kontakt" className="btn-primary px-8 py-3">
                Kontaktujte nás ještě dnes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
