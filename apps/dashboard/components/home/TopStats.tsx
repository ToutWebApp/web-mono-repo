import { RefreshCw, Grid } from "lucide-react";

interface Stat {
  label: string;
  value: number;
  icon: React.ReactNode;
}

function StatCard({ label, value, icon }: Stat) {
  const isPriority = label === "Open Orders";
  const bgColor = isPriority ? "bg-[#F1F3F5]" : "bg-white";

  return (
    <div className={`${bgColor} flex-1 rounded-xl p-4 flex items-center justify-between shadow-sm`}>
      <div>
        <p className="text-xs text-gray-500 uppercase">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value.toLocaleString()}</p>
      </div>
      <button>
        {icon}
      </button>
    </div>
  );
}

export function TopStats() {
  const stats: Stat[] = [
    // { label: "Priority", value: 13456, icon: <Grid /> },
    { label: "Open Orders", value: 4145, icon: <RefreshCw /> },
    { label: "Closed Orders", value: 745, icon: <RefreshCw /> },
    { label: "All Orders", value: 188, icon: <RefreshCw /> },
  ];

  return (
    <div className="flex gap-4 mb-8">
      {stats.map((s) => (
        <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} />
      ))}
    </div>
  );
}