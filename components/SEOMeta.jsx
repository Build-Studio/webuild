import Head from "next/head";
import useThemes from "@hooks/useThemes";

export default function SEOMeta({
  title,
  description,
  keywords,
  robots,
  googlebot,
  canonical,
  language,
}) {
  const theme = useThemes();

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots || "index, follow"} />
      <link rel="canonical" href={canonical} />
      <link rel="shortcut icon" href="logo.png" />
      <meta
        name="msapplication-TileColor"
        content={theme.colors.primary.DEFAULT}
      />
      <meta name="theme-color" content={theme.colors.primary.DEFAULT} />
      <meta name="language" content={language} />
      {googlebot ? <meta name="googlebot" content={googlebot} /> : null}
    </Head>
  );
}
