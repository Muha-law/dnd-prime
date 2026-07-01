import { Helmet } from "react-helmet-async";

const SITE = "DND Living";
const DOMAIN = "https://dndliving.uk";
const DEFAULT_TITLE = `${SITE} — Properties · Short Lets · Cleaning · Maintenance`;
const DEFAULT_DESC =
  "DND Living — one team for all your property needs in Birmingham. Homes to rent & buy, serviced short lets, professional cleaning, and reliable property maintenance.";
const OG_IMAGE = `${DOMAIN}/og-image.jpg`;

export default function SEO({ title, description, canonical, jsonLd }) {
  const fullTitle = title ? `${title} | ${SITE}` : DEFAULT_TITLE;
  const desc = description || DEFAULT_DESC;
  const url = canonical ? `${DOMAIN}${canonical}` : DOMAIN;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
