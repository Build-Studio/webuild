import Head from "next/head";

export default function OGMeta({
  title,
  type,
  url,
  image,
  imageWidth,
  imageHeight,
  imageType,
  description,
  siteName,
  keywords,
}) {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type || "article"} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={imageWidth || "1080"} />
      <meta property="og:image:height" content={imageHeight || "1080"} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:keywords" content={keywords} />
    </Head>
  );
}
