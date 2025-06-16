// app/sitemap.ts
import { MetadataRoute } from 'next';
import base64url from "base64url";
import { getAllParcels } from "../ParcelData"; // Upravte cestu podle skutečného umístění ParcelData

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://nasavrky.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allParcels = getAllParcels();

    const staticPages = [
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'daily' as 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/parcely`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/kontakt`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/o-nasavrkach`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as 'monthly',
            priority: 0.8,
        }
    ];

    // Dynamické stránky s detaily pozemků
    const parcelPages = allParcels
        .filter(parcel => !parcel.prodano && !parcel.rezervovano)
        .map((parcel) => ({
            url: `${BASE_URL}/parcely/${base64url.encode(parcel.id)}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as 'daily',
            priority: 0.9,
        }));

    return [...staticPages, ...parcelPages];
}