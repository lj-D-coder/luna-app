"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(pathname);
  useEffect(() => {
    const url = `${pathname}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
}
