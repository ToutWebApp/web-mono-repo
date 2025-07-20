// apps/dashboard/app/page.tsx
"use client";

import { Sidebar } from "../components/home/Sidebar";
import { TopStats } from "../components/home/TopStats";
import { ContentList, ContentItem } from "../components/home/ContentList";
import { TimeTillDelivery } from "../components/home/TimeTillDelivery";
import {
  Notifications,
  NotificationItem,
} from "../components/home/Notifications";
import { OrderDetailsDrawer } from "../components/home/OrderDetailsDrawer";
import { useState } from "react";

export default function DashboardPage() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: "1",
      title: "Content Calendar",
      subtitle:
        "Monthly Content Calendar • Facebook Posting Schedule • 30 reels ideas",
      purchaseDate: "APR 12, 2025",
      revisionsLeft: 3,
      status: "Delivered",
    },
    {
      id: "2",
      title: "Content Strategy Revamping",
      subtitle: "Website Audit • Competitor Analysis",
      purchaseDate: "MAY 5, 2025",
      revisionsLeft: 2,
      status: "Delivered",
    },
    {
      id: "3",
      title: "UI/UX Website Assessment",
      subtitle: "Prototype Review • Interaction Flows",
      purchaseDate: "JUN 4, 2025",
      revisionsLeft: 1,
      status: "Pending",
    },
  ];

  const notifications: NotificationItem[] = [
    {
      id: "n1",
      title: "Social Media Marketing Campaign",
      date: "April 12",
      body: "You’ve purchased the service. Time to brief your team!",
    },
    {
      id: "n2",
      title: "Content Strategy Revamping",
      date: "May 5",
      body: "You’ve purchased the service. Time to brief your team!",
    },
    {
      id: "n3",
      title: "Content Calendar",
      date: "March 1",
      body: "You’ve purchased the service. Time to brief your team!",
    },
    {
      id: "n4",
      title: "UI/UX Website Assessment",
      date: "June 4",
      body: "You’ve purchased the service. Time to brief your team!",
    },
  ];

  const steps = [
    {
      label: "Briefing",
      description: "The client submitted briefing documents.",
      timestamp: "APR 12, 2025 · 18:30:32",
    },
    {
      label: "Assigning/Download",
      description:
        "You’ve assigned/downloaded the project to concerned freelancers.",
      timestamp: "APR 12, 2025 · 19:12:00",
    },
    {
      label: "Fulfill Request",
      description: "You’ve created new branch fix - notifications from master.",
    },
  ];

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />

      <main className='flex-1 bg-gray-50 py-8 overflow-y-auto'>
        <div className='max-w-[1400px] mx-auto px-6'>
          <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

          <TopStats />

          {/* Stack on small, switch to row at lg */}
          <div className='flex flex-col lg:flex-row gap-6 mt-8'>
            {/* Left pane grows to fill */}
            <div className='w-full lg:flex-1 space-y-4'>
              <ContentList
                items={contentItems}
                onItemClick={(item) => setSelectedItem(item)}
              />

              <OrderDetailsDrawer
                open={!!selectedItem}
                onOpenChange={(open) => {
                  if (!open) setSelectedItem(null);
                }}
                title={selectedItem?.title || ""}
                steps={steps}
              />
            </div>

            {/* Right pane fixed width on lg */}
            {/* <div className="w-full lg:w-[360px] flex flex-col gap-6">
              <TimeTillDelivery hours={15} minutes={40} />
              <Notifications list={notifications} />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
