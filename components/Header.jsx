import Image from "next/image";

function Header() {
  return (
    <div className="text-stone-900">
      <div className="bg-stone-100">
        <p className="text-center font-semibold py-2">
          All Electric &#xb7; Dyanamic &#xb7; Driving Range
        </p>
      </div>

      {/* Header */}
      <header className="flex justify-between px-10 py-3">
        <Image
          src="fisker.svg"
          alt="Fisker Logo"
          height={100}
          width={100}
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110
            transition-transform duration-100"
        />
        <h1 className="text-2xl md:text-6xl font-semibold text-blue-950 items-center">
          Fisker Ocean
        </h1>

        {/*Region*/}
        <a href="#" className="flex gap-2 items-center">
          <Image src="globe.svg" width={20} height={20} alt="Globe Icon" />
          <p className="text-sm sm:text-base">US</p>
        </a>
      </header>
    </div>
  );
}

export default Header;
