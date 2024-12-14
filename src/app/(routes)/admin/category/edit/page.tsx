"use client";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

import config from "@/app/config";

function Page() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(config.routes.adminCategoryList);
  });
}

export default Page;
