import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      darkMain: string;
      chipBackground: string;
      imageBorder: string;
      backdrop: string;
      globalBg: string;
      grayScale: {
        gray500: string;
        gray700: string;
      };
      blackScale: {
        black: string;
        black50: string;
        black100: string;
        black300: string;
        black500: string;
        black600: string;
      };
      boxShadows: {
        checkbox: string;
        filterContainer: string;
      };
    };
  }
}
