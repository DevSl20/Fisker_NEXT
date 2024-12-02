
function Header(){
    return (
    <div className="text-stone-900">
        <div className="bg-stone-100">
            <p className="text-center font-semibold py-2">
                All Electric &#xb7; Dyanamic &#xb7; Driving Range
            </p>
        </div>
        <header className="flex justify-between px-10 py-3">
            <image 
            src="/fisker.svg" 
            alt="fisker-logo"
            height="100"
            width="100"
            className="w-12 sm:w-16 cursor-pointer hover:scale-110
            transition-transform duration-100"
            /> 
            <span className="flex gap-2 items-center">
          <Image src="globe.svg" width={20} height={20} alt="Globe Icon" />
          <p className="text-sm sm:text-base">US</p>
        </span>
        </header>
    </div>
    )
}

export default Header;