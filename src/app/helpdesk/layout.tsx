import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import HelpDeskSidebar from "./help-desk-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <HelpDeskSidebar />
        <div className="w-full min-w-0">
          <Header>
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbPage>Tickets</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Button>
              <Plus /> New Ticket
            </Button>
          </Header>
          <main className="flex-1 flex   overflow-auto">{children}</main>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
