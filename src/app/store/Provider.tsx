"use client";

import { useReducer } from "react";

import Context from "./Context";
import reduce, { initState } from "./reducer";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer<any>(reduce, initState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
