import { Bed, Footprints } from "lucide-react";


export default function StatCard({ title, value, unit, icon }) {
    // title value unit icon 
    return (
        <div className="card bg-white/10 backdrop-blur border border-white/10 text-white shadow-md">
            <div className="card-body p-3 flex flex-row items-center justify-between">
                <div>
                    <h2 className="card-title text-sm text-gray-300">Running</h2>
                    <p className="text-2xl font-bold">
                        {value} <span className="text-sm font-light">8.9 KM</span>
                    </p>
                </div>
                <div className="text-3xl opacity-60"><Footprints /></div>
            </div>
            <div className="card-body p-4 flex flex-row items-center justify-between">
                <div>
                    <h2 className="card-title text-sm text-gray-300">Sleep </h2>
                    <p className="text-2xl font-bold">
                        {value} <span className="text-sm font-light">8 hours</span>
                    </p>
                </div>
                <div className="text-3xl opacity-60"><Bed /></div>
            </div>
        </div>
        
    );
}