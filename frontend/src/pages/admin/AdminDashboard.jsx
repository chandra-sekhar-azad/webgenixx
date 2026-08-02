import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Mail, Bell, LogOut, CheckCircle, Clock, Search, MoreVertical, Trash2, Check, Send, Key, Eye, EyeOff } from 'lucide-react';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('inquiries');
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [passwordForm, setPasswordForm] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState({ old: false, new: false, confirm: false });
    const [passwordMsg, setPasswordMsg] = useState({ type: '', text: '' });
    const dropdownRef = useRef(null);
    const notifRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        fetchQueries();
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
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

    const handleUpdateStatus = async (id, status) => {
        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiBase}/queries/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            if (res.ok) {
                setQueries(prevQueries => prevQueries.map(q => q._id === id ? { ...q, status } : q));
                setActiveDropdown(null);
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this inquiry?")) return;
        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiBase}/queries/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setQueries(prevQueries => prevQueries.filter(q => q._id !== id));
                setActiveDropdown(null);
            }
        } catch (error) {
            console.error('Failed to delete query:', error);
        }
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setPasswordMsg({ type: '', text: '' });

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            return setPasswordMsg({ type: 'error', text: 'New passwords do not match' });
        }

        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiBase}/admin/change-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: 'admin@thewebgenixx.in',
                    oldPassword: passwordForm.oldPassword,
                    newPassword: passwordForm.newPassword
                })
            });
            const data = await res.json();

            if (res.ok) {
                setPasswordMsg({ type: 'success', text: 'Password updated successfully!' });
                setTimeout(() => {
                    setShowChangePassword(false);
                    setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
                    setPasswordMsg({ type: '', text: '' });
                }, 2000);
            } else {
                setPasswordMsg({ type: 'error', text: data.message || 'Failed to update password' });
            }
        } catch (error) {
            setPasswordMsg({ type: 'error', text: 'Server error occurred' });
        }
    };

    const handleExportCSV = () => {
        const headers = ["Name,Email,Company,Message,Status,Date Received"];
        const rows = filteredQueries.map(q =>
            `"${q.name}","${q.email}","${q.company || ''}","${q.message.replace(/"/g, '""')}","${q.status}","${new Date(q.createdAt).toLocaleDateString()}"`
        );
        const csvContent = headers.concat(rows).join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "inquiries_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredQueries = queries.filter(q => {
        const matchesSearch = q.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (q.company && q.company.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesStatus = filterStatus === "All" || q.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row font-sans selection:bg-purple-500/30">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-[#0a0a0c] border-r border-white/5 flex flex-col relative z-20">
                <div className="p-6 h-20 border-b border-white/5 flex items-center justify-center md:justify-start">
                    <h2 className="text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Webgenixx Admin</h2>
                </div>

                <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4 px-2 mt-4">Menu</p>
                    <button
                        onClick={() => setActiveTab('inquiries')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${activeTab === 'inquiries' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                    >
                        <Mail className="w-5 h-5" /> Inquiries
                    </button>
                    <button
                        onClick={() => setActiveTab('accounts')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${activeTab === 'accounts' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                    >
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
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 lg:px-10 bg-[#0a0a0c]/80 backdrop-blur-xl relative z-40">
                    <h1 className="text-xl font-bold tracking-wide">Messages & Queries</h1>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex relative">
                            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search queries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-[#111116] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:border-purple-500 focus:outline-none w-64 transition-all"
                            />
                        </div>
                        <div className="relative" ref={notifRef}>
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="relative p-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <Bell className="w-5 h-5" />
                                {queries.filter(q => q.status === 'New').length > 0 && (
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full border border-[#0a0a0c]"></span>
                                )}
                            </button>
                            {showNotifications && (
                                <div className="absolute top-full right-0 mt-4 w-72 bg-[#111116] border border-white/10 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-white/5">
                                        <p className="text-sm font-bold text-white">Notifications</p>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {queries.filter(q => q.status === 'New').length === 0 ? (
                                            <p className="p-4 text-xs text-gray-500 text-center">No new notifications</p>
                                        ) : (
                                            queries.filter(q => q.status === 'New').map(q => (
                                                <div key={q._id} className="p-4 hover:bg-white/5 border-b border-white/5 transition-colors cursor-pointer" onClick={() => { setShowNotifications(false); setActiveTab('inquiries'); }}>
                                                    <p className="text-sm font-bold text-gray-300">{q.name}</p>
                                                    <p className="text-xs text-gray-500 line-clamp-1">{q.message}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setShowProfile(!showProfile)}
                                className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 p-[2px] shadow-[0_0_15px_rgba(168,85,247,0.3)] focus:outline-none"
                            >
                                <div className="w-full h-full bg-[#111116] rounded-full border-2 border-[#0a0a0c] flex items-center justify-center text-xs font-bold text-white">
                                    AD
                                </div>
                            </button>
                            {showProfile && (
                                <div className="absolute top-full right-0 mt-4 w-48 bg-[#111116] border border-white/10 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-white/5">
                                        <p className="text-sm font-bold text-white">Administrator</p>
                                        <p className="text-xs text-gray-500">admin@thewebgenixx.in</p>
                                    </div>
                                    <button
                                        onClick={() => { setShowProfile(false); setShowChangePassword(true); }}
                                        className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2"
                                    >
                                        <Key className="w-4 h-4" /> Change Password
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors flex items-center gap-2"
                                    >
                                        <LogOut className="w-4 h-4" /> Secure Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {activeTab === 'inquiries' ? (
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
                                <div className="flex gap-2 relative">
                                    <button
                                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                                        className="px-4 py-2 bg-[#111116] border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-colors uppercase tracking-wider"
                                    >
                                        Filter: {filterStatus}
                                    </button>
                                    {isFilterOpen && (
                                        <div className="absolute top-10 right-28 w-32 bg-[#111116] border border-white/10 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
                                            {['All', 'New', 'Replied', 'Resolved'].map(status => (
                                                <button
                                                    key={status}
                                                    onClick={() => { setFilterStatus(status); setIsFilterOpen(false); }}
                                                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                                                >
                                                    {status}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <button
                                        onClick={handleExportCSV}
                                        className="px-4 py-2 bg-[#111116] border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-colors uppercase tracking-wider"
                                    >
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
                                        ) : filteredQueries.length === 0 ? (
                                            <tr><td colSpan="5" className="text-center py-6 text-gray-500">No queries found matching your criteria.</td></tr>
                                        ) : (
                                            filteredQueries.map((q) => (
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
                                                    <td className="px-6 py-5 text-right w-12 relative">
                                                        <button
                                                            onClick={() => setActiveDropdown(activeDropdown === q._id ? null : q._id)}
                                                            className="p-2 text-gray-500 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                                                        >
                                                            <MoreVertical className="w-4 h-4" />
                                                        </button>
                                                        {activeDropdown === q._id && (
                                                            <div ref={dropdownRef} onMouseDown={(e) => e.stopPropagation()} className="absolute right-8 top-10 w-48 bg-[#111116] border border-white/10 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
                                                                <button
                                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleUpdateStatus(q._id, 'Replied'); }}
                                                                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-cyan-400 transition-colors flex items-center gap-2"
                                                                >
                                                                    <Send className="w-4 h-4" /> Mark as Replied
                                                                </button>
                                                                <button
                                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleUpdateStatus(q._id, 'Resolved'); }}
                                                                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-purple-400 transition-colors flex items-center gap-2"
                                                                >
                                                                    <Check className="w-4 h-4" /> Mark as Resolved
                                                                </button>
                                                                <div className="h-px bg-white/10 my-1"></div>
                                                                <button
                                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDelete(q._id); }}
                                                                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors flex items-center gap-2"
                                                                >
                                                                    <Trash2 className="w-4 h-4" /> Delete Inquiry
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            )))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                ) : (
                    <main className="flex-1 flex flex-col items-center justify-center p-4 lg:p-10 relative z-10">
                        <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl mb-6 flex items-center justify-center shadow-2xl text-gray-400">
                            <Users className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Accounts & CRM</h2>
                        <p className="text-gray-400 max-w-sm text-center mx-auto mb-8">
                            A centralized place to manage all your leads, converted clients, and their project information is coming soon.
                        </p>
                        <button className="px-6 py-3 bg-purple-500/10 text-purple-400 font-bold border border-purple-500/30 rounded-xl hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                            Notify Me When Live
                        </button>
                    </main>
                )
                }
            </div >

            {/* Change Password Modal */}
            {showChangePassword && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl w-full max-w-md p-6 lg:p-8 relative">
                        <h3 className="text-xl font-bold text-white mb-6">Change Password</h3>

                        {passwordMsg.text && (
                            <div className={`mb-6 p-3 rounded-lg text-xs font-bold text-center uppercase tracking-wider ${passwordMsg.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'}`}>
                                {passwordMsg.text}
                            </div>
                        )}

                        <form onSubmit={handleChangePassword} className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Current Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.old ? "text" : "password"}
                                        required
                                        value={passwordForm.oldPassword}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                                        className="w-full bg-[#111116] border border-white/10 rounded-xl py-3 px-4 pr-12 text-white focus:border-purple-500 hover:border-white/20 focus:outline-none transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword({ ...showPassword, old: !showPassword.old })}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
                                    >
                                        {showPassword.old ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.new ? "text" : "password"}
                                        required
                                        value={passwordForm.newPassword}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                                        className="w-full bg-[#111116] border border-white/10 rounded-xl py-3 px-4 pr-12 text-white focus:border-purple-500 hover:border-white/20 focus:outline-none transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
                                    >
                                        {showPassword.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Confirm New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.confirm ? "text" : "password"}
                                        required
                                        value={passwordForm.confirmPassword}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                                        className="w-full bg-[#111116] border border-white/10 rounded-xl py-3 px-4 pr-12 text-white focus:border-purple-500 hover:border-white/20 focus:outline-none transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
                                    >
                                        {showPassword.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => setShowChangePassword(false)} className="flex-1 py-3 border border-white/10 rounded-xl text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider">
                                    Cancel
                                </button>
                                <button type="submit" className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-xs font-bold text-white transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(147,51,234,0.2)]">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
