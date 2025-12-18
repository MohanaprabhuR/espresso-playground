"use client";
import "@/app/globals.css";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import GamePlanSidebar from "./game-table-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Check,
  Ellipsis,
  FileArchive,
  Files,
  List,
  PanelLeftIcon,
  Plane,
  Plus,
  SquareCheckBig,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <GamePlanSidebar />
        <div className="w-full min-w-0">
          <Header className="pr-2.5">
            <div className="flex items-center gap-1">
              <SidebarTriggerWithTitle />
              <Breadcrumb>
                <BreadcrumbList size="md">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                      <Plane />
                      Products
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">General</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Task</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button iconOnly variant="ghost">
                    <Ellipsis className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <SquareCheckBig className="size-4" /> Edit task
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <List className="size-4" />
                    View details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Check className="size-4" />
                    Mark complete
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileArchive className="size-4" />
                    Archive task
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Files className="size-4" />
                    Copy task id
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash className="size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button>
                <Plus />
                New task
              </Button>
            </div>
          </Header>
          <main className="flex-1  overflow-auto">{children}</main>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
