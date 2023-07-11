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
            "Empowering global brands and agencies, we specialize in designing, building, and promoting innovative gaming and metaverse solutions that deliver tangible business outcomes.",
          leftBox: {
            title: "WE'RE ALL ABOUT SOLUTIONS THAT DRIVE RESULTS",
            desc: [
              "With Build's team of skilled researchers and strategists, we provide invaluable insights into a dynamic and ever-changing gaming and metaverse landscape.",
              "Leveraging our expertise, we collaborate with brands and agencies to craft exceptional, tailor-made branded solutions that yield remarkable results.",
            ],
          },
          videoUrl: "solution-banner-video.webm",
        }}
        gradientContainerClasses={classnames("lg:ml-[60px] ml-6")}
        subtitleClasses={classnames("max-w-[900px]")}
      />
      <BuildHelpingBrands />
      <BuildSolutionLogos />
      <BuildMetaVerse />
      <BuildCaseStudies />
    </Layout>
  );
}
