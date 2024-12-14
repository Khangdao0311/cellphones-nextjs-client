import type { Metadata } from "next";

import "./globals.css";
import { ReduxProvider } from "@/app/redux";
import { StoreProvider } from "@/app/store";

export const metadata: Metadata = {
  title: "cellphoneS",
  description: "Web Bán hàng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <StoreProvider>
            {children}
          </StoreProvider>
        </ReduxProvider>  
      </body>
    </html>
  );
}
