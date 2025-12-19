"use client";
import "@/app/globals.css";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import MailTableSidebar from "./mail-table-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Grip, PanelLeftIcon, Pencil, RefreshCcw, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
        <MailTableSidebar />
        <div className="w-full min-w-0">
          <Header className="lg:py-0 py-2.5">
            <div className="flex items-center gap-1">
              <SidebarTriggerWithTitle />
              <Breadcrumb>
                <BreadcrumbList size="md">
                  <BreadcrumbItem>
                    <BreadcrumbPage>Income</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="gap-x-4 hidden lg:flex">
              {[
                { label: "Primary", badge: 24 },
                { label: "Updates" },
                { label: "Social" },
                { label: "Promotions" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="#"
                  className="py-4 px-2 flex items-center gap-x-2 hover:text-accent-foreground transition-all ease-in-out duration-200  text-muted-foreground text-base tracking-4 leading-tight font-normal relative after:absolute after:left-0 after:-bottom-px after:h-px after:w-full after:bg-transparent
     data-[active=true]:text-accent-foreground  data-[active=true]:after:bg-accent-foreground  "
                  data-active={item.label === "Primary"}
                >
                  {item.label}
                  {item.badge && (
                    <Badge variant="secondary">{item.badge}</Badge>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex lg:gap-x-2 gap-x-1.5">
              <Button iconOnly variant="ghost">
                <Search />
              </Button>
              <Button iconOnly variant="ghost">
                <RefreshCcw />
              </Button>
              <Button iconOnly variant="ghost">
                <Grip />
              </Button>

              <Button>
                <Pencil /> Compose
              </Button>
            </div>
          </Header>
          <main className="flex-1 flex  overflow-auto">{children}</main>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
