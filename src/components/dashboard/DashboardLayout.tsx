import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: "admin" | "agent" | "user";
}

export function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-dashboard-bg">
        <DashboardSidebar userRole={userRole} />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader userRole={userRole} />
          
          <main className="flex-1 p-6 space-y-6 bg-secondary">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}