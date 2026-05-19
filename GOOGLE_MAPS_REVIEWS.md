# Google Maps Reviews Integration

Sostituisce il widget Elfsight con un'integrazione nativa di Google Maps Reviews.

## 📋 Prerequisiti

1. **Google Cloud Project** con Maps API abilitata
2. **API Key** con accesso a:
   - Places API
   - Maps JavaScript API
3. **Google Place ID** dello studio (ChIJ...)
4. **OAuth2 Credentials** JSON scaricato da Google Cloud

## 🔧 Setup

### 1. Credenziali già configurate

✅ Credenziali presenti in:
- `.env.local` — Google Project ID, Client ID, Client Secret
- `config/secrets/` — JSON file con credenziali OAuth2

### 2. Aggiungi l'API Key pubblica

Nel tuo file `.env.local`, aggiungi:
```env
NEXT_PUBLIC_MAPS_API_KEY=AIzaSy...  # Sostituisci con la tua API Key pubblica
```

**Come ottenere l'API Key:**
1. Vai su Google Cloud Console
2. Seleziona il progetto `studio-dima-review-496708`
3. Naviga a "Credenziali" (Credentials)
4. Crea una nuova API Key (o usa una esistente)
5. Assicurati che sia abilitata per:
   - Maps JavaScript API
   - Places API

### 3. Abilita le API su Google Cloud

Nel Google Cloud Console:
1. Vai a "APIs & Services"
2. Abilita:
   - ✅ Maps JavaScript API
   - ✅ Places API

## 💻 Utilizzo

### Nel tuo component

```tsx
import ReviewsSection from '@/components/ReviewsSection';

export default function HomePage() {
  return (
    <>
      {/* ... altre sezioni ... */}
      
      <ReviewsSection
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
        maxReviews={5}
        sortBy="recent"  // 'recent' | 'rating_high' | 'rating_low'
      />
    </>
  );
}
```

### Opzioni Component

| Prop | Tipo | Default | Descrizione |
|------|------|---------|-------------|
| `placeId` | string | env var | Google Place ID dello studio |
| `maxReviews` | number | 5 | Numero di recensioni da mostrare |
| `sortBy` | 'recent' \| 'rating_high' \| 'rating_low' | 'recent' | Ordinamento delle review |

## 📦 Struttura File

```
lib/google/
├── maps-reviews.ts          # Service per leggere reviews
└── types.ts                 # (opzionale) Types condivisi

components/
├── ReviewsSection.tsx       # Componente principale
└── ReviewCard.tsx           # Singola review card

config/secrets/
└── client_secret_*.json     # Credenziali Google (gitignored)

.env.local                   # Variabili d'ambiente locali
```

## 🚀 Deploy su Vercel

1. Aggiungi le variabili d'ambiente in Vercel:
   - `NEXT_PUBLIC_MAPS_API_KEY`
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID`
   - `NEXT_PUBLIC_GOOGLE_PROJECT_ID`

2. Le credenziali OAuth2 nel JSON **non sono necessarie** per il client-side
   (solo per server-side se implementato)

## 🎨 Styling

Il componente usa **Tailwind CSS** per lo styling. Se usi una libreria CSS diversa:

- `ReviewsSection.tsx` — Principale container e grid
- `ReviewCard.tsx` — Singola review card

## 🔐 Security Notes

- ✅ `.env.local` è gitignored
- ✅ `config/secrets/` è gitignored
- ✅ `NEXT_PUBLIC_*` variables sono pubbliche (normalmente API keys)
- ✅ OAuth2 Secret non è pubblico

## 🐛 Troubleshooting

### "Google Place ID not configured"
Assicurati che `.env.local` contenga:
```env
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...
```

### "Impossible to load reviews"
1. Verifica che l'API Key sia corretto
2. Controlla che Place ID sia valido
3. Assicurati che Maps API e Places API siano abilitate

### Reviews non appaiono
1. Apri Developer Console (F12)
2. Controlla i messaggi di errore
3. Verifica network tab per errori API

## 📚 Risorse

- [Google Places API Docs](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
- [Place Details Request](https://developers.google.com/maps/documentation/places/web-service/details)

## 🎯 Prossimi Step

- [ ] Aggiungi `NEXT_PUBLIC_MAPS_API_KEY` a `.env.local`
- [ ] Test le reviews in sviluppo
- [ ] Personalizza styling se necessario
- [ ] Deploy su Vercel
- [ ] Rimuovi widget Elfsight dal template

## 📝 Note

Per leggere reviews da Google Maps, la library `@googlemaps/js-api-loader` fa richieste direttamente dal browser all'API di Google. Non c'è caching server-side in questa implementazione.

Se vuoi aggiungere caching o server-side rendering, vedi commenti nel `maps-reviews.ts`.
