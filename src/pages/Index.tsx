import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, LayoutDashboard, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center">
              <Building2 className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            RealEstate Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive real estate management platform with role-based dashboards for administrators, agents, and property seekers.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
              <Link to="/dashboard">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Access Dashboards
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/properties">
                <Home className="mr-2 h-5 w-5" />
                Browse Properties
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <CardTitle>Admin Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete platform oversight with user management, analytics, and system controls.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/admin">View Admin Dashboard</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle>Agent Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Manage listings, track clients, monitor commissions, and grow your business.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/agent">View Agent Dashboard</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-success" />
                </div>
              </div>
              <CardTitle>User Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Search properties, save favorites, track applications, and communicate with agents.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/user">View User Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Ready for Integration</h3>
              <p className="text-muted-foreground">
                These dashboards are designed with empty data states and are ready to be connected to Supabase for authentication, data storage, and real-time functionality. Perfect for merging with your existing public pages.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
