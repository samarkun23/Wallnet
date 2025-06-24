import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    CalendarCheck,
    Settings,
    LogOut,
    PersonStanding
} from "lucide-react";

export default function Sidebar() {
    const location = useLocation();

    const navItems = [
        { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
        { label: "Appointments", icon: CalendarCheck, path: "/appointments" },
        { label: "Community", icon: PersonStanding, path: "/community"},
        { label: "Settings", icon: Settings, path: "/settings" },
    ];

    return (
        <aside className="h-screen w-64 bg-black/30 backdrop-blur-md border-r border-white/10 flex flex-col justify-between px-4 py-6">
            {/* Top: Logo */}
            <div className="text-white text-2xl font-bold mb-10 px-2">WellNet</div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
                {navItems.map(({ label, icon: Icon, path }) => (
                    <Link
                        key={label}
                        to={path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${location.pathname === path
                                ? "bg-white/20 text-white"
                                : "text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        <Icon size={20} />
                        <span className="text-sm font-medium">{label}</span>
                    </Link>
                ))}
            </nav>

            {/* Bottom: Logout */}
            <div className="mt-auto px-2">
                <button className="flex items-center gap-2 text-red-400 hover:text-red-500 text-sm font-medium">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
