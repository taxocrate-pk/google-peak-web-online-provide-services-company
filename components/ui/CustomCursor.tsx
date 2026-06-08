"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursor-follower");

    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
      if (follower) {
        setTimeout(() => {
          follower.style.left = e.clientX + "px";
          follower.style.top = e.clientY + "px";
        }, 80);
      }
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cursor" className="cursor hidden lg:block" />
      <div id="cursor-follower" className="cursor-follower hidden lg:block" />
    </>
  );
}
