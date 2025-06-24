import { Hospital, PersonStanding } from "lucide-react";

export default function ReminderCard({value}) {
    return (
        <div className="card bg-white/10 backdrop-blur border border-white/10 text-white shadow-md">
            <div className="card-body p-3 flex flex-row items-center justify-between">
                <div>
                    <h2 className="card-title text-sm text-gray-300">Upcoming Checkup: </h2>
                    <p className="text-2xl font-bold">
                        {value} <span className="text-sm font-light">7 pm</span> { /* time */} 
                    </p>
                </div>
                <div className="text-3xl opacity-60"><Hospital /></div>
            </div>
            <div className="card-body p-4 flex flex-row items-center justify-between">
                <div>
                    <h2 className="card-title text-sm text-gray-300">Meditions at</h2>
                    <p className="text-2xl font-bold">
                        {value} <span className="text-sm font-light">8 pm</span>
                    </p>
                </div>
                <div className="text-3xl opacity-60"><PersonStanding /></div>
            </div>
        </div>
    )
}