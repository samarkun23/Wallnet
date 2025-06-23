import {Bell, User, Search} from 'lucide-react'
export default function Navbar() {
    return (
        <nav className="w-full h-16 px-6 flex items-center justify-between bg-black/30 backdrop-blur border-b border-white/10 text-white">
            {/* Logo */}
            <div className="font-bold text-xl tracking-wide cursor-pointer hover:text-blue-100">WellNet</div>

            {/* Right Icons */}
            <div className="flex items-center gap-10">
                <Search className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                <Bell className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
                <User className="w-6 h-6 rounded-full bg-white/10 p-1 hover:bg-white/20 cursor-pointer" />
            </div>
        </nav>
    )
}