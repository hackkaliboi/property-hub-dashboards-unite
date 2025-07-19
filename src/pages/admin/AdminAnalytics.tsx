import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AnalyticsCharts } from "@/components/admin/AnalyticsCharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Filter, 
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
  Building2,
  BarChart3
} from "lucide-react";

export default function AdminAnalytics() {
  const kpiData = [
    {
      title: "Platform Revenue",
      value: "$0",
      change: "+0%",
      positive: true,
      icon: DollarSign,
      description: "Total platform revenue"
    },
    {
      title: "User Growth Rate",
      value: "0%",
      change: "+0%",
      positive: true,
      icon: Users,
      description: "Month-over-month growth"
    },
    {
      title: "Property Listings",
      value: "0",
      change: "+0",
      positive: true,
      icon: Building2,
      description: "Total active listings"
    },
    {
      title: "Conversion Rate",
      value: "0%",
      change: "+0%",
      positive: true,
      icon: TrendingUp,
      description: "Visitor to lead conversion"
    }
  ];

  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-primary" />
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">
              Comprehensive insights into platform performance
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi) => (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  <Badge 
                    variant={kpi.positive ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {kpi.change}
                  </Badge>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {kpi.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <AnalyticsCharts />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Building2 className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p className="font-medium">No location data yet</p>
                <p className="text-sm">
                  Location performance will appear when properties are listed
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agent Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Users className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p className="font-medium">No agent data yet</p>
                <p className="text-sm">
                  Agent performance metrics will show when agents start selling
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}