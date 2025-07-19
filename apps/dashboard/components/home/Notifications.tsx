export interface NotificationItem {
  id: string;
  title: string;
  date: string;
  body: string;
}

export function Notifications({ list }: { list: NotificationItem[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h4 className="font-semibold mb-4">Notifications</h4>
      <ul className="space-y-4">
        {list.map((n) => (
          <li key={n.id} className="flex justify-between">
            <div>
              <p className="font-medium">{n.title}</p>
              <p className="text-sm text-gray-500 leading-snug mt-1">{n.body}</p>
            </div>
            <p className="text-sm text-gray-400">{n.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
