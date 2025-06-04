import type { Metadata } from "next";

import "./globals.css";
import { ReduxProvider } from "@/redux";
import { StoreProvider } from "@/store";
import { Suspense } from "react";

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
        <Suspense fallback={<div />}>
          <ReduxProvider>
            <StoreProvider>{children}</StoreProvider>
          </ReduxProvider>
        </Suspense>
      </body>
    </html>
  );
}
