/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // genera cartella out/ statica, deployabile su qualsiasi hosting
  trailingSlash: true,   // /privacy/ invece di /privacy - necessario per IIS Aruba
  images: {
    unoptimized: true,   // next/image senza server Node.js richiede unoptimized
  },
};

export default nextConfig;
