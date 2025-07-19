import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DashboardSelector from "./pages/DashboardSelector";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AgentDashboard from "./pages/dashboard/AgentDashboard";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminAgents from "./pages/admin/AdminAgents";
import AdminTransactions from "./pages/admin/AdminTransactions";
import AdminReports from "./pages/admin/AdminReports";
import AdminSystem from "./pages/admin/AdminSystem";
// Agent pages
import AgentProperties from "./pages/agent/AgentProperties";
import AgentListings from "./pages/agent/AgentListings";
import AgentClients from "./pages/agent/AgentClients";
import AgentLeads from "./pages/agent/AgentLeads";
import AgentCalendar from "./pages/agent/AgentCalendar";
import AgentMessages from "./pages/agent/AgentMessages";
import AgentCommission from "./pages/agent/AgentCommission";
import AgentProfile from "./pages/agent/AgentProfile";
// User pages
import UserProperties from "./pages/user/UserProperties";
import UserSaved from "./pages/user/UserSaved";
import UserHistory from "./pages/user/UserHistory";
import UserAppointments from "./pages/user/UserAppointments";
import UserMessages from "./pages/user/UserMessages";
import UserApplications from "./pages/user/UserApplications";
import UserProfile from "./pages/user/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<DashboardSelector />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/dashboard/admin/users" element={<AdminUsers />} />
          <Route path="/dashboard/admin/agents" element={<AdminAgents />} />
          <Route path="/dashboard/admin/properties" element={<AdminProperties />} />
          <Route path="/dashboard/admin/transactions" element={<AdminTransactions />} />
          <Route path="/dashboard/admin/reports" element={<AdminReports />} />
          <Route path="/dashboard/admin/system" element={<AdminSystem />} />
          <Route path="/dashboard/admin/settings" element={<AdminSettings />} />
          <Route path="/dashboard/agent" element={<AgentDashboard />} />
          <Route path="/dashboard/agent/properties" element={<AgentProperties />} />
          <Route path="/dashboard/agent/listings" element={<AgentListings />} />
          <Route path="/dashboard/agent/clients" element={<AgentClients />} />
          <Route path="/dashboard/agent/leads" element={<AgentLeads />} />
          <Route path="/dashboard/agent/calendar" element={<AgentCalendar />} />
          <Route path="/dashboard/agent/messages" element={<AgentMessages />} />
          <Route path="/dashboard/agent/commission" element={<AgentCommission />} />
          <Route path="/dashboard/agent/profile" element={<AgentProfile />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/user/properties" element={<UserProperties />} />
          <Route path="/dashboard/user/saved" element={<UserSaved />} />
          <Route path="/dashboard/user/history" element={<UserHistory />} />
          <Route path="/dashboard/user/appointments" element={<UserAppointments />} />
          <Route path="/dashboard/user/messages" element={<UserMessages />} />
          <Route path="/dashboard/user/applications" element={<UserApplications />} />
          <Route path="/dashboard/user/profile" element={<UserProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
