import Image from "next/image";
import classnames from "tailwindcss-classnames";
import Marquee from "react-fast-marquee";

const items = [
  require("@assets/images/brand-6.svg"),
  require("@assets/images/brand-7.png"),
  // require("@assets/images/brand-5.png"),
  require("@assets/images/brand-8.png"),
  require("@assets/images/brand-10.png"),
  require("@assets/images/brand-4.png"),
  require("@assets/images/brand-9.png"),
  require("@assets/images/brand-1.png"),
  require("@assets/images/brand-3.png"),
];

export default function HomeBrands() {
  return (
    <div className={classnames("container", "md:py-24 py-16")}>
      <Marquee autoFill pauseOnHover>
        {items.map((item, index) => (
          <Image
            src={item}
            alt="logo"
            key={index}
            className={classnames(
              "w-auto",
              "md:h-20 h-12",
              "mx-6",
              "opacity-20",
              "grayscale-100"
            )}
          />
        ))}
      </Marquee>
    </div>
  );
}
