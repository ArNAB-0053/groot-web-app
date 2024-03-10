import Link from "next/link"

const Header = () => {
    return (
        <header className="lg:px-28 lg:py-5 absolute top-0 w-screen">
            <div className=" w-full ">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between lg:gap-4">
                        <Link className="flex items-center gap-2 text-xl font-semibold" href="/">
                            <FlowerIcon className="h-8 w-8" />
                            Groot
                        </Link>
                        <nav className="flex items-center gap-4 md:gap-8 bg-[#8aa958e1] lg:px-12 py-3 lg:rounded-full">
                            <Link className="font-medium" href="/About">
                                About
                            </Link>
                            <Link className="font-medium" href="/Contact">
                                Contact
                            </Link>
                            <Link className="font-medium" href="/Blog">
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

function LeafIcon(props) {
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
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}