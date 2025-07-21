import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AnalyticsCharts } from "@/components/admin/AnalyticsCharts";
import { UserManagement } from "@/components/admin/UserManagement";
import { PropertyApproval } from "@/components/admin/PropertyApproval";
import { SystemAlerts } from "@/components/admin/SystemAlerts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  FileText,
  BarChart3,
  AlertTriangle,
  Shield,
  Database,
  Activity
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
      title: "System Status",
      value: "Healthy",
      icon: Activity,
      description: "All systems operational"
    }
  ];

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Complete platform management and oversight
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="justify-start sm:justify-center">
              <Database className="mr-2 h-4 w-4" />
              System Status
            </Button>
            <Button size="sm" className="justify-start sm:justify-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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

        <SystemAlerts />

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="analytics" className="text-xs sm:text-sm px-2 sm:px-4">Analytics</TabsTrigger>
            <TabsTrigger value="users" className="text-xs sm:text-sm px-2 sm:px-4">Users</TabsTrigger>
            <TabsTrigger value="properties" className="text-xs sm:text-sm px-2 sm:px-4">Properties</TabsTrigger>
            <TabsTrigger value="activity" className="text-xs sm:text-sm px-2 sm:px-4">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsCharts />
          </TabsContent>
          
          <TabsContent value="users">
            <UserManagement />
          </TabsContent>
          
          <TabsContent value="properties">
            <PropertyApproval />
          </TabsContent>
          
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Platform Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentActivity 
                  activities={[]}
                  title="Recent Platform Activity"
                />
                <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm sm:text-base">User Activity</span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Active sessions today</p>
                  </Card>
                  
                  <Card className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-success" />
                      <span className="font-medium text-sm sm:text-base">Property Views</span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Views today</p>
                  </Card>
                  
                  <Card className="p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="font-medium text-sm sm:text-base">Transactions</span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Completed today</p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}