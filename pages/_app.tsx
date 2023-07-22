import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import "@/app/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <div className="font-roboto bg-gray-50">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ReactQueryProvider>
  );
}

export default wrapper.withRedux(MyApp);
