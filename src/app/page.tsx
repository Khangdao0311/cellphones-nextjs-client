"use client";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

import config from "@/config";

function Page() {
  const router = useRouter();
  
  useLayoutEffect(() => {
    router.push(config.routes.home);
  });
}

export default Page;
