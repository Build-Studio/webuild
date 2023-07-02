import GradientBlock from "@components/GradientBlock";
import { useRouter } from "next/router";
import { AiFillCaretRight } from "react-icons/ai";
import classnames from "tailwindcss-classnames";

export default function HomeBanner() {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact-us");
  };

  return (
    <div
      className={classnames(
        "pt-[8vh]",
        "bg-[url('/home-banner-bg.webp')]",
        "bg-cover",
        "bg-no-repeat",
        "h-[calc(100vh_-_64px)]",
        "text-white",
        "flex",
        "flex-col",
        "justify-between"
      )}
    >
      <div className={classnames("flex", "flex-col", "items-center")}>
        <div
          className={classnames(
            "flex",
            "items-center",
            "justify-center",
            "mr-[130px]"
          )}
        >
          <div
            className={classnames("px-3", "border-r-[2px]", "border-r-white")}
          >
            <h1 className={classnames("text-right", "text-7xl", "font-bold")}>
              <GradientBlock>EMPOWERING</GradientBlock>
            </h1>
            <h1 className={classnames("text-right", "text-7xl", "font-bold")}>
              <GradientBlock>BRANDS</GradientBlock>
            </h1>
          </div>
          <div className={classnames("px-3")}>
            <h1 className={classnames("text-7xl", "font-bold")}>ENGAGING</h1>
            <h1 className={classnames("text-7xl", "font-bold")}>GAMERS</h1>
          </div>
        </div>
        <h4
          className={classnames(
            "font-medium",
            "text-center",
            "mt-10",
            "max-w-[600px]",
            "mb-6"
          )}
        >
          We help brands access the hottest properties in the hottest marketing
          vertical
        </h4>
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
          onClick={goToContact}
        >
          CONTACT US
          <AiFillCaretRight className={classnames("ml-1")} />
        </button>
      </div>
      <div
        className={classnames(
          "flex",
          "items-center",
          "container",
          "pb-10",
          "relative"
        )}
      >
        <div
          className={classnames(
            "bg-secondary",
            "text-white",
            "rounded-xl",
            "p-8",
            "absolute",
            "top-[50%]",
            "left-0",
            "translate-y-[-55%]",
            "w-[420px]",
            "z-10"
          )}
        >
          <h3 className={classnames("font-bold", "leading-none", "mb-3")}>
            WE BUILD GAMES FOR BRANDS
          </h3>
          <p className={classnames("mb-3")}>
            Build is a globaL technology and creative studio that builds AAA
            quality, branded metaverse games, experiences and events.
          </p>
          <p className={classnames("mb-3")}>
            Our team of more than 40 developers, designers, marketing experts
            develop, launch and promote gaming and metaverse solutions for
            brands and agencies across the world.
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
            onClick={goToContact}
          >
            CONTACT US
            <AiFillCaretRight className={classnames("ml-1")} />
          </button>
        </div>
        <video
          className={classnames(
            "w-[1000px]",
            "max-w-none",
            "aspect-[16/9]",
            "rounded-xl",
            "ml-auto"
          )}
          controls
          preload={"auto"}
          muted
          autoPlay
          loop
        >
          <source
            src={
              "https://d1ly3rk1lsmf13.cloudfront.net/Untitled_video_Made_with_Clipchamp_641423b850.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
