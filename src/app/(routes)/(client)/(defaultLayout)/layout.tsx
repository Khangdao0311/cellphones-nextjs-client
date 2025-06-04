import { Fragment } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
