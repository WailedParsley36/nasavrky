import base64url from "base64url";
import { getAllParcels, Parcela } from "../../../ParcelData";
import type { Metadata } from "next";
import PropertyNotFoundPage from "../../../components/properties/PropertyNotFoundPage";
import SoldPropertyPage from "../../../components/properties/SoldPropertyDetailPage";
import ReservedPropertyPage from "../../../components/properties/ReservedPropertyDetailPage";
import PropertyDetailPage from "../../../components/properties/PropertyDetailPageContent";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nasavrky.vercel.app";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;

    const parcelId = base64url.decode(id as string);
    const currentParcel = getAllParcels().find((x) => x.id == parcelId);

    if (!currentParcel) {
        return {
            title: "Pozemek nenalezen | Nasavrky",
            description: "Požadovaný pozemek nebyl nalezen v nabídce stavebních parcel v Nasavrkách.",
            robots: "noindex, follow",
        };
    }

    const isSold = currentParcel.prodano || currentParcel.rezervovano;

    const commonMetadata: Metadata = {
        title: isSold
            ? `Pozemek ${currentParcel.id} | Nasavrky - ${currentParcel.prodano ? 'Prodáno' : 'Rezervováno'}`
            : `Pozemek ${currentParcel.id} | ${currentParcel.lokalita} - Nasavrky`,
        description: isSold
            ? `Tato exkluzivní stavební parcela o velikosti ${currentParcel.plocha} m² v Nasavrkách je již ${currentParcel.prodano ? 'prodána' : 'rezervována'}. Podívejte se na naše aktuální nabídky.`
            : `Stavební parcela na prodej o velikosti ${currentParcel.plocha} m² v malebném městečku Nasavrky, kompletně zasíťovaná a připravená k okamžité stavbě. Ideální pro rodinný dům v srdci Železných hor.`,
        keywords: `pozemek ${currentParcel.id}, parcela Nasavrky, ${currentParcel.plocha} m2, pozemek na prodej Nasavrky, stavební parcela Železné hory, ${currentParcel.lokalita}, koupě pozemku, ${currentParcel.prodano ? 'prodáno' : ''}, ${currentParcel.rezervovano ? 'rezervováno' : ''}`,
        openGraph: {
            title: isSold ? `Pozemek ${currentParcel.id} - ${currentParcel.prodano ? 'Prodáno' : 'Rezervováno'}` : `Pozemek ${currentParcel.id} v Nasavrkách`,
            description: isSold ? `Tato parcela v Nasavrkách je již ${currentParcel.prodano ? 'prodána' : 'rezervována'}.` : `Detailní informace o pozemku ${currentParcel.id} na prodej v Nasavrkách.`,
            url: `${BASE_URL}/parcely/${base64url.encode(currentParcel.id)}`,
            siteName: "Stavební parcely Nasavrky",
            images: currentParcel.obrazky[0] ? [{ url: new URL(`${BASE_URL}${currentParcel.obrazky[0]}`), width: 800, height: 600, alt: `Obrázek pozemku ${currentParcel.id}` }] : [],
            locale: "cs_CZ",
            type: "website",
        },
        robots: isSold ? "noindex, follow" : "index, follow",
    };

    return {
        ...commonMetadata,
    };
}


export default function PropertyPageWrapper({ params }: { params: { id: string } }) {
    const id = base64url.decode(params.id as string);
    const currentParcel = getAllParcels().find((x) => x.id == id);

    const isSold = currentParcel?.prodano || currentParcel?.rezervovano;

    const schemaOrgData = currentParcel ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Stavební pozemek ${currentParcel.id} v Nasavrkách`,
        "description": isSold
            ? `Tato exkluzivní stavební parcela o velikosti ${currentParcel.plocha} m² v Nasavrkách je již ${currentParcel.prodano ? 'prodána' : 'rezervována'}. Podívejte se na naše aktuální nabídky.`
            : `Stavební parcela na prodej o velikosti ${currentParcel.plocha} m² v malebném městečku Nasavrky, kompletně zasíťovaná a připravená k okamžité stavbě. Ideální pro rodinný dům v srdci Železných hor.`,
        "image": currentParcel.obrazky[0] || `${BASE_URL}/placeholder-parcel.jpg`,
        "url": `${BASE_URL}/parcely/${base64url.encode(currentParcel.id)}`,
        "brand": {
            "@type": "Brand",
            "name": "Stavební parcely Nasavrky"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "CZK",
            "price": currentParcel.cena,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": isSold ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
            "url": `${BASE_URL}/parcely/${base64url.encode(currentParcel.id)}`,
            "seller": {
                "@type": "Organization",
                "name": "Městský úřad Nasavrky",
                "url": `${BASE_URL}/kontakt`
            }
        },
        "hasProductFeature": [
            { "@type": "ProductFeature", "name": "Plocha", "value": `${currentParcel.plocha} m²`, "propertyID": "Area" },
            { "@type": "ProductFeature", "name": "Inženýrské sítě", "value": "Elektřina, Voda, Kanalizace, Optický internet", "propertyID": "Utilities" },
            { "@type": "ProductFeature", "name": "Lokalita", "value": currentParcel.lokalita, "propertyID": "Location" },
            { "@type": "ProductFeature", "name": "Stav", "value": "Připraveno k okamžité stavbě", "propertyID": "Readiness" },
            { "@type": "ProductFeature", "name": "Typ půdy", "value": "Orná půda", "propertyID": "LandType" }
        ]
    } : null;

    return (
        <>
            {schemaOrgData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
                />
            )}

            {(() => {
                if (!currentParcel) {
                    return <PropertyNotFoundPage />;
                } else if (currentParcel.prodano) {
                    return <SoldPropertyPage parcel={currentParcel} />;
                } else if (currentParcel.rezervovano) {
                    return <ReservedPropertyPage parcel={currentParcel} />;
                }
                return <PropertyDetailPage parcel={currentParcel} />;
            })()}
        </>
    );
}