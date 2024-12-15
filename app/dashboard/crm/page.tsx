'use client';

import { ActivityChart } from "@/components/charts/activity-chart";
import { RecentActivity } from "@/components/charts/recent-activity";

const activityData = [
  { name: 'Jan', meetings: 4, agents: 2 },
  { name: 'Feb', meetings: 3, agents: 3 },
  { name: 'Mar', meetings: 6, agents: 4 },
  { name: 'Apr', meetings: 8, agents: 4 },
  { name: 'May', meetings: 7, agents: 5 },
];

export default function CRMPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">CRM Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityChart data={activityData} />
        <RecentActivity data={activityData} />
      </div>
    </div>
  );
}