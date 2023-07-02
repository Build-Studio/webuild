import Image from "next/image";
import classnames from "tailwindcss-classnames";

const items = [
  {
    icon: require("@assets/images/counter-icon-1.png"),
    label: "THE BEST PEOPLE",
    desc: "An award winning team of specialists, with offices in Vietnam, Singapore and Dubai.",
    bg: "bg-primary",
  },
  {
    icon: require("@assets/images/counter-icon-2.png"),
    label: "100's of GAMES",
    desc: "We've built 100's of games on Roblox, Fortnite, Minecraft and many other platforms.",
    bg: "bg-secondary",
  },
  {
    icon: require("@assets/images/counter-icon-3.png"),
    label: "AAA QUALITY",
    desc: "We build the highest quality branded gaming and metaverse solutions at a cost you can’t find anywhere else.",
    bg: "bg-blue",
  },
];

export default function HomeCounter() {
  return (
    <div className={classnames("container", "pb-24")}>
      <div className={classnames("grid", "grid-cols-3", "gap-8")}>
        {items.map((item) => (
          <div
            key={item.label}
            className={classnames(
              "rounded-xl",
              "px-6",
              "py-3",
              "text-white",
              "flex",
              "flex-col",
              "items-center",
              item.bg
            )}
          >
            <Image
              alt="icon"
              src={item.icon}
              className={classnames("w-20", "w-auto", "mb-1")}
            />
            <h3
              className={classnames(
                "font-bold",
                "mb-3",
                "text-center",
                "text-3xl"
              )}
            >
              {item.label}
            </h3>
            <h5 className={classnames("text-center", "font-medium")}>
              {item.desc}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
