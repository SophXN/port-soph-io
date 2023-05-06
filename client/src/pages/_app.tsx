import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContext from "../../context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}
