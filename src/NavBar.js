import { useState } from "react";
import Logo from ".//public/flowise_logo.png";

export default function NavBar() {
    const [mobileView, setMobileView] = useState(false);

    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-baseline bg-white">
                {/* Logo */}
                <div className="flex gap-1">
                    <a href="/">
                        <Logo />
                    </a>
                </div>

                {/* Mobile Menu */}
                <div
                    className={` w-1/3 items-start flex flex-col  ${mobileView ? "block" : "hidden"
                        }`}
                >
                    <ul className="">
                        <li>
                            <a href="/api/auth/login?returnTo=/home">
                                <span className="hover:underline">Login</span>
                            </a>
                        </li>
                        <li>
                            <a href="/api/auth/signup">
                                <button className="hover:underline">Start Free Trial</button>
                            </a>
                        </li>
                        <li>
                            <a href="/pricing" className="hover:underline">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden md:hidden">
                    <button
                        className="navbar-burger flex items-center p-3"
                        onClick={() => setMobileView(!mobileView)}
                    >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                {/* Regular Menu */}
                <ul
                    className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:items-center lg:w-auto lg:space-x-6 md:flex md:items-center md:w-auto md:space-x-6"
                    style={{ left: '23%' }}
                >
                    <div className="flex gap-6">
                        {/* Center Links */}
                        <li>
                            <a href="/pricing" className="hover:underline">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">
                                About us
                            </a>
                        </li>
                    </div>
                </ul>

                <div className="space-x-4 hidden md:inline lg:inline">
                    <a href="/orgprompt">
                        <span
                            className="text-white font-barlow text-md p-2 min-w-[90px]"
                            style={{
                                background: 'linear-gradient(90deg, #3864B3 0%, #2F5597 31%, #EC73FF 83%)',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'background 0.3s ease',
                            }}
                        >
                            Organizations
                        </span>
                    </a>

                    <a href="/api/auth/login?returnTo=/home">
                        <span
                            className="text-white font-barlow text-md p-2 min-w-[90px]"
                            style={{
                                background: 'linear-gradient(90deg, #3864B3 0%, #2F5597 31%, #EC73FF 83%)',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'background 0.3s ease',
                            }}
                        >
                            Login
                        </span>
                    </a>

                    <a href="/api/auth/signup">
                        <button
                            className="text-white font-barlow font-medium text-md p-2 min-w-[90px]"
                            style={{
                                background: 'linear-gradient(90deg, #3864B3 0%, #2F5597 31%, #EC73FF 83%)',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'background 0.3s ease',
                            }}
                        >
                            Start Free Trial
                        </button>
                    </a>
                </div>
            </nav>
        </>
    );
}
