import Image from "next/image";
import classnames from "tailwindcss-classnames";
import Marquee from "react-fast-marquee";

const items = [
  require("@assets/images/brand-1.png"),
  require("@assets/images/brand-2.png"),
  require("@assets/images/brand-3.png"),
  require("@assets/images/brand-4.png"),
  require("@assets/images/brand-5.png"),
];

export default function HomeBrands() {
  return (
    <div className={classnames("container", "py-24")}>
      <Marquee autoFill pauseOnHover>
        {items.map((item, index) => (
          <Image
            src={item}
            alt="logo"
            key={index}
            className={classnames("w-auto", "h-20", "mx-6", "opacity-20")}
          />
        ))}
      </Marquee>
    </div>
  );
}
