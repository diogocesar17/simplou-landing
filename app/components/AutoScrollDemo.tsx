"use client";

import { useEffect } from "react";

export default function AutoScrollDemo() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace("/#demo");
    }
  }, []);

  return null;
}
