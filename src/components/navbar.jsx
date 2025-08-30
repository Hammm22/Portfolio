
function navbar(){
    return(
        <nav className="bg-black/50 h-[80px] w-full flex items-center px-8 justify-between font-poppins fixed backdrop-blur-lg z-50 ">
            <div>
                <h1 className="text-white text-[30px]"><span className="text-sky-500">Hamm22</span> Portfolio</h1>
            </div>

            <div>
                <ul className="text-white text-[22px] flex space-x-8 mr-10">
                    <li className="hover:text-sky-500 cursor-pointer"><a href="#home" className="">Home</a></li>
                    <li className="hover:text-sky-500 cursor-pointer"><a href="#about" className="">About Me</a></li>
                    <li className="hover:text-sky-500 cursor-pointer">My Project's</li>
                    <li className="hover:text-sky-500 cursor-pointer">Contact Me</li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar;