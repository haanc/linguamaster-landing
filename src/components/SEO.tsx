import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const DOMAIN = 'https://linguamaster.top';
const DEFAULT_TITLE = 'LinguaMaster - Master Languages with AI';
const DEFAULT_DESCRIPTION = 'Transform any video into interactive language lessons with AI-powered transcription, bilingual subtitles, and smart vocabulary learning.';
const DEFAULT_IMAGE = '/screenshots/word-lookup.png';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
}) => {
  const fullTitle = title ? `${title} | LinguaMaster` : DEFAULT_TITLE;
  const canonicalUrl = `${DOMAIN}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${DOMAIN}${image}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};
