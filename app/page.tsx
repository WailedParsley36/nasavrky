"use client"

import Image from "next/image";
import Link from "next/link";
import ParcelCard from "../components/ParcelCard";
import { getAllParcels } from "../ParcelData"; // Předpokládáme, že getAllParcels vrací pole objektů parcel
import { getBaseUrl } from "../components/properties/functions";

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

const whyChooseNasavrkyPoints = [
  {
    title: "Stavba bez kompromisů",
    description: `Žádné skryté náklady ani zdlouhavé vyřizování. Nabízíme ${availableParcelsCount} stavebních pozemků o rozloze 800–1000 m². Jsou kompletně připravené pro váš projekt. Každá parcela je plně zasíťovaná – s přivedenou elektřinou, vodou, kanalizací a optickým internetem. Můžete tak začít stavět okamžitě a ušetřit tisíce korun i drahocenný čas.`,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-4 flex-shrink-0"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" /></svg>,
    borderColorClass: 'border-green-600',
  },
  {
    title: "Dechberoucí výhledy",
    description: "Probuďte se s panoramatickými výhledy do malebné a chráněné krajinné oblasti Železných hor. Dýchejte křišťálově čistý vzduch a užívejte si bezkonkurenční klid. Lokalita je ideální pro relaxaci i aktivní životní styl. Okolí nabízí kilometry cyklostezek, turistických tras a nespočet příležitostí pro rodinné výlety a outdoorové aktivity.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-4 flex-shrink-0"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>,
    borderColorClass: 'border-blue-500',
  },
  {
    title: "Pohodlí pro rodinu",
    description: "Zapomeňte na ranní spěch a dlouhé dojíždění. V Nasavrkách najdete moderní, architektonicky oceněnou mateřskou školku s bezbariérovým přístupem. Nechybí ani kompletní základní škola přímo v obci. Vaše děti to budou mít do školy doslova pár minut pěšky. To vám zajistí více klidu, času a bezpečí pro celou rodinu.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mr-4 flex-shrink-0"><path d="M14 22v-4a2 2 0 0 0-2-2L6 16c-2 0-3-1-3-3V7c0-2 2-3 4-3h10c2 0 4 1 4 3v1" /><path d="M18 22V8.5L12 2L6 8.5V22" /><path d="M12 22v-16" /><path d="M2 14.24a6 6 0 0 0 12 0" /></svg>,
    borderColorClass: 'border-yellow-500',
  },
  {
    title: "Vše na jednom místě",
    description: "Užijte si komfort života, kde máte vše, co potřebujete, přímo na dosah ruky. V Nasavrkách naleznete poštu, lékaře, lékárnu, široký výběr potravin, řeznictví, drogerii, papírnictví a zahrádkářství. Pro společenské vyžití jsou k dispozici čtyři útulné restaurace a příjemná kavárna. Dlouhé cesty za nákupy jsou minulostí!",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mr-4 flex-shrink-0"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
    borderColorClass: 'border-purple-500',
  },
  {
    title: "Aktivní životní styl",
    description: "Ať už jste nadšenci do sportu, nebo jen hledáte relaxaci, Nasavrky vás nadchnou. K dispozici je fotbalové hřiště s moderní workout zónou. Dále hřiště na volejbal i beach volejbal. Nechybí ani sokolovna s tělocvičnou, badmintonem, florbalem a jógou. Naleznete zde i skatepark, tenisové kurty a víceúčelové hřiště u školy. Vše v docházkové vzdálenosti pro zdravý a aktivní život.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-4 flex-shrink-0"><path d="M14.4 14.4 9.6 9.6" /><path d="M18.8 4.6l-3.2 3.2" /><path d="M16.6 7.8l3.2-3.2" /><path d="M8.6 15.4l-3.2 3.2" /><path d="M4.6 18.8l3.2-3.2" /><path d="M18 10a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v0" /></svg>,
    borderColorClass: 'border-red-500',
  },
  {
    title: "Klid a rychlé spojení",
    description: "Užijte si perfektní rovnováhu: klidné venkovské bydlení s bleskovým spojením do větších městských center. Jsme pouhých 20 km od krajského města Pardubice a jen 11 km do Chrudimi. Rychlé napojení na hlavní silnici I/37 a dálniční síť D1 zajišťuje pohodlné dojíždění do práce i za kulturu. Ideální kombinace klidu a dostupnosti pro váš život.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 mr-4 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="10" r="3" /></svg>,
    borderColorClass: 'border-orange-500',
  },
  {
    title: "Místo, kde se budete cítit doma",
    description: "Staňte se součástí přátelské a aktivní komunity, kde se budete cítit okamžitě jako doma. Nasavrky se pyšní novou hasičskou zbrojnicí, moderním náměstím a krásně upraveným veřejným prostorem. Pravidelně zde probíhají kulturní a sportovní akce (dětské dny, cykloakce, slavnosti), které posilují sousedské vztahy a vytvářejí jedinečnou atmosféru.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 mr-4 flex-shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M6 17a4 4 0 0 1-3-3.87" /></svg>,
    borderColorClass: 'border-teal-500',
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgencySchema) }}
      />

      {/* --- Úvodní sekce - Vylepšený a údernější text --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Malebná krajina Nasavrk: Ideální místo pro váš budoucí domov"
          fill
          className="object-cover animate-fade-in-slow"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-5xl z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl animate-slide-up">
              Váš nový domov v srdci<br /> Železných hor
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light drop-shadow-xl animate-fade-in delay-300">
              Objevte {availableParcelsCount} exkluzivních parcel připravených k okamžité stavbě.
              <br className="hidden md:inline" /> Život, kde se příroda potkává s pohodlím – jen pár minut od Pardubic a Chrudimi.
            </p>
            <div className="text-center mt-12">
              <Link href="/parcely" className="btn-secondary text-base md:text-xl px-8 py-4 inline-block">
                Zobrazit dostupné parcely hned teď!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sekce Proč zvolit Nasavrky - Více strukturované a plynulé texty --- */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 animate-fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-12 animate-slide-up">
            Proč si vybrat Nasavrky? Důvody, proč je to ideální místo pro váš nový domov.
          </h2>
          <p className="text-base text-gray-700 text-center mb-20 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Nasavrky nejsou jen adresa, jsou to domov. Objevte klíčové výhody, které z této malebné obce dělají perfektní volbu pro život plný klidu, přírody a zároveň s veškerým pohodlím moderního bydlení.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseNasavrkyPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-xl ${point.borderColorClass} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group overflow-hidden animate-fade-in-card`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full -mt-12 -ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center relative z-10">
                  {point.icon}
                  {point.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed relative z-10">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/kontakt" className="btn-primary text-base md:text-xl px-8 py-4 inline-block">
              Domluvte si prohlídku Nasavrk a objevte svůj sen!
            </a>
          </div>
        </div>
      </section>

      {/* --- Sekce s význačnými parcelami - EXKLUZIVNÍ NABÍDKA --- */}
      <section className="py-24 bg-gray-100 animate-fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-12 animate-slide-up">
            Exkluzivní nabídka: Vybrané stavební parcely k prodeji
          </h2>
          <p className="text-base text-gray-700 text-center mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Nenechte si ujít jedinečnou příležitost! Prohlédněte si nejžádanější a nejlépe umístěné pozemky, které jsou momentálně k dispozici. Jedná se o omezenou nabídku, tyto parcely se prodávají extrémně rychle!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {AllParcels.filter((x) => !x.prodano && !x.rezervovano)
              .sort((a, b) => a.cena! - b.cena!)
              .slice(0, 3)
              .map((parcela, index) => (
                <div key={parcela.id} className={`animate-fade-in-card delay-${(index + 1) * 100}`}>
                  <ParcelCard parcel={parcela} />
                </div>
              ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/parcely" className="btn-primary text-base md:text-xl px-10 py-5 inline-block font-bold transition duration-300 ease-in-out hover:scale-105 transform hover:shadow-2xl animate-pop-in delay-400">
              Zobrazit všech {availableParcelsCount} dostupných parcel
            </Link>
          </div>
        </div>
      </section>

      {/* --- Sekce Jak koupit - ZJEDNODUŠENÝ A DŮVĚRYHODNÝ PROCES --- */}
      <section className="py-24 bg-white animate-fade-in-section">
        <div className="container mx-auto px-4">
          <h2
            id="info"
            className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-12 sm:mb-20 animate-slide-up"
          >
            Váš průvodce krok za krokem: Koupě parcely nikdy nebyla snazší
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-primary group hover:shadow-lg transition-shadow duration-300 animate-fade-in-card delay-100">
                <div className="bg-primary hidden sm:flex text-white rounded-full sm:w-12 sm:h-12 items-center justify-center flex-shrink-0 text-xl sm:text-2xl font-bold mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="ml-2 sm:ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Objevte svůj vysněný pozemek online
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Projděte si náš intuitivní online katalog a najděte si pozemek, který splňuje všechny vaše představy. Každá parcela je prezentována s detailními informacemi, galeriemi a klíčovými parametry, abyste měli dokonalý přehled.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-primary group hover:shadow-lg transition-shadow duration-300 animate-fade-in-card delay-200">
                <div className="bg-primary hidden sm:flex text-white rounded-full sm:w-12 sm:h-12 items-center justify-center flex-shrink-0 text-xl sm:text-2xl font-bold mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="ml-2 sm:ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Prohlídka s odborníkem a konzultace
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Kontaktujte náš tým a domluvte si osobní prohlídku vybraných pozemků. Naši specialisté vám rádi zodpoví veškeré dotazy, ukážou vám lokalitu a pomohou vám představit si váš budoucí domov.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-primary group hover:shadow-lg transition-shadow duration-300 animate-fade-in-card delay-300">
                <div className="bg-primary hidden sm:flex text-white rounded-full sm:w-12 sm:h-12 items-center justify-center flex-shrink-0 text-xl sm:text-2xl font-bold mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="ml-2 sm:ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Komplexní právní a finanční podpora
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Získejte kompletní profesionální pomoc s celým procesem nákupu. Pomůžeme vám s právními náležitostmi, porozuměním stavebním předpisům a možnostmi financování, abyste měli naprostý klid v duši.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-primary group hover:shadow-lg transition-shadow duration-300 animate-fade-in-card delay-400">
                <div className="bg-primary hidden sm:flex text-white rounded-full sm:w-12 sm:h-12 items-center justify-center flex-shrink-0 text-xl sm:text-2xl font-bold mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div className="ml-2 sm:ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Zrealizujte svůj sen: Koupě a okamžitá stavba
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    S naší plnou podporou snadno dokončíte transakci. Pomůžeme vám se všemi náležitostmi, abyste mohli co nejdříve začít s výstavbou vašeho vysněného domova na jednom z našich exkluzivních pozemků v Nasavrkách.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
              <a href="/kontakt" className="btn-primary text-base inline-block md:text-xl px-10 py-5 font-bold transition duration-300 ease-in-out hover:scale-105 transform hover:shadow-2xl animate-pop-in delay-500">
                Nezávazně se poptejte - Začněte svou cestu k domovu!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Customizations (for this example, assuming you have a tailwind.config.js) */}
      <style jsx>{`
        /* Minimal custom CSS for animations not directly in Tailwind */
        @keyframes fadeInSlow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes fadeInSection {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-slow {
          animation: fadeInSlow 2s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-pop-in {
          animation: popIn 0.8s ease-out forwards;
        }
        .animate-fade-in-section {
            animation: fadeInSection 1s ease-out forwards;
            animation-delay: var(--delay, 0s); /* Pro postupné načítání sekcí */
        }
        .animate-fade-in-card {
            animation: fadeInCard 0.7s ease-out forwards;
            animation-delay: var(--delay, 0s); /* Pro postupné načítání karet */
        }
      `}</style>
    </>
  );
}
