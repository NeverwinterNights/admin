import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import "@/styles/index.scss";
import { client } from "@/config/apollo-client";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  // variable: '--font-inter',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <ApolloProvider client={client}>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ApolloProvider>
    </>
  );
}
