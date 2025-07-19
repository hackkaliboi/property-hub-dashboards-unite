import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PropertyApproval } from "@/components/admin/PropertyApproval";

export default function AdminProperties() {
  return (
    <DashboardLayout userRole="admin">
      <PropertyApproval />
    </DashboardLayout>
  );
}