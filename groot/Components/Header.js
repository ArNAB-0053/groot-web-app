'use client'
import Link from "next/link"
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="lg:px-28 lg:py-5 absolute top-6 w-[90%] lg:w-screen flex items-center justify-center rounded-full bg-[#8aa958e1] lg:bg-transparent py-3 ">
            <div className=" w-full flex items-center justify-center">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between lg:gap-4 ">
                        <Link className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold lg:text-logo" href="/">
                            <FlowerIcon className="h-8 w-8" />
                            Groot
                        </Link>
                        <button onClick={toggleMenu} className="absolute right-4 block lg:hidden">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                        <nav className={`absolute top-[3.7rem] left-0 w-full transition-all ease-linear duration-[0.3s] lg:relative lg:top-0 lg:w-1/3 ${isOpen ? 'flex' : 'hidden'} lg:flex items-center justify-evenly gap-4 md:gap-8 bg-[#8aa958e1] lg:px-12 py-3 rounded-full`}>
                            <Link className="font-medium" href="/About" onClick={closeMenu}>
                                About
                            </Link>
                            <Link className="font-medium" href="/Contact" onClick={closeMenu}>
                                Contact
                            </Link>
                            <Link className="font-medium" href="/Blog" onClick={closeMenu}>
                                Blog
                            </Link>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

function FlowerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
            <circle cx="12" cy="12" r="3" />
            <path d="m8 16 1.5-1.5" />
            <path d="M14.5 9.5 16 8" />
            <path d="m8 8 1.5 1.5" />
            <path d="M14.5 14.5 16 16" />
        </svg>
    )
}
