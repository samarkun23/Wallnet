export default function Navbar() {
    return (
        <nav className="w-full h-16 px-6 flex items-center justify-between bg-black/30 backdrop-blur border-b border-white/10 text-white">
            {/* Logo */}
            <div className="font-bold text-xl tracking-wide">WellNet</div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
                <button className="btn btn-ghost btn-sm text-white">🔔</button>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                </div>
            </div>
        </nav>
    )
}