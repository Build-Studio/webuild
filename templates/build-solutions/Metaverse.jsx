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
    <div className={classnames("container", "pb-24")}>
      <div className={classnames("mb-12")}>
        <h3
          className={classnames(
            "text-center",
            "font-bold",
            "mb-3",
            "mx-auto",
            "leading-none"
          )}
        >
          HOW WE BRING YOUR BRAND INTO THE METAVERSE
        </h3>
      </div>
      <div className={classnames("grid", "grid-cols-2", "gap-8")}>
        {items.map((item, index) => (
          <div
            key={index}
            className={classnames(
              item.bg,
              "bg-gradient-to-r",
              "rounded-lg",
              "flex",
              "flex-col",
              "items-center",
              "py-8"
            )}
          >
            <div>
              {item.keywords.map((key) => (
                <h3
                  key={key}
                  className={classnames(
                    "font-bold",
                    "text-white",
                    "text-3xl",
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
