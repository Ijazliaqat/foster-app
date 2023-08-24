// guards
import AuthGuard from "@root/guards/AuthGuard";
// components
import MainLayout from "./main";
import DashboardLayout from "./dashboard";
import LogoOnlyLayout from "./LogoOnlyLayout";
import GuestGuard from "@root/guards/GuestGuard";
import AuthLayout from "./AuthLayout";

// ----------------------------------------------------------------------

export default function Layout({
  variant = "dashboard",
  children,
  ...other
}: any) {
  if (variant === "auth") {
    return <AuthLayout {...other}> {children} </AuthLayout>;
  }

  if (variant === "logoOnly") {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }

  return (
    <AuthGuard>
      <DashboardLayout {...other}> {children} </DashboardLayout>
    </AuthGuard>
  );
}
