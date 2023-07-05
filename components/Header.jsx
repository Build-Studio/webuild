import Image from "next/image";
import { useRouter } from "next/router";
import classnames from "tailwindcss-classnames";
import { AiFillCaretRight } from "react-icons/ai";
import { LuMailQuestion } from "react-icons/lu";
import HeaderRouters from "./HeaderRoutes";

export default function Header() {
  const router = useRouter();

  return (
    <div
      className={classnames(
        "bg-white",
        "fixed",
        "left-0",
        "right-0",
        "top-0",
        "shadow-md",
        "z-20"
      )}
    >
      <div className={classnames("container")}>
        <div
          className={classnames(
            "flex",
            "items-center",
            "justify-between",
            "py-2"
          )}
        >
          <div className={classnames("flex items-center")}>
            <Image
              src={require("@assets/images/logo.png")}
              alt="logo"
              className={classnames(
                "md:h-12 h-8",
                "w-auto",
                "md:mr-6 mr-2",
                "cursor-pointer",
                "rounded-md"
              )}
              onClick={() => router.push("/")}
            />

            <HeaderRouters hideContact />
          </div>
          <button
            className={classnames(
              "md:flex hidden",
              "items-center",
              "text-primary",
              "font-bold",
              "border-[2px]",
              "border-primary",
              "px-3",
              "py-1.5",
              "rounded-md",
              "transition",
              "duration-300",
              "hover:text-white",
              "hover:bg-primary"
            )}
            onClick={() => router.push("/contact-us")}
          >
            CONTACT US
            <AiFillCaretRight className={classnames("ml-1")} />
          </button>
          <button
            className={classnames("p-1", "text-primary", "md:hidden flex")}
            onClick={() => router.push("/contact-us")}
          >
            <LuMailQuestion size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
