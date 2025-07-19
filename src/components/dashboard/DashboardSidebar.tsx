import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Users,
  BarChart3,
  Settings,
  FileText,
  Calendar,
  DollarSign,
  MapPin,
  Heart,
  Search,
  MessageSquare,
  Shield,
  UserCheck,
  Database,
} from "lucide-react";

interface DashboardSidebarProps {
  userRole: "admin" | "agent" | "user";
}

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  const getMenuItems = () => {
    const commonItems = [
      { title: "Dashboard", url: `/dashboard/${userRole}`, icon: Home },
      { title: "Properties", url: `/dashboard/${userRole}/properties`, icon: Building2 },
    ];

    switch (userRole) {
      case "admin":
        return [
          ...commonItems,
          { title: "Analytics", url: `/dashboard/admin/analytics`, icon: BarChart3 },
          { title: "Users", url: `/dashboard/admin/users`, icon: Users },
          { title: "Agents", url: `/dashboard/admin/agents`, icon: UserCheck },
          { title: "Transactions", url: `/dashboard/admin/transactions`, icon: DollarSign },
          { title: "Reports", url: `/dashboard/admin/reports`, icon: FileText },
          { title: "System", url: `/dashboard/admin/system`, icon: Database },
          { title: "Settings", url: `/dashboard/admin/settings`, icon: Settings },
        ];

      case "agent":
        return [
          ...commonItems,
          { title: "My Listings", url: `/dashboard/agent/listings`, icon: Building2 },
          { title: "Clients", url: `/dashboard/agent/clients`, icon: Users },
          { title: "Leads", url: `/dashboard/agent/leads`, icon: Search },
          { title: "Calendar", url: `/dashboard/agent/calendar`, icon: Calendar },
          { title: "Messages", url: `/dashboard/agent/messages`, icon: MessageSquare },
          { title: "Commission", url: `/dashboard/agent/commission`, icon: DollarSign },
          { title: "Profile", url: `/dashboard/agent/profile`, icon: Settings },
        ];

      case "user":
        return [
          ...commonItems,
          { title: "Saved Properties", url: `/dashboard/user/saved`, icon: Heart },
          { title: "Search History", url: `/dashboard/user/history`, icon: Search },
          { title: "Appointments", url: `/dashboard/user/appointments`, icon: Calendar },
          { title: "Messages", url: `/dashboard/user/messages`, icon: MessageSquare },
          { title: "My Applications", url: `/dashboard/user/applications`, icon: FileText },
          { title: "Profile", url: `/dashboard/user/profile`, icon: Settings },
        ];

      default:
        return commonItems;
    }
  };

  const menuItems = getMenuItems();

  return (
    <Sidebar className="w-64 border-r bg-card">
      <SidebarContent className="bg-card">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shrink-0">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">RealEstate</h2>
              <p className="text-xs text-muted-foreground capitalize">{userRole} Portal</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      <span className="text-foreground">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}