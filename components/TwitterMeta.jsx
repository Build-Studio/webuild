import Head from 'next/head';

export default function TwitterMeta({
  card,
  title,
  description,
  site,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}) {
  return (
    <Head>
      <meta name='twitter:card' content={card || 'summary'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content={site} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:width' content={imageWidth || '1080'} />
      <meta name='twitter:image:height' content={imageHeight || '1080'} />
      <meta name='twitter:image:alt' content={imageAlt} />
    </Head>
  );
}
