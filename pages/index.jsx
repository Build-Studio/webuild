import Layout from "@templates/Layout";
import HomeAudience from "@templates/home/Audience";
import HomeBanner from "@templates/home/Banner";
import HomeCounter from "@templates/home/Counter";
import HomePartners from "@templates/home/Partners";

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomePartners />
      <HomeCounter />
      <HomeAudience />
    </Layout>
  );
}
