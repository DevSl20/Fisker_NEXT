"use client";
import { useState } from "react";
import Header from "../components/Header";
import Preview from "../components/Preview";
import Configurator from "../components/Configurator";

function HomePage() {
  const [activeOptions, setActiveOptions] = useState({
    color: "Blue Planet",
    interior: "white", // TODO: Add interior color options
    wheel: "Vortex",
  });


function updateOptions(options, value) {
  const newOptions = { ...activeOptions, [options]: value };
  setActiveOptions(newOptions);
}


  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-8 px-2 md:px-8 py-3 md:py-6">
        <section className="w=full md:w-3/4 ">
          <Preview {...activeOptions} />
        </section>
        <aside className="w-full md:w-1/4 bg-red-300 px-3 py-3">
          <Configurator updateOptions={updateOptions} />
        </aside>
      </main>
    </>
  );
}

export default HomePage;
