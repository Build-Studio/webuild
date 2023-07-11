import GradientBlock from "@components/GradientBlock";
import classnames from "tailwindcss-classnames";

const items = [
  {
    label: "BATTLE ROYAL",
    count: "8",
    countDesc: "GAMES",
    bg: "from-turquoise-200 to-turquoise",
  },
  {
    label: "ADVENTURE",
    count: "5",
    countDesc: "GAMES",
    bg: "from-turquoise to-blue",
  },
  {
    label: "OPEN WORLD",
    count: "12",
    countDesc: "GAMES",
    bg: "from-blue to-secondary",
  },
  {
    label: "RACING",
    count: "4",
    countDesc: "GAMES",
    bg: "from-secondary to-fuchsia",
  },
  {
    label: "SHOWROOMS",
    count: "15",
    countDesc: "ENVIRONMENTS",
    bg: "from-fuchsia to-primary",
  },
  {
    label: "MOBILE",
    count: "35",
    countDesc: "GAMES",
    bg: "from-primary to-pink",
  },
];

export default function HomeGameTypes() {
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
        OUR GAMES TYPES
      </h3>
      <h6
        className={classnames(
          "text-lg",
          "text-center",
          "max-w-[600px]",
          "mx-auto",
          "leading-6",
          "mb-4"
        )}
      >
        We build all types of custom games and environments. Build deep customer
        engagement through immersive experiences.
      </h6>

      <div
        className={classnames(
          "grid",
          "lg:grid-cols-6 md:grid-cols-3 grid-cols-2",
          "gap-3"
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={classnames(
              "rounded-xl",
              "bg-gradient-to-r",
              item.bg,
              "overflow-hidden",
              "text-white"
            )}
          >
            <div
              className={classnames(
                "border-b-[1px]",
                "border-b-white",
                "flex",
                "justify-center",
                "pt-3",
                "pb-2"
              )}
            >
              <h5 className={classnames("font-bold")}>{item.label}</h5>
            </div>
            <div
              className={classnames("flex", "flex-col", "items-center", "py-8")}
            >
              <h4 className={classnames("font-bold")}>{item.count}</h4>
              <p className={classnames("font-medium")}>{item.countDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
