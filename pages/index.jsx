import Layout from "@templates/Layout";
import HomeAudience from "@templates/home/Audience";
import HomeBanner from "@templates/home/Banner";
import HomeCounter from "@templates/home/Counter";
import HomeGameTypes from "@templates/home/GameTypes";
import HomePartners from "@templates/home/Partners";
import HomeProgram from "@templates/home/Program";

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomePartners />
      <HomeCounter />
      <HomeAudience />
      <HomeProgram />
      <HomeGameTypes />
    </Layout>
  );
}
