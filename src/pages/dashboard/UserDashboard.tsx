import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Search, 
  Calendar,
  MessageSquare,
  FileText,
  MapPin,
  Home,
  Bell,
  Plus
} from "lucide-react";

export default function UserDashboard() {
  const stats = [
    {
      title: "Saved Properties",
      value: "0",
      icon: Heart,
      description: "No properties saved yet"
    },
    {
      title: "Recent Searches",
      value: "0", 
      icon: Search,
      description: "No searches performed yet"
    },
    {
      title: "Scheduled Viewings",
      value: "0",
      icon: Calendar,
      description: "No viewings scheduled"
    },
    {
      title: "Applications Submitted",
      value: "0",
      icon: FileText,
      description: "No applications submitted yet"
    },
    {
      title: "Messages",
      value: "0",
      icon: MessageSquare,
      description: "No new messages"
    },
    {
      title: "Notifications",
      value: "0",
      icon: Bell,
      description: "No new notifications"
    }
  ];

  return (
    <DashboardLayout userRole="user">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <p className="text-muted-foreground">
              Find your perfect home and track your property journey
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary-glow">
            <Search className="mr-2 h-4 w-4" />
            Search Properties
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
            <CardHeader>
              <CardTitle>Saved Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Search className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p className="font-medium">No saved searches yet</p>
                <p className="text-sm">
                  Save your property searches to get notified of new matches
                </p>
                <Button variant="outline" className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Search Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Home className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p className="font-medium">No recommendations yet</p>
                <p className="text-sm">
                  Complete your profile and save some properties to get personalized recommendations
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p className="font-medium">No applications submitted</p>
                <p className="text-sm">
                  Your rental and purchase applications will appear here
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
              <Search className="mr-2 h-4 w-4" />
              Browse Properties
            </Button>
            <Button variant="outline" className="justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              Area Guide
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Book Viewing
            </Button>
            <Button variant="outline" className="justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Agent
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}