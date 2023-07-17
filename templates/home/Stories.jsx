import NewsItem from "@components/NewsItem";
import { useRouter } from "next/router";
import { AiFillCaretRight } from "react-icons/ai";
import { BiVideoRecording } from "react-icons/bi";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "MOST POPULAR",
    desc: "HEROES & EMPIRES",
    img: require("@assets/images/story-img-1.jpeg"),
    icon: require("@assets/images/story-icon-1.svg"),
    textColor: "text-secondary",
    bgColor: "bg-secondary",
    videoUrl: "https://www.youtube.com/watch?v=j2fx7-0tRI4",
  },
  {
    label: "AWARD WINNING",
    desc: "MARVEL SNAP",
    img: require("@assets/images/story-img-2.jpeg"),
    icon: require("@assets/images/story-icon-2.svg"),
    textColor: "text-primary",
    bgColor: "bg-primary",
    videoUrl: "https://www.youtube.com/watch?v=_jQt36lq0ew",
  },
  {
    label: "25M+ KICKERS ITEMS WORN",
    desc: "METADOS",
    img: require("@assets/images/story-img-3.jpg"),
    icon: require("@assets/images/story-icon-3.svg"),
    textColor: "text-blue",
    bgColor: "bg-blue",
    videoUrl:
      "https://www.youtube.com/watch?v=Dkvw6VtC0wQ&pp=ygUHbWV0YWRvcw%3D%3D",
  },
  {
    label: "MTV MUSIC  VIDEO AWARD NOMINATION",
    desc: "FORTNITE",
    img: require("@assets/images/story-img-4.webp"),
    icon: require("@assets/images/story-icon-4.svg"),
    textColor: "text-fuchsia",
    bgColor: "bg-fuchsia",
    videoUrl:
      "https://www.youtube.com/watch?v=oLCvG8zsxHU&pp=ygUQZm9ydG5pdGUgc25pcHBldA%3D%3D",
  },
];

export default function HomeStories() {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact-us");
  };
  return (
    <div className={classnames("container", "md:pb-24 pb-12")}>
      <h3
        className={classnames(
          "text-center",
          "font-bold",
          "mb-4",
          "md:text-3xl text-xl"
        )}
      >
        SUCCESS STORIES
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
            "md:text-xl text-sm"
          )}
          onClick={goToContact}
        >
          LEARN MORE ABOUT OUR WORK
          <AiFillCaretRight className={classnames("ml-1")} />
        </button>
      </div>
    </div>
  );
}
