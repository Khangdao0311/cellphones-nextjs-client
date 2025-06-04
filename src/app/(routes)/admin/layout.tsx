import { Fragment } from "react";

import HeaderAsideAdmin from "@/components/HeaderAsideAdmin";
import "./admin.css";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <HeaderAsideAdmin />
      {children}
    </Fragment>
  );
}
