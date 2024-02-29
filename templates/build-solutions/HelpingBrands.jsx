import NewsItem from "@components/NewsItem";
import { webInfos } from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "AAA QUALITY",
    desc: "Access AAA quality games and elevate your brand through custom integrations in popular titles like Fortnite and Minecraft.",
    img: require("@assets/images/helping-brand-img-1.jpeg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    label: "UGC METAVERSE",
    desc: "Unleash your brand's creative spirit by developing games, events, and immersive experiences on platforms such as The Sandbox.",
    img: require("@assets/images/helping-brand-img-2.png"),
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    label: "IN-APP GAMES",
    desc: "Explore a vast range of customer interaction and sales opportunities by developing bespoke games within your existing brand app.",
    img: require("@assets/images/helping-brand-img-3.jpeg"),
    textColor: "text-blue",
    bgColor: "bg-blue",
  },
  {
    label: "MOBILE GAMES",
    desc: "Build stand-alone mobile games to increase brand awareness, deepen engagement, drive customer loyalty and promote products.",
    img: require("@assets/images/helping-brand-img-4.jpeg"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
  },
];

export default function BuildHelpingBrands() {
  const router = useRouter();

  return (
    <div className={classnames("container", "md:pt-24 mt-12")}>
      <div className={classnames("md:mb-12 mb-6")}>
        <h3
          className={classnames(
            "text-center",
            "font-bold",
            "mb-3",
            "max-w-[450px]",
            "mx-auto",
            "md:leading-none",
            "md:text-3xl text-xl"
          )}
        >
          HELPING BRANDS ACCESS THE HOTTEST PROPERTIES
        </h3>
        <p
          className={classnames(
            "text-center",
            "font-medium",
            "max-w-[500px]",
            "mx-auto"
          )}
        >
          Unlock the power of the metaverse with our specialized expertise in
          designing, developing and promoting custom branded solutions.
        </p>
      </div>
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
            buttonIcon
          />
        ))}
      </div>
    </div>
  );
}
