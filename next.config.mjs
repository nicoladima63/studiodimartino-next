/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rimuovi 'output: export' per Vercel — il SSR funziona nativamente
  // Se invece vuoi deployare su Aruba (hosting statico), rimetti: output: 'export'
  images: {
    unoptimized: true, // mantieni se non vuoi usare next/image con ottimizzazione
  },
  // trailingSlash: true  // necessario solo per Aruba/IIS, non per Vercel
};

export default nextConfig;