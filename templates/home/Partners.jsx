import Image from "next/image";
import classnames from "tailwindcss-classnames";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/router";

const items = [
  require("@assets/images/partner-1.png"),
  require("@assets/images/partner-2.png"),
  require("@assets/images/partner-3.png"),
  require("@assets/images/partner-4.png"),
  require("@assets/images/partner-5.png"),
  require("@assets/images/partner-6.png"),
];

export default function HomePartners() {
  const router = useRouter();
  const goToBuildSolution = () => {
    router.push("/build-solutions");
  };

  return (
    <>
      <div className={classnames("container", "mb-24")}>
        <h3 className={classnames("text-center", "font-bold", "mb-8")}>
          OUR PARTNERS
        </h3>
        <Marquee autoFill pauseOnHover>
          {items.map((item, index) => (
            <Image
              src={item}
              alt="logo"
              key={index}
              className={classnames("w-auto", "h-16", "mx-10", "opacity-20")}
            />
          ))}
        </Marquee>
      </div>
      <h3 className={classnames("text-center", "font-bold", "mb-6")}>
        BECOME A BUILDER
      </h3>
      <div
        className={classnames(
          "flex",
          "items-center",
          "container",
          "mb-24",
          "relative"
        )}
      >
        <Image
          alt="img"
          src={require("@assets/images/become-a-builder-img.webp")}
          className={classnames("w-[1000px]", "aspect-[16/9]", "rounded-xl")}
        />
        <div
          className={classnames(
            "bg-secondary",
            "text-white",
            "rounded-xl",
            "p-8",
            "absolute",
            "top-[50%]",
            "right-4",
            "translate-y-[-50%]",
            "w-[490px]",
            "z-10"
          )}
        >
          <h3 className={classnames("font-bold", "leading-none", "mb-3")}>
            JOIN US FROM ANYWHERE IN THE WORLD
          </h3>
          <p className={classnames("mb-4")}>
            Are you an expert builder. Do you know how to bulid in Roblox
            Studio? Have you developed premium games with Unity Engine. Have you
            got deep experience with Unreal Engine or Fortnite? How about
            MineCraft or The Sandbox. If you have a proven track record of
            awesome building, get in touch.
          </p>
          <button
            className={classnames(
              "flex",
              "items-center",
              "bg-white",
              "font-bold",
              "px-3",
              "py-1.5",
              "rounded-md",
              "transition",
              "duration-300",
              "text-secondary",
              "hover:opacity-80"
            )}
            onClick={goToBuildSolution}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
}
