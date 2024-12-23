function Configurator({  color, interior, wheel, updateOptions }) {
  console.log(color, interior, wheel);
  const exteriorSwatch = [
    {
      id: 0,
      name: "Black Pearl",
      image: "/swatch/black_pearl.png",
    },
    {
      id: 1,
      name: "Blue Planet",
      image: "/swatch/blue_planet.png",
    },
    {
      id: 2,
      name: "Red Planet",
      image: "/swatch/red_planet.png",
    },
    {
      id: 3,
      name: "Sea Grass",
      image: "/swatch/sea_grass.png",
    },
    {
      id: 4,
      name: "Stealth Green",
      image: "/swatch/stealth_green.png",
    },
    {
      id: 5,
      name: "Sun Soaked",
      image: "/swatch/sun_soaked.png",
    },
  ];
  const interiorSwatch = [
    {
      id: 0,
      name: "Dark",
      image: "/swatch/interior/dark.png",
    },
    {
      id: 1,
      name: "Light",
      image: "/swatch/interior/light.png",
    },
  ];
  const wheelOptions = [
    {
      id: 0,
      name: "aerostealth",
      image: "/wheels/aerostealth.webp",
    },
    {
      id: 1,
      name: "slipstream",
      image: "/wheels/slipstream_black.webp",
    },
    {
      id: 2,
      name: "vortex",
      image: "/wheels/vortex.webp",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-950">
        Fisker Configurator
      </h1>
      <p className="py-2 text-l font-semibold">
        Customize your own Fisker Ocean!
      </p>

      {/* Exterior Colors */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Exterior Color</h3>
        <div className="flex gap-2">
          {exteriorSwatch.map((colorObj) => (
            <button
              key={colorObj.id}
              onClick={() => updateOptions("color", colorObj.name)}
              className={`hover:scale-105 transition-transform duration-100  ${
                colorObj.id === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img src={colorObj.image} alt="Black Pearl" className="w-12" />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Colors */}
      <div className="my-12">
        <h3 className="font-bold uppercase mb-3">Interior Color</h3>
        <div className="flex gap-2">
          {interiorSwatch.map((colorObj) => (
            <button
              key={colorObj.id}
              onClick={() => updateOptions("interior", colorObj.name)}
              className={`hover:scale-105 transition-transform duration-100  ${
                colorObj.id === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img src={colorObj.image} alt="Black Pearl" className="w-12" />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Options */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Wheel Options</h3>
        <div className="flex gap-2">
          {wheelOptions.map((wheelObj) => (
            <button
              key={wheelObj.id}
              onClick={() => updateOptions("wheel", wheelObj.name)}
              className={`hover:scale-105 transition-transform duration-100  ${
                wheelObj.id === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img src={wheelObj.image} alt="Black Pearl" className="w-12" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
