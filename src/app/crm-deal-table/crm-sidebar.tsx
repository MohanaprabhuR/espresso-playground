"use client";

import React from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  AlertCircleIcon,
  AppWindow,
  ArrowRight,
  ArrowRightFromLine,
  Bell,
  Building2,
  Calendar,
  ChartPie,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Handshake,
  Headset,
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageCircleQuestionMark,
  Moon,
  NotebookPen,
  PanelLeft,
  PanelLeftIcon,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  SquareUser,
  Sun,
  User,
  Weight,
  Zap,
} from "lucide-react";
import Link from "next/link";

const CrmSidebar = () => {
  const { theme, setTheme } = useTheme();
  const { openMobile, setOpenMobile, isMobile } = useSidebar();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <>
      {isMobile && (
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <Button variant="ghost" onClick={() => setOpenMobile(true)}>
            <PanelLeftIcon className="size-4" />
          </Button>
        </div>
      )}
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" variant="ghost">
                    <div className="bg-[#DB4EE0] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V2.51234H15.4383V4.39659L9.98912 9.79812V12.7376H7.94316V9.79812C7.94316 9.79812 4.76088 6.59489 3.6052 5.46433H0.0125617L4.99116 10.4262C5.28008 10.7026 5.44338 11.092 5.44338 11.4939V14.4585L12.5015 14.4836V11.4939C12.5015 11.092 12.6648 10.7026 12.9537 10.4262L17.9506 5.45177V0H0Z"
                          fill="#F1FCFF"
                        />
                      </svg>
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left">
                          <span className="truncate font-medium text-base">
                            CRM
                          </span>
                          <span className="truncate text-xs text-muted-foreground">
                            James fenimore
                          </span>
                        </div>
                        <ChevronDown className="ml-auto size-4" />
                      </>
                    )}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-[220px]">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <div className="bg-[#DB4EE0] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V2.51234H15.4383V4.39659L9.98912 9.79812V12.7376H7.94316V9.79812C7.94316 9.79812 4.76088 6.59489 3.6052 5.46433H0.0125617L4.99116 10.4262C5.28008 10.7026 5.44338 11.092 5.44338 11.4939V14.4585L12.5015 14.4836V11.4939C12.5015 11.092 12.6648 10.7026 12.9537 10.4262L17.9506 5.45177V0H0Z"
                          fill="#F1FCFF"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="truncate font-medium text-sm tracking-4 leading-tight text-foreground">
                        CRM
                      </span>
                      <span className="truncate text-xs text-muted-foreground tracking-4 leading-tight font-normal">
                        James fenimore
                      </span>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <AppWindow className="size-4" />
                      App
                    </DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <Link href="/crm-deal-table">
                          <DropdownMenuItem>CRM Deals</DropdownMenuItem>
                        </Link>
                        <Link href="/help-desk-table">
                          <DropdownMenuItem>Helpdesk Tickets</DropdownMenuItem>
                        </Link>
                        <Link href="/drive-table">
                          <DropdownMenuItem>Drive Files</DropdownMenuItem>
                        </Link>
                        <Link href="/mail-table">
                          <DropdownMenuItem>Mail Inbox</DropdownMenuItem>
                        </Link>
                        <Link href="/game-plan-table">
                          <DropdownMenuItem>Gameplan Tasks</DropdownMenuItem>
                        </Link>
                        <Link href="/common/avatar">
                          <DropdownMenuItem>Components</DropdownMenuItem>
                        </Link>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuItem>
                    <User className="size-4" />
                    My Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={toggleTheme}>
                    {theme === "light" ? (
                      <>
                        <Moon className="size-4" /> Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="size-4" /> Light Mode
                      </>
                    )}
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <AlertCircleIcon className="size-4" />
                    Notifications
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <LogOut className="size-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenuButton tooltip="Search">
              <Search /> <span className="flex-1 truncate ">Search</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Notifications">
              <Bell /> <span className="flex-1 truncate ">Notifications</span>
            </SidebarMenuButton>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarMenuButton tooltip="Dashboard">
              <LayoutDashboard />
              <span className="flex-1 truncate ">Dashboard</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Tasks">
              <CircleCheck /> <span className="flex-1 truncate ">Tasks</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Notes">
              <NotebookPen /> <span className="flex-1 truncate ">Notes</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Emails">
              <Mail /> <span className="flex-1 truncate ">Emails</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Leads">
              <Weight /> <span className="flex-1 truncate ">Leads</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip="Deals"
              isActive={pathname === "/crm-deal-table"}
            >
              <Link href="/crm-deal-table" className="flex items-center gap-2">
                <Handshake className="size-4" />
                <span className="flex-1 truncate ">Deals</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Organization">
              <Building2 />{" "}
              <span className="flex-1 truncate ">Organization</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Calendar">
              <Calendar /> <span className="flex-1 truncate ">Calendar</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Contacts">
              <SquareUser /> <span className="flex-1 truncate ">Contacts</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Call & Event Logs">
              <Phone />
              <span className="flex-1 truncate ">Call & Event Logs</span>
            </SidebarMenuButton>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>
              <ChevronRight />
              <span className="flex-1 truncate"> Teams</span>
              <SidebarMenuButton className="w-auto">
                <Plus className="size-4" />
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarMenuButton tooltip="My leads">
              <Headset /> <span className="flex-1 truncate ">My leads</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Deals flow">
              <HeartHandshake />
              <span className="flex-1 truncate ">Deals flow</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Qualified Deals">
              <ShieldCheck />
              <span className="flex-1 truncate ">Qualified Deals</span>
            </SidebarMenuButton>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenuItem className="gap-2.5 flex flex-col">
            {!isCollapsed && (
              <>
                <div className="px-3 py-2.5 rounded-2xl border bg-white">
                  <div className="flex gap-x-2 pb-3.5">
                    <div className="py-1">
                      <ChartPie className="size-4" />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                      <p className="text-sm tracking-4 leading-normal font-medium text-foreground">
                        Getting Started
                      </p>
                      <span className="text-xs tracking-4 leading-normal font-medium text-secondary-foreground">
                        0/4
                      </span>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full">
                    Contuine <ArrowRight className="size-4" />
                  </Button>
                </div>
                <div className="flex gap-1 justify-between w-full">
                  <div className="flex items-center gap-1">
                    <SidebarMenuButton>
                      <Zap className="size-4" />
                    </SidebarMenuButton>
                    <SidebarMenuButton>
                      <MessageCircleQuestionMark className="size-4" />
                    </SidebarMenuButton>
                  </div>

                  <SidebarMenuButton asChild className="w-auto">
                    <SidebarTrigger
                      icon={isCollapsed ? ArrowRightFromLine : PanelLeft}
                    />
                  </SidebarMenuButton>
                </div>
              </>
            )}

            {isCollapsed && (
              <SidebarMenuButton asChild className="w-auto mx-auto">
                <SidebarTrigger
                  icon={isCollapsed ? ArrowRightFromLine : PanelLeft}
                />
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default CrmSidebar;
