import NewsItem from "@components/NewsItem";
import { webInfos } from "@constants";
import { useRouter } from "next/router";
import { AiFillCaretRight } from "react-icons/ai";
import { BiVideoRecording } from "react-icons/bi";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "MOST POPULAR",
    desc: "NCT 127",
    img: require("@assets/images/story-img-1.webp"),
    icon: require("@assets/images/story-icon-1.svg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
    videoUrl: "https://www.youtube.com/watch?v=qF28GjJ0qwA",
  },
  {
    label: "AWARD WINNING",
    desc: "NICKELODEON",
    img: require("@assets/images/story-img-2.jpeg"),
    icon: require("@assets/images/story-icon-2.svg"),
    textColor: "text-primary",
    bgColor: "bg-primary",
    videoUrl: "https://www.youtube.com/watch?v=qF28GjJ0qwA",
  },
  {
    label: "25M+ KICKERS ITEMS WORN",
    desc: "KICKERS",
    img: require("@assets/images/story-img-3.webp"),
    icon: require("@assets/images/story-icon-3.svg"),
    textColor: "text-blue",
    bgColor: "bg-blue",
    videoUrl: "https://www.youtube.com/watch?v=qF28GjJ0qwA",
  },
  {
    label: "MTV MUSIC  VIDEO AWARD NOMINATION",
    desc: "CHARLIE XCX",
    img: require("@assets/images/story-img-4.webp"),
    icon: require("@assets/images/story-icon-4.svg"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
    videoUrl: "https://www.youtube.com/watch?v=qF28GjJ0qwA",
  },
];

export default function HomeStories() {
  const router = useRouter();
  const goToBuildSolutions = () => {
    router.push("/build-solutions");
  };
  return (
    <div className={classnames("container", "pb-24")}>
      <h3 className={classnames("text-center", "font-bold", "mb-4")}>
        SUCCESS STORIES
      </h3>
      <div className={classnames("grid", "grid-cols-2", "gap-8")}>
        {items.map((item, index) => (
          <NewsItem
            item={item}
            key={index}
            onClick={() => {
              window.open(item.videoUrl);
            }}
            descClasses={classnames("!text-3xl", "font-bold")}
            buttonLabel="WATCH TRAILER"
            buttonIcon={
              <BiVideoRecording
                className={classnames(item.textColor, "text-2xl", "ml-1")}
              />
            }
          />
        ))}
      </div>
      <div className={classnames("flex", "justify-center", "mt-10")}>
        <button
          className={classnames(
            "flex",
            "items-center",
            "bg-primary",
            "font-bold",
            "px-4",
            "py-3",
            "rounded-md",
            "transition",
            "duration-300",
            "text-white",
            "hover:bg-secondary",
            "text-xl"
          )}
          onClick={goToBuildSolutions}
        >
          LEARN MORE ABOUT OUR WORK
          <AiFillCaretRight className={classnames("ml-1")} />
        </button>
      </div>
    </div>
  );
}
