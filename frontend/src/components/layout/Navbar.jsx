import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Get Started', path: '/get-started' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0f0f0f]/80 border-b border-white/10">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg from-cyan-400 to-purple-600 flex items-center justify-center">
                            <img src="/brand.png" alt="logo" />
                        </div>
                        <Link to="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
                            The Webgenixx
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`${location.pathname === link.path
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-white'
                                        } px-2 py-2 rounded-md text-sm font-medium transition-colors`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/get-started" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                            Start Project
                        </Link>
                    </div>

                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-[#111116] border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3 flex flex-col gap-3">
                            <Link to="/start-project" onClick={() => setIsOpen(false)} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-xl font-medium w-full text-center">
                                Start Project
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
