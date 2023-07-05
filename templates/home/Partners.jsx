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
      <div className={classnames("container", "md:mb-24 mb-12")}>
        <h3
          className={classnames(
            "text-center",
            "font-bold",
            "mb-8",
            "md:text-3xl text-xl"
          )}
        >
          OUR PARTNERS
        </h3>
        <Marquee autoFill pauseOnHover>
          {items.map((item, index) => (
            <Image
              src={item}
              alt="logo"
              key={index}
              className={classnames(
                "w-auto",
                "h-16",
                "mx-10",
                "opacity-20",
                "grayscale-100"
              )}
            />
          ))}
        </Marquee>
      </div>
      <h3
        className={classnames(
          "text-center",
          "font-bold",
          "mb-6",
          "md:text-3xl text-xl"
        )}
      >
        BECOME A BUILDER
      </h3>
      <div
        className={classnames(
          "flex",
          "lg:flex-row flex-col",
          "items-center",
          "container",
          "md:mb-24 mb-12",
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
            "md:p-8 p-6",
            "lg:absolute lg:top-[50%] lg:right-4 lg:translate-y-[-50%]",
            "lg:w-[490px] w-full",
            "z-10",
            "lg:mt-0 mt-4"
          )}
        >
          <h3
            className={classnames(
              "font-bold",
              "leading-none",
              "mb-3",
              "md:text-3xl text-xl"
            )}
          >
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
