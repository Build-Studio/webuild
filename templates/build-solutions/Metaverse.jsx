import classnames from "tailwindcss-classnames";

const items = [
  {
    bg: "from-blue to-fuchsia",
    keywords: [
      "GAME STRATEGY",
      "GAMEPLAY DESIGN",
      "GUERILLA GAMING",
      "VIRTUAL EXPERIENCES",
      "VIRTUAL PRODUCTS",
      "GAME ANALYTICS",
    ],
  },
  {
    bg: "from-fuchsia to-primary",
    keywords: [
      "DIGITAL STRATEGY",
      "GAME PROMOTION",
      "MARKETING ANALYTICS",
      "COMMUNICATION STRATEGY",
      "MONETISATION STRATEGY",
      "ONLINE TO OFFLINE",
    ],
  },
];

export default function BuildMetaVerse() {
  return (
    <div className={classnames("container", "md:pb-24 pb-12")}>
      <div className={classnames("md:mb-12 mb-6")}>
        <h3
          className={classnames(
            "text-center",
            "font-bold",
            "mb-3",
            "mx-auto",
            "md:leading-none",
            "md:text-3xl text-xl"
          )}
        >
          HOW WE BRING YOUR BRAND INTO THE METAVERSE
        </h3>
      </div>
      <div
        className={classnames(
          "grid",
          "md:grid-cols-2 grid-cols-1",
          "lg:gap-8 gap-6"
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={classnames(
              item.bg,
              "bg-gradient-to-r",
              "rounded-lg",
              "flex",
              "flex-col",
              "md:items-center",
              "md:p-8 p-6"
            )}
          >
            <div>
              {item.keywords.map((key) => (
                <h3
                  key={key}
                  className={classnames(
                    "font-bold",
                    "text-white",
                    "lg:text-3xl text-xl",
                    "leading-normal"
                  )}
                >
                  {key}
                </h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
