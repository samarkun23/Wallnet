import Aurora from "../component/Aurora-background/Aurora";
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
            <Navbar />
        </div>
    )
}