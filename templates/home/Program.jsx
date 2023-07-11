import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import classnames from "tailwindcss-classnames";








const info = {
  title: "WE'RE AN OFFICIAL ROBLOX PROGRAM",
  desc1:
  "We're thrilled to share the exciting news of our partnership with Roblox! As a trusted Roblox Partner, Build is set to revolutionize immersive advertising and deliver transformative digital experiences to gamers.",
  desc2:
    "Leveraging our expertise and profound understanding of the platform, we specialize in helping brands establish a powerful presence and effectively connect with their target audience.",
  desc3:
    "Reach out to us today to discover how you can join Build in reshaping brand engagement on Roblox, as well as other leading metaverse and gaming platforms."
};

export default function HomeProgram() {
  const router = useRouter();
  const containerRef = useRef(null);
  const vidRef = useRef(null);

  const goToContact = () => {
    router.push("/contact-us");
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { offsetTop } = containerRef.current || {};
    const condition = offsetTop - (window.innerHeight - 100);
    if (window.scrollY >= condition) {
      vidRef.current?.play?.();
    }
  };

  return (
    <div
      className={classnames("container", "md:mb-24 mb-12")}
      ref={containerRef}
    >
      <h3
        className={classnames(
          "text-center",
          "text-4xl",
          "font-bold",
          "mb-3",
          "md:text-3xl text-xl"
        )}
      >
        BUILD JOINS OFFICIAL ROBLOX PARTNER PROGRAM
      </h3>

      <div
        className={classnames(
          "flex",
          "xl:flex-nowrap flex-wrap",
          "rounded-xl",
          "overflow-hidden"
        )}
      >
        <div
          className={classnames(
            "flex",
            "items-center",
            "justify-center",
            "bg-black"
          )}
        >
          <video
            ref={vidRef}
            className={classnames(
              "xl:w-[760px] xl:max-w-none",
              "w-full",
              "aspect-[16/9]"
            )}
            controls
            muted
            loop
            preload={"auto"}
          >
            <source src={"home-program-video.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className={classnames("bg-fuchsia", "text-white", "p-7")}>
          <h3 className={classnames("text-3xl", "font-bold", "mb-5")}>
            {info.title}
          </h3>
          <p className={classnames("mb-3", "text-sm")}>{info.desc1}</p>
          <p className={classnames("mb-3", "text-sm")}>{info.desc2}</p>
          <p className={classnames("mb-5", "text-sm")}>{info.desc3}</p>
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
              "text-fuchsia",
              "hover:opacity-80"
            )}
            onClick={goToContact}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}
