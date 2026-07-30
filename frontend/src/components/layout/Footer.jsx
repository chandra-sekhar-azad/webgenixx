import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUp, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black relative pt-10">

            {/* Divider Grid */}
            <div className="border-t border-white/5 border-b grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 px-4 sm:px-6 lg:px-12 bg-[#050505]">

                {/* Column 1: Services */}
                <div className="p-8 lg:p-16 flex flex-col justify-start">
                    <h4 className="text-purple-500 font-bold tracking-widest text-[10px] uppercase mb-8">Services</h4>
                    <div className="flex flex-col gap-5">
                        <Link to="/services" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Logo Design</Link>
                        <Link to="/services" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Web Development</Link>
                        <Link to="/services" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Maintenance</Link>
                        <Link to="/services" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Custom Software</Link>
                    </div>
                </div>

                {/* Column 2: Links */}
                <div className="p-8 lg:p-16 flex flex-col justify-start">
                    <h4 className="text-purple-500 font-bold tracking-widest text-[10px] uppercase mb-8">Links</h4>
                    <div className="flex flex-col gap-5">
                        <Link to="/" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Home</Link>
                        <Link to="/services" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Services</Link>
                        <Link to="/get-started" className="text-white text-sm font-medium hover:text-purple-400 transition-colors w-fit">Get Started</Link>
                    </div>
                </div>



                {/* Column 4: Contact */}
                <div className="p-8 lg:p-16 flex flex-col justify-start">
                    <h4 className="text-purple-500 font-bold tracking-widest text-[10px] uppercase mb-8">Contact</h4>
                    <p className="text-white text-sm md:text-base font-medium mb-4"><a href="tel:+918897536435">+91 88975 36435</a> <br /> <a href="tel:+919963048098">+91 99630 48098</a></p>
                    <p className="text-white text-sm md:text-base font-medium mb-4"><a href="mailto:thewebgenixx@outlook.com">thewebgenixx@outlook.com</a></p>
                    <p className="text-white text-sm md:text-base font-medium mb-4"><a href="https://www.instagram.com/the.webgenixx/" target="_blank">@the.webgenixx</a></p>
                    <p className="text-white text-sm md:text-base font-medium mb-12"><a href="https://thewebgenixx.in"target="_blank"rel="noopener noreferrer">thewebgenixx.in</a></p>
                    <Link to="/get-started" className="inline-flex py-4 px-8 border border-white/10 hover:border-purple-500 text-white text-[10px] font-bold tracking-widest uppercase items-center gap-4 transition-colors w-fit">
                        Get Started <ChevronRight className="w-4 h-4 text-purple-500" />
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center px-8 lg:px-16 py-8 border-b border-white/5 bg-[#050505]">
                <p className="text-gray-500 text-[10px] tracking-widest uppercase mb-4 md:mb-0">© {new Date().getFullYear()} WEBGENIXX</p>
                <p className="text-gray-500 text-[10px] tracking-widest uppercase">WE BUILD. YOU GROW.</p>
            </div>

            {/* Floating Actions */}
            <div className="fixed bottom-8 right-6 flex flex-col gap-3 z-50">
                <a href="https://wa.me/918897536435" target="_blank" rel="noreferrer" className="w-12 h-12 bg-black border border-purple-500/50 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white transition-colors shadow-lg">
                    <MessageCircle className="w-5 h-5" />
                </a>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-black border border-purple-500/50 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white transition-colors shadow-lg">
                    <ArrowUp className="w-5 h-5" />
                </button>
            </div>

        </footer>
    );
}
