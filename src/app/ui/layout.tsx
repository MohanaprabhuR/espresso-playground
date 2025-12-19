import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Espresso",
  description: "Espresso Frappe Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 p-6 ">{children}</main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
