import Layout from "@templates/Layout";
import HomeAudience from "@templates/home/Audience";
import HomeBanner from "@templates/home/Banner";
import HomeCounter from "@templates/home/Counter";
import HomeGameTypes from "@templates/home/GameTypes";
import HomeBrands from "@templates/home/Brands";
import HomeProgram from "@templates/home/Program";
import HomeStories from "@templates/home/Stories";
import HomePartners from "@templates/home/Partners";
import classnames from "tailwindcss-classnames";

export default function Home() {
  return (
    <Layout>
      <HomeBanner
        data={{
          gradientTitles: ["EMPOWERING", "BRANDS", "ENGAGING", "GAMERS"],
          subtitle:
            "We help brands access the hottest properties in the hottest marketing vertical",
          leftBox: {
            title: "WE BUILD GAMES FOR BRANDS",
            desc: [
              "Build is a global technology and creative studio that builds AAA quality, branded metaverse games, experiences and events.",
              "Our team of more than 40 developers, designers, marketing experts develop, launch and promote gaming and metaverse solutions for brands and agencies across the world.",
            ],
          },
          videoUrl: "home-banner-video.webm",
        }}
        gradientContainerClasses={classnames(
          "lg:mr-[130px]",
          "md:mr-[12vw]",
          "mr-0"
        )}
      />
      <HomeBrands />
      <HomeCounter />
      <HomeAudience />
      {/* <HomeProgram /> */}
      <HomeGameTypes />
      <HomeStories />
      <HomePartners />
    </Layout>
  );
}
