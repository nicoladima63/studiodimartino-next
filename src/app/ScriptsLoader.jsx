'use client';

import Script from 'next/script';

export default function ScriptsLoader() {
  return (
    <>
      {/* Google Maps API */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
        strategy="afterInteractive"
      />
      {/* Iubenda cookie */}
      <Script
        id="iubenda-cookie-configuration"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || []; _iub.csConfiguration = {"siteId":1758615,"cookiePolicyId":43231094,"lang":"it","storage":{"useSiteId":true}};`,
        }}
        strategy="beforeInteractive"
      />
      <Script src="https://cs.iubenda.com/autoblocking/1758615.js" strategy="afterInteractive" />
      <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
    </>
  );
}
