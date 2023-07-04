import Image from "next/image";
import classnames from "tailwindcss-classnames";
import Marquee from "react-fast-marquee";

const items = [
  require("@assets/images/solution-logo-1.png"),
  require("@assets/images/solution-logo-2.png"),
  require("@assets/images/solution-logo-3.png"),
  require("@assets/images/solution-logo-4.png"),
  require("@assets/images/solution-logo-5.png"),
  require("@assets/images/solution-logo-6.svg"),
  require("@assets/images/solution-logo-7.png"),
  require("@assets/images/solution-logo-8.png"),
  require("@assets/images/solution-logo-9.png"),
  require("@assets/images/solution-logo-10.svg"),
  require("@assets/images/solution-logo-11.png"),
];

export default function BuildSolutionLogos() {
  return (
    <div className={classnames("container", "py-24")}>
      <Marquee autoFill pauseOnHover>
        {items.map((item, index) => (
          <Image
            src={item}
            alt="logo"
            key={index}
            className={classnames("w-auto", "h-20", "mx-6", "opacity-20", 'grayscale-100')}
          />
        ))}
      </Marquee>
    </div>
  );
}
