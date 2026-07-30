import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Mail, Bell, LogOut, CheckCircle, Clock, Search, MoreVertical } from 'lucide-react';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchQueries();
    }, []);

    const fetchQueries = async () => {
        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiBase}/queries`);
            const json = await res.json();
            if (json.success) {
                setQueries(json.data);
            }
        } catch (error) {
            console.error('Failed to fetch queries:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row font-sans selection:bg-purple-500/30">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-[#0a0a0c] border-r border-white/5 flex flex-col relative z-20">
                <div className="p-6 h-20 border-b border-white/5 flex items-center justify-center md:justify-start">
                    <h2 className="text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Webgenixx Admin</h2>
                </div>

                <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4 px-2 mt-4">Menu</p>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 font-medium transition-colors">
                        <Mail className="w-5 h-5" /> Inquiries
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium">
                        <Users className="w-5 h-5" /> Accounts
                    </button>
                </div>

                <div className="p-4 border-t border-white/5">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors font-medium text-sm">
                        <LogOut className="w-5 h-5" /> Secure Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                {/* Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 lg:px-10 bg-[#0a0a0c]/80 backdrop-blur-xl relative z-10">
                    <h1 className="text-xl font-bold tracking-wide">Messages & Queries</h1>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex relative">
                            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search queries..."
                                className="bg-[#111116] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:border-purple-500 focus:outline-none w-64 transition-all"
                            />
                        </div>
                        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full border border-[#0a0a0c]"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 p-[2px] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                            <div className="w-full h-full bg-[#111116] rounded-full border-2 border-[#0a0a0c] flex items-center justify-center text-xs font-bold">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-10 relative z-10">

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-[#0a0a0c] border border-white/5 p-6 rounded-3xl flex items-center justify-between shadow-xl">
                            <div>
                                <p className="text-gray-400 text-[11px] font-bold tracking-widest uppercase mb-1">Total Queries</p>
                                <p className="text-3xl font-bold text-white">{queries.length}</p>
                            </div>
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-300 border border-white/5">
                                <Mail className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="bg-[#0a0a0c] border border-purple-500/20 p-6 rounded-3xl flex items-center justify-between relative overflow-hidden shadow-xl shadow-purple-500/5">
                            <div className="absolute inset-0 bg-purple-500/5"></div>
                            <div className="relative z-10">
                                <p className="text-purple-400 text-[11px] font-bold tracking-widest uppercase mb-1">New Unread</p>
                                <p className="text-3xl font-bold text-white">{queries.filter(q => q.status === 'New').length}</p>
                            </div>
                            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 relative z-10">
                                <Clock className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="bg-[#0a0a0c] border border-white/5 p-6 rounded-3xl flex items-center justify-between shadow-xl">
                            <div>
                                <p className="text-gray-400 text-[11px] font-bold tracking-widest uppercase mb-1">Resolved</p>
                                <p className="text-3xl font-bold text-white">{queries.filter(q => q.status === 'Resolved').length}</p>
                            </div>
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Table Area */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                        <div className="p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#0a0a0c]">
                            <div>
                                <h3 className="font-bold text-xl text-white">Recent Inquiries</h3>
                                <p className="text-sm text-gray-500 mt-1">Manage and respond to potential clients.</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-[#111116] border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-colors uppercase tracking-wider">
                                    Filter
                                </button>
                                <button className="px-4 py-2 bg-[#111116] border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-colors uppercase tracking-wider">
                                    Export CSV
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead>
                                    <tr className="border-b border-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-[#050505]/50">
                                        <th className="px-6 py-5">Sender Info</th>
                                        <th className="px-6 py-5">Message Preview</th>
                                        <th className="px-6 py-5">Date Received</th>
                                        <th className="px-6 py-5">Status</th>
                                        <th className="px-6 py-5"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {loading ? (
                                        <tr><td colSpan="5" className="text-center py-6 text-gray-500">Loading queries...</td></tr>
                                    ) : queries.length === 0 ? (
                                        <tr><td colSpan="5" className="text-center py-6 text-gray-500">No queries found yet.</td></tr>
                                    ) : (
                                        queries.map((q) => (
                                            <tr key={q._id} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0">
                                                            {q.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-white mb-0.5 text-sm">{q.name}</p>
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-xs text-gray-500">{q.email}</p>
                                                                {q.company && (
                                                                    <>
                                                                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                                                        <span className="text-xs text-gray-400">{q.company}</span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <p className="text-sm text-gray-300 truncate max-w-xs">{q.message}</p>
                                                </td>
                                                <td className="px-6 py-5 text-sm text-gray-400 font-medium">
                                                    {new Date(q.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${q.status === 'New' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]' :
                                                        q.status === 'Replied' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
                                                            'bg-white/5 text-gray-400 border-white/10'
                                                        }`}>
                                                        {q.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-right w-12">
                                                    <button className="p-2 text-gray-500 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
