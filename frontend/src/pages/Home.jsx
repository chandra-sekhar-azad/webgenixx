import { ArrowRight, Code, PenTool, Settings, Smartphone, CheckCircle2, ShieldCheck, LifeBuoy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logoDesignBg from '../assets/Logo & Graphic Design.webp';
import webDevBg from '../assets/webdev.webp';
import webMaintainBg from '../assets/webmaintain.webp';
import softwareDevBg from '../assets/software dev.webp';
import razorpayBg from '../assets/razorpay.webp';
import whatsappBg from '../assets/whatsapp.webp';
import indianBizBg from '../assets/For Indian Businesses.webp';
import adminBg from '../assets/Easy-to-use Admin.webp';
import fastExpBg from '../assets/Fast User Experience.webp';
import newRazorpayBg from '../assets/razorpay-img.jpg';
import phonepeBg from '../assets/phonepe-img.jpg';
import paytmBg from '../assets/paytm-img.jpg';
import newWhatsappBg from '../assets/new_whatsapp.png';
import newFastExpBg from '../assets/new_fast_exp.png';
import newAdminBg from '../assets/new_admin.png';
import newIndianBizBg from '../assets/new_indian_biz.png';
import newLocalSuppBg from '../assets/new_local_supp.png';

export default function Home() {
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative px-4 py-2 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-40 left-0 -ml-20 w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        variants={containerVars}
                        initial="hidden"
                        animate="show"
                        className="max-w-2xl"
                    >
                        <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-300">We Build · You Grow </span>
                        </motion.div>

                        <motion.h1 variants={itemVars} className="text-[90px] font-bold tracking-tight mb-6 leading-none">
                            <span className="inline-block text-white font-display tracking-tighter font-bold leading-[0.85] text-[clamp(3.5rem,11vw,13rem)]">
                                The
                            </span>
                            <br />
                            <span className="inline-block font-display tracking-tighter font-bold leading-[0.85] pb-[0.4em] text-[clamp(3.5rem,11vw,13rem)] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Webgenixx </span>
                        </motion.h1>



                    </motion.div>


                </div>
            </section>

            {/* Services Section - Horizontal Scroll (Desktop Only) */}
            <section ref={targetRef} className="hidden lg:block bg-[#0f0f0f] relative h-[300vh] border-y border-white/5">
                <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden pt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
                        <div className="text-center mb-12 lg:mb-20">
                            <p className="text-cyan-400 font-bold tracking-wider md:text-8xl text-xl mb-3">WHAT WE DO</p>

                        </div>
                    </div>

                    <div className="w-full pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2))]">
                        <motion.div style={{ x }} className="flex gap-8 w-[230vw] md:w-[150vw] lg:w-[110vw] pb-10">
                            {[
                                { icon: PenTool, title: "Logo & Graphic Design", desc: "Command attention with bespoke branding that speaks volumes before a word is read.", bg: logoDesignBg },
                                { icon: Code, title: "Website Development", desc: "Ultra-fast, responsive platforms built with the latest frameworks for maximum impact.", bg: webDevBg },
                                { icon: Settings, title: "Website Maintenance", desc: "Proactive updates, security patches, and 24/7 monitoring to keep you online.", bg: webMaintainBg },
                                { icon: Smartphone, title: "Software Development", desc: "Custom web applications and native mobile apps tailored to complex workflows.", bg: softwareDevBg }
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    style={{
                                        backgroundImage: `url('${s.bg}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                    className="group relative min-w-[320px] max-w-[420px] shrink-0 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)] overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-500 z-0"></div>
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500/30 transition-colors group-hover:scale-110 duration-300 border border-white/10">
                                                <s.icon className="w-7 h-7 text-white group-hover:text-cyan-300 transition-colors" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{s.title}</h3>
                                            <p className="text-gray-300 leading-relaxed drop-shadow-md">{s.desc}</p>
                                        </div>
                                        <div className="mt-8">
                                            <Link to="/services" className="inline-flex items-center font-bold text-cyan-400 hover:text-cyan-300 drop-shadow-md z-20">
                                                Explore <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section - Static Cards (Mobile & Tablet) */}
            <section className="bg-[#0f0f0f] border-b border-white/5 pt-0 pb-12 block lg:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="text-center mb-6 mt-4">
                        <p className="text-cyan-400 font-bold tracking-wider text-xl mb-3">WHAT WE DO</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-6">
                        {[
                            { icon: PenTool, title: "Logo & Graphic Design", desc: "Command attention with bespoke branding that speaks volumes before a word is read.", bg: logoDesignBg },
                            { icon: Code, title: "Website Development", desc: "Ultra-fast, responsive platforms built with the latest frameworks for maximum impact.", bg: webDevBg },
                            { icon: Settings, title: "Website Maintenance", desc: "Proactive updates, security patches, and 24/7 monitoring to keep you online.", bg: webMaintainBg },
                            { icon: Smartphone, title: "Software Development", desc: "Custom web applications and native mobile apps tailored to complex workflows.", bg: softwareDevBg }
                        ].map((s, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundImage: `url('${s.bg}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                className="group relative w-full h-[220px] sm:h-[320px] border border-white/10 hover:border-cyan-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-500 z-0"></div>
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-cyan-500/30 transition-colors group-hover:scale-110 duration-300 border border-white/10">
                                            <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-cyan-300 transition-colors" />
                                        </div>
                                        <h3 className="text-[13px] sm:text-xl font-bold text-white mb-2 sm:mb-3 drop-shadow-md leading-tight">{s.title}</h3>
                                        <p className="text-gray-300 leading-tight drop-shadow-md text-[10px] sm:text-sm line-clamp-3 sm:line-clamp-none">{s.desc}</p>
                                    </div>
                                    <div className="mt-2 sm:mt-6">
                                        <Link to="/services" className="inline-flex items-center font-bold text-cyan-400 hover:text-cyan-300 drop-shadow-md z-20 text-[10px] sm:text-sm">
                                            Explore <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Features Section */}
            < section className="py-2" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-cyan-400 font-bold tracking-wider md:text-8xl text-xl mb-3">WHY WEBGENIXX</p>

                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={containerVars}
                        className="flex flex-col gap-20 md:gap-40 pb-2"
                    >
                        {[
                            { title: "Razorpay Integration", subtitle: "PAYMENTS", metric: "100%", metricText: "Secure Transactions", bg: newRazorpayBg },
                            { title: "PhonePe Integration", subtitle: "PAYMENTS", metric: "Fast", metricText: "Seamless Checkout", bg: phonepeBg },
                            { title: "Paytm Integration", subtitle: "PAYMENTS", metric: "Secure", metricText: "Trusted by Millions", bg: paytmBg },
                            { title: "WhatsApp Ordering", subtitle: "COMMERCE", metric: "Direct", metricText: "Instant Notifications", bg: newWhatsappBg },
                            { title: "Fast User Experience (<2s)", subtitle: "PERFORMANCE", metric: "<2s", metricText: "Load Times", bg: newFastExpBg },
                            { title: "Easy Admin Dashboard", subtitle: "MANAGEMENT", metric: "Zero", metricText: "Technical Skills Needed", bg: newAdminBg },
                            { title: "Built for Indian Businesses", subtitle: "RELIABILITY", metric: "100%", metricText: "Tailored for India", bg: newIndianBizBg },
                            { title: "100% Local Support", subtitle: "SUPPORT", metric: "24/7", metricText: "Always Available", bg: newLocalSuppBg }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVars}
                                className="sticky top-20 md:top-32 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] w-full h-auto min-h-[250px] flex flex-col md:flex-row bg-[#111116] border border-white/5 rounded-3xl overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500"
                                style={{ top: `calc(4rem + ${i * 1.5}rem)` }}
                            >
                                {/* Left Image */}
                                <div
                                    style={feature.bg ? { backgroundImage: `url('${feature.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : { backgroundColor: '#1a1a24' }}
                                    className="w-full md:w-1/3 min-h-[200px] md:min-h-[250px]"
                                />

                                {/* Right Content */}
                                <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center relative">
                                    <div className="flex justify-between items-center mb-6 text-purple-500 font-bold tracking-widest text-sm md:text-xs">
                                        <span>{String(i + 1).padStart(2, '0')}</span>
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                            {feature.subtitle}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">{feature.title}</h3>

                                    {(feature.metric || feature.metricText) && (
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-auto pt-6 border-t border-white/10">
                                            <span className="text-4xl text-purple-500 font-light">{feature.metric}</span>
                                            <span className="text-gray-400 text-base">{feature.metricText}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section >

            {/* Process Section */}
            < section className="py-2 relative overflow-hidden bg-[#0f0f0f]" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                            <span className="text-purple-500 font-bold tracking-widest text-sm uppercase">The Process</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">How we work</h2>
                    </motion.div>

                    {/* Timeline Container */}
                    <div className="relative max-w-4xl mx-auto">

                        {/* Center Logo/Icon */}
                        <div className="flex justify-center mb-16 relative z-10 w-full">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="w-32 h-32 rounded-full bg-[#111116] border border-white/5 shadow-[0_0_50px_rgba(168,85,247,0.2)] flex items-center justify-center relative md:mx-auto ml-0"
                            >
                                <span className="text-transparent bg-clip-text from-purple-400 to-cyan-400 font-bold text-3xl font-display"><img src="/brand.png" alt="logo" /></span>
                            </motion.div>
                        </div>

                        {/* Vertical Line */}
                        <div className="absolute left-16 md:left-1/2 top-40 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent md:-translate-x-1/2 rounded-full opacity-50 -translate-x-[1px]"></div>

                        {/* Steps */}
                        <div className="space-y-24 md:space-y-32 relative">
                            {[
                                { step: "01", title: "Discover", desc: "We immerse in your business, market and ambition." },
                                { step: "02", title: "Research", desc: "Data, audience and competitor intelligence inform every move." },
                                { step: "03", title: "Design", desc: "Distinctive systems crafted with obsessive detail." },
                                { step: "04", title: "Build", desc: "Engineering that is fast, scalable and resilient." },
                                { step: "05", title: "Optimize", desc: "Continuous iteration toward compounding growth." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >

                                    {/* Spacer for desktop */}
                                    <div className="hidden md:block md:w-1/2"></div>

                                    {/* Center Dot */}
                                    <div className="absolute left-16 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] md:-translate-x-1/2 mt-2 md:mt-0 z-10 border-2 border-[#0f0f0f] -translate-x-[7px]"></div>

                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 pl-28 md:pl-0 pt-1 md:pt-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                                        <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <span className="text-purple-500 font-bold tracking-widest text-xs uppercase">Step {item.step}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">{item.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Powerful E-Commerce Section */}
            < section className="bg-black relative overflow-hidden border-t border-white/5 py-0" >
                {/* Header */}
                < div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-16 relative" >
                    <div className="md:absolute left-4 sm:left-6 lg:left-12 top-24 flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-0">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase">Limited Time Offer</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight w-full text-center">Powerful E-Commerce</h2>
                </div >

                {/* Split Layout Container */}
                < div className="flex flex-col lg:flex-row w-full border-t border-white/5" >

                    {/* Left Side (Offer) */}
                    < div className="w-full lg:w-1/2 bg-[#050505] p-10 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative" >
                        <div className="max-w-md mx-auto w-full">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-10 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                <span className="text-purple-400 font-bold text-xs uppercase tracking-wider">Active Offer</span>
                            </div>

                            <p className="text-gray-400 font-medium mb-2 uppercase tracking-wide text-sm">Complete Setup & Launch</p>
                            <div className="flex items-end gap-2 mb-10">
                                <span className="text-8xl md:text-[8rem] font-bold text-purple-500 tracking-tighter leading-none">₹20<span className="text-6xl">k</span></span>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                Everything you need to start selling online today, packed into one powerful package.
                            </p>

                            <Link to="/contact" className="group flex items-center justify-center gap-3 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                                CLAIM OFFER NOW
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <p className="text-gray-600 font-mono text-xs mt-6 text-center">
                                *Server and Domain handled separately.
                            </p>
                        </div>
                    </div >

                    {/* Right Side (Features) */}
                    < div className="w-full lg:w-1/2 bg-[#0a0a0c] p-10 lg:p-24" >
                        <div className="max-w-2xl mx-auto w-full">

                            {/* Why Choose Section */}
                            <h4 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-10">Why Choose This Package</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                                {[
                                    { num: "01", title: "Razorpay Integration", desc: "Seamless, secure transactions." },
                                    { num: "02", title: "WhatsApp Ordering", desc: "Direct customer communication." },
                                    { num: "03", title: "Fast User Experience", desc: "Optimized for speed & conversion." },
                                    { num: "04", title: "Easy-to-use Admin Panel", desc: "Manage everything effortlessly." },
                                ].map((feat, i) => (
                                    <div key={i} className="bg-[#111116] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold mb-4">{feat.num}</div>
                                        <h5 className="text-white font-bold mb-2">{feat.title}</h5>
                                        <p className="text-gray-500 text-sm">{feat.desc}</p>
                                    </div>
                                ))}
                                <div className="sm:col-span-2 bg-[#111116] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-purple-500/30 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">05</div>
                                    <div>
                                        <h5 className="text-white font-bold mb-2">Built for Indian Businesses</h5>
                                        <p className="text-gray-500 text-sm">Tailored specifically to local market needs.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Inclusions */}
                            <h4 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-8">Technical Inclusions</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "Customer Google Login", "Admin Panel",
                                    "Custom Coupon Codes", "Banner Management",
                                    "Invoice Download", "Razorpay Payment Gateway",
                                    "Secure Infrastructure", "Mobile Responsive Design"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                                        <span className="text-gray-300 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                </div >
            </section >

            {/* Flash Ribbon Marquee */}
            < div className="w-full bg-purple-600 py-6 overflow-hidden flex items-center relative z-20" >
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
                    className="flex whitespace-nowrap w-max"
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-white font-bold text-xl md:text-2xl tracking-widest uppercase px-4 inline-flex items-center gap-6">
                            Powerful e-commerce <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            tailored digital platforms <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            premium design for modern businesses <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            We Build. You Grow. <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            web development <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            e-commerce <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            custom software <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            logo design <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            The Webgenixx <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                            digital growth <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] xl:mr-6 mr-4"></span>
                        </span>
                    ))}
                </motion.div>
            </div >

            {/* CTA Section */}
            < section className="bg-gradient-to-b from-[#0f0f0f] to-[#050508] py-2 border-t border-white/5 overflow-hidden" >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto px-4 text-center"
                >
                    <p className="text-xl text-gray-400 mb-10">Join the innovative brands that trust Webgenixx with their digital future.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]"
                    >
                        <a href="get-started">Start Your Project</a>
                    </motion.button>
                </motion.div>
            </section >
        </div >
    );
}
