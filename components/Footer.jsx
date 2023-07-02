import classnames from "tailwindcss-classnames";
import GradientBlock from "./GradientBlock";
import Image from "next/image";
import ContactUsForm from "@templates/home/ContactUsForm";
import HeaderRouters from "./HeaderRoutes";

const infos = {
  intro: ["LETS BUILD THE", "METAVERSE TOGETHER"],
  sgAddress: "96 Robinson Road, #11-04, SIF Building, Singapore, 068899",
  vnAddress:
    "4th Floor, 343 Hoang Sa, Tan Dinh Ward, District 1, Ho Chi Minh City, Vietnam 700000",
  email: "team@webuild.gg",
  phone: "+84 896 656941",
};

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

export default function Header() {
  return (
    <div>
      <div className={classnames("bg-gray-800", "text-white", "py-28")}>
        <div className={classnames("container", "flex", "justify-between")}>
          <div>
            <h3 className={classnames("font-bold", "mb-4")}>
              <p className={classnames("leading-none", "-mb-3")}>
                {infos.intro[0]}
              </p>
              <GradientBlock>{infos.intro[1]}</GradientBlock>
            </h3>
            <div className={classnames("mb-8", "w-[300px]")}>
              <h5 className={classnames("text-lg", "font-bold", "mb-0.5")}>
                {infos.sgAddress}
              </h5>
              <a
                href={`mailto:${infos.email}`}
                className={classnames(
                  "underline",
                  "hover:text-primary",
                  "transition",
                  "duration-300",
                  "font-medium"
                )}
              >
                {infos.email}
              </a>
            </div>
            <div className={classnames("mb-4", "w-[300px]")}>
              <h5 className={classnames("text-lg", "font-bold", "mb-0.5")}>
                {infos.vnAddress}
              </h5>
              <a
                href={`mailto:${infos.email}`}
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
                {infos.email}
              </a>
              <a
                href={`tel:${infos.phone}`}
                className={classnames(
                  "hover:text-primary",
                  "transition",
                  "duration-300",
                  "font-medium",
                  "block"
                )}
              >
                {infos.phone}
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
          <div className={classnames("w-[550px]")}>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <div className={classnames("bg-gray-900", "text-white", "py-10")}>
        <div
          className={classnames(
            "container",
            "flex",
            "items-center",
            "justify-between"
          )}
        >
          <HeaderRouters textClasses={classnames("text-white")} />
          <div className={classnames("flex", "items-center")}>
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
    </div>
  );
}
