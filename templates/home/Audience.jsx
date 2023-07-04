import NewsItem from "@components/NewsItem";
import { webInfos } from "@constants";
import Image from "next/image";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "ROBLOX GAMES AND EVENTS",
    desc: "We work with brands and agencies to ideate, design, build and promote destination games and events as part of integrated marketing campaigns.",
    img: require("@assets/images/audience-img-1.jpeg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    label: "MINECRAFT CUSTOM SOLUTIONS",
    desc: "Be build pop-up mini experiences inside popular games",
    img: require("@assets/images/audience-img-2.webp"),
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    label: "STRATEGIC BRAND SOLUTIONS",
    desc: "Any platforms, any intergaration, whatever, we can do it...(and help yuo find the right solution for your need)",
    img: require("@assets/images/audience-img-3.webp"),
    textColor: "text-blue",
    bgColor: "bg-blue",
  },
  {
    label: "FORNITE CUSTOM CREATIVE",
    desc: "Custom maps, characters, player abilities, and branded events promoted to millions of players ",
    img: require("@assets/images/audience-img-4.webp"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
  },
];

export default function HomeAudience() {
  return (
    <div className={classnames("container", "pb-24")}>
      <div className={classnames("mb-12")}>
        <h3 className={classnames("text-center", "font-bold", "mb-3")}>
          INNOVATIVE AND AUTHENTIC CONNECTIONS WITH GAMERS
        </h3>
        <p className={classnames("text-center", "font-medium")}>
          We work with brands and agencies to create amazing experiences in
          games like Roblox, Fortnite and Minecraft
        </p>
      </div>
      <div className={classnames("grid", "grid-cols-2", "gap-8")}>
        {items.map((item, index) => (
          <NewsItem
            item={item}
            key={index}
            onClick={() => {
              window.open(`mailto:${webInfos.email}`);
            }}
            buttonLabel="LEARN MORE"
            buttonIcon
          />
        ))}
      </div>
    </div>
  );
}
