import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";
import { useUser } from "@repo/auth";

export function Sidebar() {
    const { user, loading, logout } = useUser();
  return (
    <aside className="w-[260px] h-full bg-white border-r px-6 pt-6 relative">
      <div className="flex items-center mb-8 space-x-3">
        <div className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
          AV
        </div>
        <div>
          <p className="font-medium">{user?.firstName}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
      </div>

      <Button className="w-full mb-6 bg-orange-500 hover:bg-orange-600 text-white">
        + New Service
      </Button>

      <nav className="space-y-2 text-gray-700">
        <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">
          Dashboard
        </Link>
        <Link href="/resources" className="block px-3 py-2 rounded hover:bg-gray-100">
          Resources
        </Link>
        <Link href="/notifications" className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100">
          Notifications
          <span className="h-2 w-2 bg-red-500 rounded-full" />
        </Link>
        <Link href="/api/auth/signout" className="block px-3 py-2 rounded hover:bg-gray-100">
          Log out
        </Link>
      </nav>

      <div className="absolute bottom-6 left-6">
        <img src="/logo.svg" alt="Ipsum" className="h-8" />
      </div>
    </aside>
  );
}