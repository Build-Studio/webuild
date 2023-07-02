import Image from "next/image";
import classnames from "tailwindcss-classnames";
import Marquee from "react-fast-marquee";

const items = [
  require("@assets/images/partner-1.png"),
  require("@assets/images/partner-2.png"),
  require("@assets/images/partner-3.png"),
  require("@assets/images/partner-4.png"),
  require("@assets/images/partner-5.png"),
];

export default function HomePartners() {
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
