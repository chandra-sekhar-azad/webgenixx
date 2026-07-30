import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
    return (
        <div className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-2"
            >
                <h1 className="text-5xl font-bold mb-6">Services & <span className="text-purple-400">Pricing</span></h1>
            </motion.div>

            <div className="mb-2">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-10 border-b border-white/10 pb-4"
                >
                    Logo & Graphic Design
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 bg-[#050505]">

                    {/* Card 1: Basic */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Basic Package</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹2,000</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>2 Logo Concepts</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>2 Revision Rounds</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>JPG + PNG Files</div></li>
                        </ul>

                        <p className="text-gray-500 text-[10px] italic mb-8 mt-4 invisible">Placeholder</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 2: Standard */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Standard Package</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹3,250</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>3 Logo Concepts</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>4 Revision Rounds</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>JPG + PNG + PDF</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Basic Color Palette</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Font Details</div></li>
                        </ul>

                        <p className="text-gray-500 text-[10px] italic mb-8 mt-4 invisible">Placeholder</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 3: Premium */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Premium Package</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹5,750</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>4 - 5 Logo Concepts</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Unlimited Minor Revisions</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>PDF, PNG, JPG, SVG</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Brand Color Palette</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Font System</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Mini Brand Guide</div></li>
                        </ul>

                        <p className="text-gray-500 text-[10px] italic mb-8 mt-4">Source File: ₹750</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="mb-24">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-10 border-b border-white/10 pb-4"
                >
                    Website Development
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/5 bg-[#050505]">

                    {/* Card 1: Service-Based */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Service-Based Website</h3>
                        <div className="text-lg font-bold text-white mb-8">₹5,000</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Basic UI/UX</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>5 Pages (Home, About, Services, Testimonials, Contact)</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Social Media Integration</div></li>
                        </ul>

                        <p className="text-gray-500 text-[10px] italic mb-8 mt-4">Additional Page: ₹1,000</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 2: Product-Based */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Product-Based Website</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹7,000</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Up to 50 Products</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>WhatsApp Cart</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Basic UI/UX</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>5 Core Pages</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Social Media Integration</div></li>
                        </ul>

                        <p className="text-gray-500 text-[10px] italic mb-8 mt-4">Additional 50 Products: ₹1,000</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 3: Semi E-Commerce */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Semi E-Commerce</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹15,000</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Dynamic Website</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>WhatsApp Integration</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Admin Panel</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Product Management</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Promo Codes</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>5 Core Pages</div></li>
                        </ul>

                        <p className="text-gray-500 text-[10px] italic mb-8 mt-4 invisible">Placeholder</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 4: Full E-Commerce */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Full E-Commerce</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹25,000</div>

                        <ul className="flex flex-col gap-4 mb-4 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Razorpay Payment Gateway</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Admin Panel</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Customer Google Login</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Order Management</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Responsive Design</div></li>
                        </ul>

                        <p className="text-gray-500 text-[9px] italic mb-8 mt-4 leading-tight">Add-ons: Invoice Printing, Custom UI/UX, Delivery Integration, OTP Login, WhatsApp Alerts</p>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 5: Custom Build */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-center items-center text-center border-l border-dashed border-white/10 relative group"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                            <span className="text-gray-300 font-light text-2xl">+</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4">Custom Build</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Frontend or Backend architecture tailored exactly to your needs.
                        </p>
                    </motion.div>

                </div>
            </div>

            <div className="mb-2">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-10 border-b border-white/10 pb-4"
                >
                    3. Website Maintenance
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 bg-[#050505]">

                    {/* Card 1: Care Basic */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Care Basic</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹1,500<span className="text-sm font-normal text-gray-400">/month</span></div>

                        <ul className="flex flex-col gap-4 mb-8 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Monthly Backups</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>2 Content Updates</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Uptime Monitoring</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Security Checks</div></li>
                        </ul>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 2: Care Pro */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Care Pro</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹3,500<span className="text-sm font-normal text-gray-400">/month</span></div>

                        <ul className="flex flex-col gap-4 mb-8 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Weekly Backups</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>8 Content Updates</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Plugin Updates</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Performance Optimization</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Priority Support</div></li>
                        </ul>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>

                    {/* Card 3: Care E-Commerce */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0a0a0c] p-6 lg:p-8 flex flex-col justify-start border border-[#ffffff05] relative group"
                    >
                        <h3 className="text-lg lg:text-xl font-medium text-purple-400 mb-2">Care E-Commerce</h3>
                        <div className="text-lg font-bold text-white mb-8 border-b border-white/5 pb-8">₹6,500<span className="text-sm font-normal text-gray-400">/month</span></div>

                        <ul className="flex flex-col gap-4 mb-8 flex-1 mt-6">
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Daily Backups</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Unlimited Minor Updates</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Payment Gateway Monitoring</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Bug Fixes</div></li>
                            <li className="text-gray-400 text-xs flex gap-2 items-start"><span className="text-gray-500 shrink-0">✓</span> <div>Monthly Reports</div></li>
                        </ul>

                        <button className="w-full py-3 mt-auto border border-purple-500/20 text-purple-400 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                            Select Package &rarr;
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="mb-24">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-10 border-b border-white/10 pb-4"
                >
                    4. Software Development
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0a0c] p-8 lg:p-12 border border-[#ffffff05] relative group flex flex-col"
                >
                    <h3 className="text-2xl font-medium text-purple-400 mb-2">Custom Software Solutions</h3>
                    <div className="text-lg font-bold text-gray-300 mb-8 pb-8 border-b border-white/5">
                        Based on project requirements
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <ul className="flex flex-col gap-6">
                                <li className="text-gray-400 text-sm flex gap-3 items-center"><span className="text-gray-500">✓</span> Web Applications</li>
                                <li className="text-gray-400 text-sm flex gap-3 items-center"><span className="text-gray-500">✓</span> Internal Business Tools</li>
                                <li className="text-gray-400 text-sm flex gap-3 items-center"><span className="text-gray-500">✓</span> SaaS Platforms</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <ul className="flex flex-col gap-6 mb-10">
                                <li className="text-gray-400 text-sm flex gap-3 items-center"><span className="text-gray-500">✓</span> End-to-End Development</li>
                                <li className="text-gray-400 text-sm flex gap-3 items-center"><span className="text-gray-500">✓</span> Ongoing Maintenance</li>
                            </ul>

                            <button className="w-fit py-3 px-8 text-purple-400 font-semibold text-xs border border-purple-500/20 hover:bg-purple-600 hover:text-white transition-colors">
                                Get Quotation &rarr;
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
}
