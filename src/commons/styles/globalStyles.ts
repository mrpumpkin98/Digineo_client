import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Arita-Medium", "NotoSansKR-Regular";
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }

  // bold
  @font-face {
    font-family: "Arita-Bold";
    src: url("/fonts/arita-dotum-Bold.woff");
  }

  // semi-bold
  @font-face {
    font-family: "Arita-SemiBold";
    src: url("/fonts/arita-dotum-SemiBold.woff");
  }

  // medium
  @font-face {
    font-family: "Arita-Medium";
    src: url("/fonts/arita-dotum-Medium.woff");
  }

  // light
  @font-face {
    font-family: "Arita-Light";
    src: url("/fonts/arita-dotum-Light.woff");
  }

  // thin
  @font-face {
    font-family: "Arita-Thin";
    src: url("/fonts/arita-dotum-Thin.woff");
  }

  // alt font
  @font-face {
    font-family: "NotoSansKR-Regular";
    src: url("/fonts/NotoSansKR-Regular.woff");
  }
`;
