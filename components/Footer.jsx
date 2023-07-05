import classnames from "tailwindcss-classnames";
import GradientBlock from "./GradientBlock";
import Image from "next/image";
import ContactUsForm from "@templates/home/ContactUsForm";
import HeaderRouters from "./HeaderRoutes";
import { webInfos } from "@constants";
import { useRouter } from "next/router";

const socials = [
  {
    logo: require("@assets/images/facebook.png"),
    link: "https://www.facebook.com/profile.php?id=100093364224116",
  },
  {
    logo: require("@assets/images/youtube.png"),
    link: "https://www.youtube.com/channel/UCAQA6jEA-Y92nlH2q_LqkMw",
  },
  {
    logo: require("@assets/images/twitter.png"),
    link: "https://twitter.com/Build_Games_",
  },
  {
    logo: require("@assets/images/linkedin.png"),
    link: "https://www.linkedin.com/company/buildgg/?viewAsMember=true",
  },
];

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div
        className={classnames(
          "bg-gray-800",
          "text-white",
          "lg:py-28 py-8",
          "flex",
          "items-center",
          router.pathname === "/contact-us" ? "flex-1" : ""
        )}
      >
        <div
          className={classnames(
            "container",
            "flex",
            "flex-wrap",
            "justify-between"
          )}
        >
          <div>
            <h3 className={classnames("font-bold", "mb-4")}>
              <p className={classnames("leading-none", "-mb-2.5")}>
                {webInfos.intro[0]}
              </p>
              <GradientBlock>{webInfos.intro[1]}</GradientBlock>
            </h3>
            <div className={classnames("mb-8", "lg:w-[300px] w-full")}>
              <h5 className={classnames("text-lg", "font-bold", "mb-0.5")}>
                {webInfos.sgAddress}
              </h5>
              <a
                href={`mailto:${webInfos.email}`}
                className={classnames(
                  "underline",
                  "hover:text-primary",
                  "transition",
                  "duration-300",
                  "font-medium"
                )}
              >
                {webInfos.email}
              </a>
            </div>
            <div className={classnames("mb-8", "lg:w-[300px] w-full")}>
              <h5 className={classnames("text-lg", "font-bold", "mb-0.5")}>
                {webInfos.vnAddress}
              </h5>
              <a
                href={`mailto:${webInfos.email}`}
                className={classnames(
                  "underline",
                  "hover:text-primary",
                  "transition",
                  "duration-300",
                  "font-medium",
                  "block",
                  "mb-1"
                )}
              >
                {webInfos.email}
              </a>
              <a
                href={`tel:${webInfos.phone}`}
                className={classnames(
                  "hover:text-primary",
                  "transition",
                  "duration-300",
                  "font-medium",
                  "block"
                )}
              >
                {webInfos.phone}
              </a>
            </div>
            <div className={classnames("flex", "gap-3")}>
              {socials.map((item) => (
                <div
                  key={item.link}
                  className={classnames(
                    "w-10",
                    "h-10",
                    "rounded-full",
                    "flex",
                    "items-center",
                    "justify-center",
                    "bg-white",
                    "hover:bg-primary",
                    "cursor-pointer"
                  )}
                  onClick={() => window.open(item.link)}
                >
                  <Image
                    src={item.logo}
                    alt="logo"
                    className={classnames("w-5")}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={classnames("lg:w-[550px] w-full", "lg:mt-0 mt-8")}>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <div className={classnames("bg-gray-900", "text-white", "md:py-10 py-4")}>
        <div
          className={classnames(
            "container",
            "flex",
            "md:flex-row flex-col",
            "items-center",
            "justify-between"
          )}
        >
          <HeaderRouters textClasses={classnames("text-white")} />
          <div className={classnames("flex", "items-center", "md:mt-0 mt-2")}>
            <p className={classnames("font-medium")}>
              2023 Build. All rights reserved
            </p>
            <Image
              alt="logo"
              src={require("@assets/images/logo.png")}
              className={classnames("h-6", "w-auto", "rounded-sm", "ml-3")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
