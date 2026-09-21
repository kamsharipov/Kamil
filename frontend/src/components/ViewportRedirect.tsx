"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  desktopTo?: string;
  mobileTo?: string;
};

export default function ViewportRedirect({ desktopTo, mobileTo }: Props) {
  const router = useRouter();
  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w < 860 && mobileTo) {
      router.replace(mobileTo);
    }
    if (w >= 860 && desktopTo) {
      router.replace(desktopTo);
    }
  }, [desktopTo, mobileTo, router]);
  return null;
}
