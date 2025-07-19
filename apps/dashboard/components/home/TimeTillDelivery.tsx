export function TimeTillDelivery({ hours, minutes }: { hours: number; minutes: number }) {
  const total = hours * 60 + minutes;
  // assuming max total is 24h = 1440 min, but design shows partial bar
  const percent = Math.min(100, (total / (24 * 60)) * 100);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h4 className="font-semibold mb-4">Time till delivery</h4>
      <div className="flex items-baseline justify-center space-x-2">
        <div className="text-center">
          <p className="text-4xl font-bold">{hours}</p>
          <p className="text-sm text-gray-500">Hours</p>
        </div>
        <p className="text-4xl font-bold">:</p>
        <div className="text-center">
          <p className="text-4xl font-bold">{minutes.toString().padStart(2, '0')}</p>
          <p className="text-sm text-gray-500">Minutes</p>
        </div>
      </div>
      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-teal-600" style={{ width: `${percent}%` }} />
      </div>
    </div>)
}
