import Link from "next/link";
import classnames from "tailwindcss-classnames";
import Gradient from "rgt";
import { useRouter } from "next/router";
import GradientBlock from "./GradientBlock";

const routes = [
  { label: "Build Metaverse", path: "/" },
  { label: "Build Solutions", path: "/build-solutions" },
  { label: "Contact us ", path: "/contact-us" },
];

export default function HeaderRouters({ textClasses, hideContact }) {
  const router = useRouter();

  const availableRoutes = routes.filter((i) =>
    hideContact ? i.path !== "/contact-us" : i
  );

  return (
    <div className={classnames("flex", "items-center")}>
      {availableRoutes.map((item) => {
        const active = item.path === router.pathname;
        return (
          <Link
            href={item.path}
            key={item.label}
            className={classnames(
              "font-bold",
              "px-3",
              "py-2",
              "transition",
              "duration-300",
              "hover:text-primary",
              textClasses
            )}
          >
            {active ? (
              <GradientBlock>{item.label.toUpperCase()}</GradientBlock>
            ) : (
              item.label.toUpperCase()
            )}
          </Link>
        );
      })}
    </div>
  );
}
