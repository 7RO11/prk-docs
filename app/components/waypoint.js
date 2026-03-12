"use client";

import { useState } from "react";

export default function Waypoint(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(props.command);
        setIsClicked(true);
      }}
      onMouseLeave={() => setIsClicked(false)}
      className="bg-(--backgroundLighter) my-3 p-3 text-2xl border border-neutral-500/80 rounded-full hover:underline hover:underline hover:cursor-pointer"
    >
      {isClicked ? "copied to clipboard 📋" : "waypoint 📍"}
    </button>
  );
}
