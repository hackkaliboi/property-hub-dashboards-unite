import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  FileText,
  BarChart3
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Properties",
      value: "0",
      icon: Building2,
      description: "No properties listed yet"
    },
    {
      title: "Total Users",
      value: "0", 
      icon: Users,
      description: "No users registered yet"
    },
    {
      title: "Active Agents",
      value: "0",
      icon: UserCheck,
      description: "No agents registered yet"
    },
    {
      title: "Total Revenue",
      value: "$0",
      icon: DollarSign,
      description: "No transactions completed yet"
    },
    {
      title: "Monthly Growth",
      value: "0%",
      icon: TrendingUp,
      description: "Waiting for first month data"
    },
    {
      title: "Pending Approvals",
      value: "0",
      icon: FileText,
      description: "No pending items"
    }
  ];

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your real estate platform control center
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <RecentActivity 
            activities={[]}
            title="System Activity"
          />
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base font-medium">
                Platform Overview
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Properties Listed</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-0"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Active Users</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full w-0"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Completed Transactions</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full w-0"></div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground text-center">
                  Data will populate once users start interacting with the platform
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}