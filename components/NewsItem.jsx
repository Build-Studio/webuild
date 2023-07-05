import Image from "next/image";
import classnames from "tailwindcss-classnames";

export default function NewsItem(props) {
  const { item, onClick, buttonLabel, buttonIcon, descClasses } = props;
  return (
    <div
      className={classnames(
        "rounded-xl",
        "text-white",
        "flex",
        "flex-col",
        item.bgColor
      )}
    >
      <div
        className={classnames(
          "text-lg",
          "flex",
          "items-center",
          "justify-center",
          "py-3",
          "font-bold"
        )}
      >
        {item.label}
        {item.icon && (
          <Image
            alt="icon"
            src={item.icon}
            className={classnames("w-12", "h-12", "ml-2")}
          />
        )}
      </div>
      <Image
        alt="img"
        src={item.img}
        className={classnames("h-[350px]", "w-full", "object-cover")}
      />
      <div
        className={classnames(
          "flex-1",
          "flex",
          "lg:flex-row flex-col",
          "lg:items-center items-start",
          "justify-between",
          "p-4"
        )}
      >
        <p
          className={classnames(
            "flex-1",
            "mr-3",
            "leading-[1.2]",
            "text-sm",
            descClasses
          )}
        >
          {item.desc}
        </p>
        <button
          onClick={onClick}
          className={classnames(
            "flex",
            "items-center",
            "justify-center",
            "bg-white",
            "font-bold",
            "py-3",
            "px-5",
            "rounded-lg",
            "transition",
            "duration-300",
            item.textColor,
            "hover:opacity-80",
            "lg:text-xl",
            "font-bold",
            "lg:w-auto w-full",
            "lg:mt-0 mt-2"
          )}
        >
          {buttonLabel}
          {buttonIcon}
        </button>
      </div>
    </div>
  );
}
