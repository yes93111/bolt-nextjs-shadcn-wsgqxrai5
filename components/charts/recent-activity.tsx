import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityItem {
  name: string;
  meetings: number;
  agents: number;
}

interface RecentActivityProps {
  data: ActivityItem[];
}

export function RecentActivity({ data }: RecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.meetings} meetings scheduled</p>
              </div>
              <div className="text-sm text-gray-500">
                {item.agents} active agents
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}