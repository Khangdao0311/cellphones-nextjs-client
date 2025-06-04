"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import config from "@/config";

function Admin() {
  const router = useRouter();
  useEffect(() => {
    router.push(config.routes.adminProductList);
  });
}

export default Admin;
