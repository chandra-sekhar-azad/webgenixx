import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GetStarted() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', msg: '' });

        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiBase}/queries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const json = await res.json();

            if (json.success) {
                setStatus({ type: 'success', msg: 'Message sent successfully! We will get back to you soon.' });
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: json.error || 'Failed to send message.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Network error. Please try again later.' });
        }
        setIsSubmitting(false);
    };
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col justify-center"
                >
                    <p className="text-cyan-400 font-semibold tracking-wider text-sm mb-4 uppercase">Say hello</p>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Let's Start <br /><span className="text-purple-400">Something Great</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-16 max-w-md">
                        Tell us where you want to go. We'll show you how to get there — faster.
                    </p>

                    <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                        <div>
                            <h4 className="text-white font-bold mb-2">Location</h4>
                            <p className="text-gray-400 text-sm">Remote-first · India</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Email</h4>
                            <p className="text-gray-400 text-sm">contact@thewebgenixx.in</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Phone</h4>
                            <p className="text-gray-400 text-sm">+91 88975 36435</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Hours</h4>
                            <p className="text-gray-400 text-sm">Mon–Fri · 10–19 IST</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-[#0a0a0c] p-8 lg:p-12 border border-white/5 rounded-2xl relative"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        {status.msg && (
                            <div className={`p-4 rounded-lg text-sm font-bold border ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                {status.msg}
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                placeholder="…"
                                className="bg-[#111116] border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                placeholder="…"
                                className="bg-[#111116] border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                placeholder="…"
                                className="bg-[#111116] border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project details</label>
                            <textarea
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                placeholder="Tell us about it…"
                                className="bg-[#111116] border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? 'Sending...' : 'Send message →'}
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
