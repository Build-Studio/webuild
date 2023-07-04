import Layout from "@templates/Layout";
import BuildCaseStudies from "@templates/build-solutions/CaseStudies";
import BuildHelpingBrands from "@templates/build-solutions/HelpingBrands";
import BuildMetaVerse from "@templates/build-solutions/Metaverse";
import BuildSolutionLogos from "@templates/build-solutions/SolutionLogos";
import HomeBanner from "@templates/home/Banner";
import classnames from "tailwindcss-classnames";

export default function BuildSolution() {
  return (
    <Layout>
      <HomeBanner
        data={{
          gradientTitles: ["WHAT", "WE BUILD", "OUR", "SOLUTIONS"],
          subtitle:
            "We help global brands and agencies design, build and promote innovative gaming and metaverse environments that drive measureable business results",
          leftBox: {
            title: "WE'RE ALL ABOUT SOLUTIONS THAT DRIVE RESULTS",
            desc: [
              "Build's team of researchers and strategists help brands understand a new and rapidly evolving market.",
              "We leverage those learnings to help brands and agencies design and build innovative, custom gaming and metaverse solutions that drive remarkable results.",
            ],
          },
          videoUrl: "home-banner-video.mp4",
        }}
        gradientTitleClasses={classnames("ml-[60px]")}
        subtitleClasses={classnames("max-w-[850px]")}
      />
      <BuildHelpingBrands />
      <BuildSolutionLogos />
      <BuildMetaVerse />
      <BuildCaseStudies />
    </Layout>
  );
}
