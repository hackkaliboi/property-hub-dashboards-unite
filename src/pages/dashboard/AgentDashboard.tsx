import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  DollarSign, 
  Calendar,
  MessageSquare,
  Eye,
  Plus,
  TrendingUp
} from "lucide-react";

export default function AgentDashboard() {
  const stats = [
    {
      title: "My Listings",
      value: "0",
      icon: Building2,
      description: "No properties listed yet"
    },
    {
      title: "Active Clients",
      value: "0", 
      icon: Users,
      description: "No clients assigned yet"
    },
    {
      title: "This Month's Commission",
      value: "$0",
      icon: DollarSign,
      description: "No sales completed this month"
    },
    {
      title: "Property Views",
      value: "0",
      icon: Eye,
      description: "No views on your listings yet"
    },
    {
      title: "Upcoming Appointments",
      value: "0",
      icon: Calendar,
      description: "No scheduled appointments"
    },
    {
      title: "Unread Messages",
      value: "0",
      icon: MessageSquare,
      description: "No new messages"
    }
  ];

  return (
    <DashboardLayout userRole="agent">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Agent Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your listings, clients, and grow your business
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow">
            <Plus className="mr-2 h-4 w-4" />
            Add New Listing
          </Button>
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
            title="Recent Activity"
          />
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base font-medium">
                Performance This Month
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Listings Added</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Client Meetings</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Properties Sold</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Commission</span>
                  <span className="font-medium">$0</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground text-center">
                  Start adding listings and connecting with clients to see your performance metrics
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <Building2 className="mr-2 h-4 w-4" />
              Add Property
            </Button>
            <Button variant="outline" className="justify-start">
              <Users className="mr-2 h-4 w-4" />
              Add Client
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
            <Button variant="outline" className="justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}