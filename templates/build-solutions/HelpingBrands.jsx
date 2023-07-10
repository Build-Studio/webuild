import NewsItem from "@components/NewsItem";
import { webInfos } from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "AAA QUALITY",
    desc: "We work with brands and agencies to ideate, design, build and promote destination games and events as part of integrated marketing campaigns.",
    img: require("@assets/images/helping-brand-img-1.jpeg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    label: "UGC Metaverse",
    desc: "Be build pop-up mini experiences inside popular games",
    img: require("@assets/images/helping-brand-img-2.png"),
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    label: "In-App Games",
    desc: "Any platforms, any intergaration, whatever, we can do it...(and help yuo find the right solution for your need)",
    img: require("@assets/images/helping-brand-img-3.jpeg"),
    textColor: "text-blue",
    bgColor: "bg-blue",
  },
  {
    label: "Mobile Games",
    desc: "Custom maps, characters, player abilities, and branded events promoted to millions of players ",
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
        <p className={classnames("text-center", "font-medium")}>
          We will help bring your brand or idea into the metaverse, with the
          right concept and the right tech for your needs and budget
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
