import NewsItem from "@components/NewsItem";
import { webInfos } from "@constants";
import { useRouter } from "next/router";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "RESEARCH",
    desc: "Unlock invaluable insights into the metaverse and gaming market with our comprehensive research services, empowering brands to navigate and comprehend this dynamic new landscape.",
    img: require("@assets/images/case-study-img-1.jpeg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    label: "STRATEGY",
    desc: "Benefit from our comprehensive end-to-end metaverse and gaming expertise, ensuring an optimal approach for your brand, budget and goals.",
    img: require("@assets/images/case-study-img-2.jpeg"),
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    label: "DESIGN, BUILD, DEPLOY ",
    desc: "Experience seamless end-to-end services as we expertly handle the design, development, deployment, and management of immersive experiences and games across diverse platforms.",
    img: require("@assets/images/case-study-img-3.jpeg"),
    textColor: "text-blue",
    bgColor: "bg-blue",
  },
  {
    label: "GAME PROMOTION",
    desc: "Leverage our expertise in game promotion, marketing strategy and media buying to maximize user acquisition, engagement, and return on investment for your games.",
    img: require("@assets/images/case-study-img-4.jpeg"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
  },
  {
    label: "INTEGRATED MARKETING",
    desc: "Build will ideate and integrate our off-the-shelf or customized gaming solutions seamlessly into your 360° marketing campaigns, unlocking deep customer synergy and ensuring consistent communication for your brand.",
    img: require("@assets/images/case-study-img-5.jpeg"),
    textColor: "text-pink",
    bgColor: "bg-pink",
  },
  {
    label: "ANALYTICS",
    desc: "Gain a holistic view of your marketing, gaming, and metaverse initiatives with our end-to-end analytics services, providing valuable insights for informed decision-making.",
    img: require("@assets/images/case-study-img-6.jpeg"),
    textColor: "text-turquoise",
    bgColor: "bg-turquoise",
  },
];

export default function BuildCaseStudies() {
  const router = useRouter();

  return (
    <div className={classnames("container", "md:pb-24 pb-12")}>
      <h3
        className={classnames(
          "text-center",
          "font-bold",
          "md:mb-10 mb-4",
          "md:text-3xl text-xl",
          "uppercase"
        )}
      >
        Building Game and Metaverse Solutions for Global Brands
      </h3>
      <div
        className={classnames(
          "grid",
          "md:grid-cols-2 grid-cols-1",
          "lg:gap-8 gap-4"
        )}
      >
        {items.map((item, index) => (
          <NewsItem
            item={item}
            key={index}
            onClick={() => router.push("/contact-us")}
            buttonLabel="LEARN MORE"
          />
        ))}
      </div>
    </div>
  );
}
