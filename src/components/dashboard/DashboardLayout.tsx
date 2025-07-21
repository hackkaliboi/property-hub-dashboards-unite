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
        
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader userRole={userRole} />
          
          <main className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 bg-secondary overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}