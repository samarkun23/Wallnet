import GraphCard from "./GraphCard";
import QuoteCard from "./QuoteCard";
import ReminderCard from "./ReminderCard";
import StatCard from "./StatCard";

export default function SidebarRight() {
    return (
        <aside className="hidden lg:block w-80 p-4 space-y-4">
            <StatCard />
            <GraphCard />
            <QuoteCard />
            <ReminderCard />
        </aside>
    )
}