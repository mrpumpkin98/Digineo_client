import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>디기너 - 디깅모멘텀 유형검사 서비스</title>
          <link rel="icon" type="image/png" href="/images/logo2.png" />
        </Head>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
