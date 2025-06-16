'use client'
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import BenefitItem from "./BenefitItem";
import BusIcon from "./BusIcon";
import LeafIcon from "./LeafIcon";
import PropertyCard from "./PropertyCard";
import ShopIcon from "./ShopIcon";
import Link from "next/link";
import { Head } from "next/document";

export default function PropertyNotFoundPage() {
    return (
        <>
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