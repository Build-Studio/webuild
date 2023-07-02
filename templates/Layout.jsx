import { SEO_CONFIGS } from "@constants/seo";
import SEOMeta from "@components/SEOMeta";
import OGMeta from "@components/OGMeta";
import Footer from "@components/Footer";
import classnames, {
  flex,
  height,
  margin,
} from "tailwindcss-classnames";
import Header from "@components/Header";
import TwitterMeta from "@components/TwitterMeta";

const Layout = ({ children }) => {
  return (
    <>
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
          <div className={classnames(flex("flex-1"), margin("mt-[64px]"))}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
