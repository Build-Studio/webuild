import { SEO_CONFIGS } from "@constants/seo";
import SEOMeta from "@components/SEOMeta";
import OGMeta from "@components/OGMeta";
import Footer from "@components/Footer";
import classnames, { flex, height, margin } from "tailwindcss-classnames";
import Header from "@components/Header";
import TwitterMeta from "@components/TwitterMeta";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFSY26C3DB"></script>
        <script async type="text/javascript" src="/static/script.js"></script>
      </Head>
      <SEOMeta {...SEO_CONFIGS.meta} />
      <OGMeta {...SEO_CONFIGS.og} />
      <TwitterMeta {...SEO_CONFIGS.twitter} />
      <div>
        <div
          className={classnames(
            flex("flex", "flex-col"),
            height("min-h-screen")
          )}
        >
          <Header />
          <div className={classnames(margin("md:mt-[64px] mt-[48px]"))}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
