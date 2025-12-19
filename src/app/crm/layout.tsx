"use client";
import "@/app/globals.css";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import CrmSidebar from "./crm-sidebar";
import { Header } from "@/components/ui/header";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  AlignJustify,
  Calendar,
  ChevronDown,
  Columns2,
  MapPin,
  Menu,
  PanelLeftIcon,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SlashIcon } from "../../../public/images/svg/slashIcon";

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

function SelectWithResponsiveSize() {
  const isMobile = useIsMobile();
  return (
    <Select defaultValue="list">
      <SelectTrigger
        size={isMobile ? "md" : "sm"}
        variant="ghost"
        icon={<ChevronDown />}
        className="px-1.25 py-1 text-lg font-medium leading-none"
      >
        <SelectValue placeholder="List View" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="list">
          <Menu className="size-4" />
          List view
        </SelectItem>

        <SelectItem value="kanban">
          <Columns2 className="size-4" />
          Kanban view
        </SelectItem>

        <SelectItem value="calendar">
          <Calendar className="size-4" />
          Calendar
        </SelectItem>

        <SelectSeparator />

        <SelectItem value="product">
          <span>🔆</span>
          Product - sales
        </SelectItem>

        <SelectItem value="support">
          <span>⚓</span>
          Support
        </SelectItem>

        <SelectItem value="board">
          <span>📌</span>
          Board - highest sales
        </SelectItem>

        <SelectItem value="pinned">
          <MapPin className="size-4" />
          Board pinned
        </SelectItem>
      </SelectContent>
    </Select>
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
        <CrmSidebar />
        <div className="flex min-w-0 w-full flex-col">
          <Header>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <SidebarTriggerWithTitle />
                <Breadcrumb>
                  <BreadcrumbList size="md">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#" className="p-1.25">
                        Leads
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <SelectWithResponsiveSize />
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <Button>
                <Plus />
                Create
              </Button>
            </div>
          </Header>
          <main className="flex flex-1 overflow-auto">{children}</main>
        </div>

        <Toaster />
      </div>
    </SidebarProvider>
  );
}
