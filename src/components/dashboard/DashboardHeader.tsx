import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  userRole: "admin" | "agent" | "user";
}

export function DashboardHeader({ userRole }: DashboardHeaderProps) {
  const getRoleDisplay = () => {
    switch (userRole) {
      case "admin":
        return "Administrator";
      case "agent":
        return "Real Estate Agent";
      case "user":
        return "Property Seeker";
      default:
        return "User";
    }
  };

  return (
    <header className="h-16 bg-card border-b border-dashboard-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search properties, clients, or transactions..."
            className="pl-10 w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>
        </Button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">Welcome Back</p>
            <p className="text-xs text-muted-foreground">{getRoleDisplay()}</p>
          </div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userRole.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" size="icon">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}