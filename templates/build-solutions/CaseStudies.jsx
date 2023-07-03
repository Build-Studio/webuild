import NewsItem from "@components/NewsItem";
import { useRouter } from "next/router";
import { AiFillCaretRight } from "react-icons/ai";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "RESEARCH",
    desc: "MATTEL",
    img: require("@assets/images/story-img-1.webp"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    label: "STRATEGY ",
    desc: "ROBLOX",
    img: require("@assets/images/story-img-2.jpeg"),
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    label: "DESIGN AND BUILD",
    desc: "BEYBLADE",
    img: require("@assets/images/story-img-3.webp"),
    textColor: "text-blue",
    bgColor: "bg-blue",
  },
  {
    label: "GAME PROMOTION  ",
    desc: "BABY EINSTEIN",
    img: require("@assets/images/story-img-4.webp"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
  },
  {
    label: "INTEGRATED MARKETING",
    desc: "LEGO VENTURES",
    img: require("@assets/images/story-img-1.webp"),
    textColor: "text-pink",
    bgColor: "bg-pink",
  },
  {
    label: "ANALYTICS ",
    desc: "CARTOON NETWORK",
    img: require("@assets/images/story-img-2.jpeg"),
    textColor: "text-turquoise",
    bgColor: "bg-turquoise",
  },
];

export default function BuildCaseStudies() {
  const router = useRouter();

  const goToBuildSolutions = () => {
    router.push("/build-solutions");
  };
  return (
    <div className={classnames("container", "pb-24")}>
      <h3 className={classnames("text-center", "font-bold", "mb-4")}>
        HELPING BRANDS AND AGENCIES NAVIGATE A DYNAMIC NEW MARKET
      </h3>
      <div className={classnames("grid", "grid-cols-2", "gap-8")}>
        {items.map((item, index) => (
          <NewsItem
            item={item}
            key={index}
            onClick={() => {
              //
            }}
            descClasses={classnames("!text-3xl", "font-bold")}
            buttonLabel="LEARN MORE"
          />
        ))}
      </div>
    </div>
  );
}
