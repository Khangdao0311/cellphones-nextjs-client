import { Fragment } from "react";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
