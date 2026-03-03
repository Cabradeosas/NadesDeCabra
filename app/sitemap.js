import { sql } from "@vercel/postgres";

const siteUrl = "https://csnades.cabradeosas.com";

export default async function sitemap() {
    const now = new Date().toISOString();

    // Páginas estáticas principales
    const staticRoutes = [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${siteUrl}/contribute`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    return staticRoutes;
}
