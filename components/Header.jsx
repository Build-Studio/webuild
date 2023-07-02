import Image from "next/image";
import { useRouter } from "next/router";
import classnames from "tailwindcss-classnames";
import { AiFillCaretRight } from "react-icons/ai";
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
        "shadow-md"
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
                "h-12",
                "w-auto",
                "mr-6",
                "cursor-pointer",
                "rounded-md"
              )}
              onClick={() => router.push("/")}
            />

            <HeaderRouters />
          </div>
          <button
            className={classnames(
              "flex",
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
          >
            CONTACT US
            <AiFillCaretRight className={classnames("ml-1")} />
          </button>
        </div>
      </div>
    </div>
  );
}
