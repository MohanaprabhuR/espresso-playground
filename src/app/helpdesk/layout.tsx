"use client";
import "@/app/globals.css";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
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
import { PanelLeftIcon, Plus } from "lucide-react";

function SidebarTriggerWithTitle() {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Button
        variant="ghost"
        onClick={toggleSidebar}
        className="md:hidden"
        iconOnly
      >
        <PanelLeftIcon />
      </Button>
    </>
  );
}
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
            <div className="flex items-center gap-x-1">
              <SidebarTriggerWithTitle />
              <Breadcrumb>
                <BreadcrumbList size="md">
                  <BreadcrumbItem>
                    <BreadcrumbPage>Tickets</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
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
