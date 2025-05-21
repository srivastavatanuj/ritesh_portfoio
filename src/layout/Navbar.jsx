import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../utils/constants/Constants";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav>
            <div className=" flex justify-between items-center px-4 lg:px-0 py-3 lg:py-0">
                <Link
                    to="/"
                    className="text-3xl font-bold  lg:p-4 lg:ml-4 text-[#95977e] tracking-wider z-50"
                >
                    Ritesh Kaloni
                </Link>
                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                    <ul className="flex gap-6 text-lg font-medium">
                        {NAV_ITEMS.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="text-[#525353] px-2 py-1 rounded-sm transition-all duration-700 ease-in-out transform hover:+border  hover:bg-[#95977e] hover:scale-105"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className={`absolute top-2 left-0 w-[100%]  h-screen bg-white z-40 transform transition-transform duration-500 ease-in-out  ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    id="mobile-menu"
                >
                    <ul className="flex flex-col items-start gap-4 text-base font-medium px-2 mt-12 ">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.name} className="w-full px-2 text-black/70 tracking-wider">
                                <Link
                                    to={item.link}
                                    className="w-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={toggleMenu}
                    className="relative w-8 h-8 flex flex-col justify-center items-center z-50 focus:outline-none  lg:hidden"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
                        <div
                            className={`w-6 h-1 rounded-full bg-[#95977e] transition-all duration-300 ease-in-out mb-1.5 transform ${isOpen ? "rotate-45 translate-y-2.5" : ""
                                }`}
                        />

                        {/* Middle (cheese/lettuce) */}
                        <div
                            className={`w-6 h-1 rounded-full bg-[#95977e] transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />

                        {/* Bottom bun */}
                        <div
                            className={`w-6 h-1 rounded-full bg-[#95977e] transition-all duration-300 ease-in-out mt-1.5 transform ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>
        </nav>
    );
}
export default Navbar;
