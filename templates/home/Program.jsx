import { useRouter } from "next/router";
import classnames from "tailwindcss-classnames";

const info = {
  title: "WE'RE AN OFFICIAL ROBLOX PROGRAM",
  desc1:
    "Built are excited to announce our partnership with the Roblox. As a trusted Roblox Partner, we'll revolutionize immersive advertising and deliver transformative digital experiences for gamers.",
  desc2:
    "With our expertise and deep understanding of the platform, we help brands establish a successful presence and effectively connect with their target audience. Get in touch and find out how you can help Bulild in reshaping brand engagement on Roblox and other market leading metaverse and gaming platforms.",
  desc3:
    "Join us as we redefine immersive experiences and unlock a new world of marketing solutions for brands.",
};

export default function HomeProgram() {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact-us");
  };

  return (
    <div className={classnames("container", "md:mb-24 mb-12")}>
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
            className={classnames(
              "xl:w-[760px] xl:max-w-none",
              "w-full",
              "aspect-[16/9]"
            )}
            controls
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
