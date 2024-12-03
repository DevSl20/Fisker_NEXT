"use client";

function Configurator() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-lightbold text-blue-950">
        Fisker Configurator
      </h1>
      <p className="py-2 text-l font-semibold">
        Configure your Fisker Ocean, with wide range of exterior and interior
        features and 3 Wheels option.
      </p>

      {/* Exterior Colors */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">
          Exterior Color
        </h3>
        <div className="flex gap-2">
          {new Array(6).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100  ${
                index === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img
                src="images/black_pearl.png"
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Colors */}
      <div className="my-12">
        <h3 className="font-bold uppercase mb-3">
          Interior Color
        </h3>
        <div className="flex gap-2">
          {new Array(2).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100  ${
                index === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img
                src="https://fisker-ocean.vercel.app/swatch/interior/dark.png"
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Options */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">
          Wheel Options
        </h3>
        <div className="flex gap-2">
          {new Array(3).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100  ${
                index === 0 ? "border-2 border-blue-300" : ""
              }`}
            >
              <img
                src="https://fisker-ocean.vercel.app/wheels/aerostealth.webp"
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
