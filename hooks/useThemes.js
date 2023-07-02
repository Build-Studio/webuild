import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

function useThemes() {
  const configs = resolveConfig(tailwindConfig);

  return configs.theme;
}

export default useThemes;
