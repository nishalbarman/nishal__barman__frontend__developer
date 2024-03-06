import { headers } from "next/headers";
import WagmiContextProvider from "@/contexts/WagmiContext";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config/wagmi";

import "./globals.css";

export const metadata = {
  title: "Saviour || Saviour is OP",
  description: "Saviour || Saviour is OP",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html
      className="text-[10px] max-[1557px]:text-[8px] max-[375px]:text-[6px]"
      lang="en">
      <WagmiContextProvider initialState={initialState}>
        <body>{children}</body>
      </WagmiContextProvider>
    </html>
  );
}
