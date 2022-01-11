import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "#1EA4CE",
    darkMain: "#147594",
    chipBackground: "#F2F0FD",
    imageBorder: "#F3F0FE",
    backdrop: "rgba(0, 0, 0, 0.4)",
    globalBg: "#FAFAFA",
    blackScale: {
      black: "#525252",
      black50: "#F4F4F4",
      black100: "#E0E0E0",
      black300: "#A8A8A8",
      black500: "#6F6F6F",
      black600: "#525252",
    },
    grayScale: {
      gray500: "#697488",
      gray700: "#191919",
    },
    boxShadows: {
      checkbox: "rgb(93 56 192 / 40%) 0px 1px 7px 0px",
      filterContainer: "rgb(93 62 188 / 4%) 0px 6px 24px",
    },
  },
};

export default theme;

export const device = {
  widescreen: "(max-width: 1440px)",
  desktop: "(max-width: 1280px)",
  laptop: "(max-width: 1024px)",
  tablet: "(max-width: 768px)",
  phone: "(max-width: 640px)",
  mini: "(max-width: 425px)",
};

export const lineClamp = (clampCount: number) => {
  return `
  display: -webkit-box;
  -webkit-line-clamp: ${clampCount};
  -webkit-box-orient: vertical;
  overflow: hidden;
  `;
};
