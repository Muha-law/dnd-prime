# DND Prime

One site, one deploy, four service arms under the DND Prime parent brand:
Properties · Short Lets · Cleaning · Maintenance.

Landing page (/) is a hub that grids the four arms — visitors click into
whichever service they need.

## Run locally
    npm install
    npm run dev

## Build
    npm run build      # outputs to dist/

## Deploy (Netlify) — same as the other DND sites
- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` handles SPA routing.

## Routes
- /              Landing hub (four-arm grid)
- /properties    DND Properties (buy / rent / manage)
- /stays         DND Short Lets (serviced apartments)
- /stays/:id     Individual short-let detail page
- /cleaning      DND Cleaning (services, packages, before/after)
- /maintenance   DND Maintenance (repair services)
- /about         About DND
- /contact       Contact form + details

## Brand
- Shared dark + gold (#c8973f) theme across all arms — one DND identity.
- "Drive N Discipline in everything we do" tagline throughout.
- Real contact details wired in (src/data/group.js):
  WhatsApp/Call 07903 824773 · info.dnd.dnd@gmail.com · Birmingham & surrounding areas.

## What's real vs placeholder
- REAL (from client flyers): all cleaning services + package prices,
  all maintenance services, "why choose DND" lists, contact details, coverage.
- PLACEHOLDER: property/short-let listings + all photos (Unsplash URLs).
  Short-let data still uses Lagos sample listings from the earlier build —
  swap for real Birmingham homes + photos in:
    src/data/properties.js  (estateListings + the short-let `properties` array)
  cleaning before/after images in src/data/group.js (cleaningGallery).

## Chat widget
Still the on-site UI shell (src/components/ChatWidget.jsx), now WhatsApp-aware:
the hub/cleaning/maintenance CTAs deep-link to wa.me/447903824773. To make the
in-widget chat fully live, wire it to Crisp/Tawk or a WhatsApp-bridge backend —
see the comment block at the top of ChatWidget.jsx.

Note: placeholder images won't load on a restricted network but render in production.
