import Aurora from "../component/Aurora-background/Aurora";
import Sidebar from "../component/LeftSidePanel/LeftSidebar";
import Navbar from "../component/Navbar";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-black relative">
            <Aurora
                colorStops={["#120255", "#CFCFCF", "#120255"]}
                blend={1}
                amplitude={1.0}
                speed={1}
            />
            <div className="relative flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Right Side Content */}
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="p-6">
                        {/* Dashboard Components go here */}
                        {/* <StatCards /> */}
                        {/* <Graph /> */}
                        {/* <QuoteCard /> */}
                    </main>
                </div>
            </div>
        </div>
    );
}