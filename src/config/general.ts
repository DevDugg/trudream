import { colors } from "./colors";

type GeneralType = {
  appName: string;
  appDescription: string;
  domainName: string;
  colors: {
    theme: "light" | "dark";
    main: string;
  };
  creator: `@${string}`;
};

export const general: GeneralType = {
  appName: "TruDream",
  appDescription: "Fund Your Dreams, Achieve Financial Freedom",
  domainName: "avium.trade",
  colors: {
    theme: "light",
    main: colors.ACCENT,
  },
  creator: "@website_dugg",
};
