import NewsItem from "@components/NewsItem";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "RESEARCH",
    desc: "MATTEL",
    img: require("@assets/images/case-study-img-1.jpeg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    label: "STRATEGY ",
    desc: "ROBLOX",
    img: require("@assets/images/case-study-img-2.jpeg"),
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    label: "DESIGN AND BUILD",
    desc: "BEYBLADE",
    img: require("@assets/images/case-study-img-3.jpeg"),
    textColor: "text-blue",
    bgColor: "bg-blue",
  },
  {
    label: "GAME PROMOTION  ",
    desc: "BABY EINSTEIN",
    img: require("@assets/images/case-study-img-4.jpeg"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
  },
  {
    label: "INTEGRATED MARKETING",
    desc: "LEGO VENTURES",
    img: require("@assets/images/case-study-img-5.jpeg"),
    textColor: "text-pink",
    bgColor: "bg-pink",
  },
  {
    label: "ANALYTICS ",
    desc: "CARTOON NETWORK",
    img: require("@assets/images/case-study-img-6.jpeg"),
    textColor: "text-turquoise",
    bgColor: "bg-turquoise",
  },
];

export default function BuildCaseStudies() {
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
