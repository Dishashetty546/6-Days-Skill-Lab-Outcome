import Promotion from "./components/Promotion.js";
import Placements from "../app/components/placements.js";
import Body from "../app/components/Body.js";
import Partners from "../app/components/Partners.js";
import React from "react";
import Navbar from "../app/components/Navbar.js";
export default function Home() {
  return (
    <div className="flex flex-col bg-amber-50">
      <Navbar />
      <Body />
      <Placements />
      <Partners />
      <Promotion />
    </div>
  );
}
