import { getDefaultProvider } from "ethers";
import type { AppProps } from "next/app";
import BasicLayout from "components/BasicLayout";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import "styles/globals.css";
import "styles/motion.css";
import "react-toastify/dist/ReactToastify.css";

const ethersConfig = {
  provider: getDefaultProvider("homestead"),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>洋葱 - NFT盈亏分析</title>
        <meta
          name="keywords"
          content="NFT Flips, NFT 分析, NFT盈亏分析, NFT盈亏统计, NFT合集统计"
        />
        <meta name="description" content="NFT分析平台" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default MyApp;
