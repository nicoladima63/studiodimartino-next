const SITE_URL = "https://studiodimartino.eu";

const defaultImage = {
    url: `${SITE_URL}/og-image.jpg`,
    width: 1200,
    height: 630,
};

export function createMetadata({
    title,
    description,
    path = "",
    image = defaultImage.url,
    keywords = [],
}) {
    const fullUrl = `${SITE_URL}${path}`;

    const fullTitle = title
        ? `${title} | Studio Dentistico Di Martino`
        : "Studio Dentistico Di Martino | Dentista ad Agliana";

    return {
        title: fullTitle,

        description,

        keywords: [
            "dentista Agliana",
            "studio dentistico Agliana",
            "dentista Pistoia",
            ...keywords,
        ],

        alternates: {
            canonical: fullUrl,
        },

        openGraph: {
            title: fullTitle,
            description,
            url: fullUrl,
            siteName: "Studio Dentistico Di Martino",
            locale: "it_IT",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}