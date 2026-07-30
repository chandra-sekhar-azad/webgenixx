import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiBase}/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();

            if (data.success) {
                // Store auth state if needed (e.g. localStorage.setItem('adminToken', data.token))
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Server error. Please check backend.');
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 selection:bg-purple-500/30 font-sans">
            <div className="w-full max-w-md bg-[#0a0a0c] p-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-purple-600/10 rounded-full blur-[50px] pointer-events-none"></div>

                <div className="text-center mb-10 relative z-10">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        <Lock className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-widest font-display mb-2">ADMIN PORTAL</h2>
                    <p className="text-gray-500 text-sm">Sign in to manage messages & queries</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-xs font-bold text-center uppercase tracking-wider">
                            {error}
                        </div>
                    )}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Admin Email</label>
                        <div className="relative">
                            <Mail className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#111116] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-purple-500 hover:border-white/20 focus:outline-none transition-colors"
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
                        <div className="relative">
                            <Lock className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#111116] border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white focus:border-purple-500 hover:border-white/20 focus:outline-none transition-colors"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors focus:outline-none"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest text-xs mt-8"
                    >
                        Secure Login <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="text-center mt-6">
                        <button type="button" onClick={() => navigate('/')} className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider uppercase font-medium">
                            &larr; Back to Main Site
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
