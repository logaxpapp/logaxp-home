"use client";

import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { useEffect } from "react";
MouseFollower.registerGSAP(gsap);
export default function Cursor() {
  useEffect(() => {
    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.6,
    });
    cursor.setSkewing(3);
    cursor.show();
    return () => cursor.destroy();
  }, []);
  return null;
}
