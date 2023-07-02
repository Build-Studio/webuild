import Gradient from "rgt";
import useThemes from "@hooks/useThemes";

export default function GradientBlock(props) {
  const theme = useThemes();

  return (
    <Gradient
      dir="left-to-right"
      from={theme.colors.primary.DEFAULT}
      to={theme.colors.secondary.DEFAULT}
      {...props}
    >
      {props.children}
    </Gradient>
  );
}
