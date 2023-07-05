import GradientBlock from "@components/GradientBlock";
import { useRouter } from "next/router";
import { AiFillCaretRight } from "react-icons/ai";
import classnames from "tailwindcss-classnames";

export default function HomeBanner(props) {
  const { data, gradientContainerClasses, subtitleClasses } = props;
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact-us");
  };

  const gradientClasses = classnames(
    "font-bold",
    "leading-none",
    "lg:text-7xl",
    "text-[6.5vw]"
  );

  return (
    <div
      className={classnames(
        "lg:pt-[8vh] pt-4",
        "bg-[url('/home-banner-bg.png')]",
        "bg-cover",
        "bg-no-repeat",
        "lg:h-[calc(100vh_-_64px)]",
        "lg:min-h-[1050px]",
        "text-white",
        "flex",
        "flex-col",
        "justify-between",
        "relative"
      )}
    >
      <div
        className={classnames(
          "bg-[rgba(0,0,0,.5)]",
          "w-full",
          "h-full",
          "absolute",
          "top-0",
          "left-0",
          "z-0"
        )}
      />
      <div className={classnames("flex", "flex-col", "items-center", "z-10")}>
        <div
          className={classnames(
            "flex",
            "items-center",
            "justify-center",
            gradientContainerClasses
          )}
        >
          <div
            className={classnames("px-3", "border-r-[2px]", "border-r-white")}
          >
            <h1 className={classnames("text-right", gradientClasses)}>
              <GradientBlock>{data.gradientTitles[0]}</GradientBlock>
            </h1>
            <h1 className={classnames("text-right", gradientClasses)}>
              <GradientBlock>{data.gradientTitles[1]}</GradientBlock>
            </h1>
          </div>
          <div className={classnames("px-3")}>
            <h1 className={classnames(gradientClasses)}>
              {data.gradientTitles[2]}
            </h1>
            <h1 className={classnames(gradientClasses)}>
              {data.gradientTitles[3]}
            </h1>
          </div>
        </div>
        <h4
          className={classnames(
            "font-medium",
            "text-center",
            "lg:mt-10 mt-4",
            "max-w-[600px]",
            "mb-6",
            "px-2",
            "lg:text-2xl text-lg",
            subtitleClasses
          )}
          dangerouslySetInnerHTML={{ __html: data.subtitle }}
        />
        <button
          className={classnames(
            "flex",
            "items-center",
            "bg-primary",
            "font-bold",
            "px-4",
            "py-3",
            "rounded-md",
            "transition",
            "duration-300",
            "text-white",
            "hover:bg-secondary",
            "md:text-xl text-base",
            "mb-4"
          )}
          onClick={goToContact}
        >
          CONTACT US
          <AiFillCaretRight className={classnames("ml-1")} />
        </button>
      </div>
      <div
        className={classnames(
          "flex",
          "items-center",
          "container",
          "lg:flex-nowrap",
          "flex-wrap",
          "mb-10",
          "relative"
        )}
      >
        <div
          className={classnames(
            "bg-secondary",
            "text-white",
            "rounded-xl",
            "p-8",
            "lg:absolute lg:top-[50%] lg:left-4 lg:translate-y-[-50%] lg:w-[420px]",
            "lg:-order-first order-last",
            "z-10"
          )}
        >
          <h3 className={classnames("font-bold", "leading-none", "mb-3")}>
            {data.leftBox.title}
          </h3>
          {data.leftBox.desc.map((desc, index) => (
            <p className={classnames("mb-3")} key={index}>
              {desc}
            </p>
          ))}
          <p className={classnames("mb-3")}></p>
          <button
            className={classnames(
              "flex",
              "items-center",
              "bg-white",
              "font-bold",
              "px-3",
              "py-1.5",
              "rounded-md",
              "transition",
              "duration-300",
              "text-secondary",
              "hover:opacity-80"
            )}
            onClick={goToContact}
          >
            CONTACT US
            <AiFillCaretRight className={classnames("ml-1")} />
          </button>
        </div>
        <video
          className={classnames(
            "max-w-[1000px]",
            "w-full",
            "rounded-xl",
            "ml-auto",
            "mb-4"
          )}
          controls
          preload={"auto"}
        >
          <source src={data.videoUrl} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
