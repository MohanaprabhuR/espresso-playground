"use client";
import "@/app/globals.css";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import DriveTableSidebar from "./drive-table-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine, ChevronDown, PanelLeftIcon, Plus } from "lucide-react";
import RightDriveTableSidebar from "./rigth-sidebar";

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
        <DriveTableSidebar />
        <div className="w-full min-w-0">
          <div>
            <Header>
              <div className="flex items-center gap-1">
                <SidebarTriggerWithTitle />
                <Breadcrumb>
                  <BreadcrumbList size="md">
                    <BreadcrumbItem>
                      <BreadcrumbPage>My drive</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <Button>
                <ArrowUpToLine /> Upload
                <ChevronDown />
              </Button>
            </Header>
            <div className="flex">
              <main className="flex-1 flex overflow-auto">{children}</main>
              <RightDriveTableSidebar />
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
