import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', value: 6 },
  { day: 'Tue', value: 7.5 },
  { day: 'Wed', value: 8.2 },
  { day: 'Thu', value: 5.8 },
  { day: 'Fri', value: 7 },
  { day: 'Sat', value: 6.5 },
  { day: 'Sun', value: 8.1 }
];

export default function GraphCard() {
  return (
    <div className="card bg-white/10 backdrop-blur border border-white/10 text-white shadow-md p-4">
      <h2 className="text-md font-semibold mb-2 text-gray-300">Sleep Trend</h2>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: 'white' }}
            labelStyle={{ color: 'white' }}
          />
          <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
