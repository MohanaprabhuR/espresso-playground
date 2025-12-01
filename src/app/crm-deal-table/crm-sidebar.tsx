"use client";

import React from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";

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
  BowArrow,
  ChartPie,
  ChevronDown,
  ChevronRight,
  Component,
  FolderOpen,
  Handshake,
  LogOut,
  Mail,
  MessageCircleQuestionMark,
  Moon,
  PanelLeft,
  PanelLeftIcon,
  Plus,
  Sun,
  Tickets,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";

const menuConfig = {
  quickActions: [
    { label: "Search", icon: "Search", href: "#" },
    { label: "Notifications", icon: "Bell", href: "#" },
  ],
  mainMenu: [
    { label: "Dashboard", icon: "LayoutDashboard", href: "/dashboard" },
    { label: "Tasks", icon: "CircleCheck", href: "/tasks" },
    { label: "Notes", icon: "NotebookPen", href: "/notes" },
    { label: "Emails", icon: "Mail", href: "/emails" },
    { label: "Leads", icon: "Weight", href: "/leads" },
    { label: "Deals", icon: "Handshake", href: "/crm-deal-table" },
    { label: "Organization", icon: "Building2", href: "/organization" },
    { label: "Calendar", icon: "Calendar", href: "/calendar" },
    { label: "Contacts", icon: "SquareUser", href: "/contacts" },
    { label: "Call & Event Logs", icon: "Phone", href: "/logs" },
  ],
  teams: {
    label: "Teams",
    icon: "ChevronRight",
    items: [
      { label: "My leads", icon: "Headset", href: "/my-leads" },
      { label: "Deals flow", icon: "HeartHandshake", href: "/deals-flow" },
      {
        label: "Qualified Deals",
        icon: "ShieldCheck",
        href: "/qualified-deals",
      },
    ],
  },
};

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
                          <DropdownMenuItem>
                            <Handshake /> CRM Deals
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/help-desk-table">
                          <DropdownMenuItem>
                            <Tickets />
                            Helpdesk Tickets
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/drive-table">
                          <DropdownMenuItem>
                            <FolderOpen />
                            Drive Files
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/mail-table">
                          <DropdownMenuItem>
                            <Mail />
                            Mail Inbox
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/game-plan-table">
                          <DropdownMenuItem>
                            <BowArrow />
                            Gameplan Tasks
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/common/avatar">
                          <DropdownMenuItem>
                            <Component />
                            Components
                          </DropdownMenuItem>
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
            {menuConfig.quickActions.map((item, idx) => {
              const Icon = Icons[item.icon];
              return (
                <SidebarMenuButton key={idx} tooltip={item.label}>
                  <Icon className="size-4" />
                  <span className="flex-1 truncate">{item.label}</span>
                </SidebarMenuButton>
              );
            })}
          </SidebarGroup>

          <SidebarGroup>
            {menuConfig.mainMenu.map((item, idx) => {
              const Icon = Icons[item.icon];
              return (
                <SidebarMenuButton
                  key={idx}
                  tooltip={item.label}
                  isActive={pathname === item.href}
                  asChild
                >
                  <Link href={item.href} className="flex items-center gap-2">
                    <Icon className="size-4" />
                    <span className="flex-1 truncate">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              );
            })}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>
              <ChevronRight />
              <span className="flex-1 truncate"> Teams</span>
              <SidebarMenuButton className="w-auto">
                <Plus className="size-4" />
              </SidebarMenuButton>
            </SidebarGroupLabel>
            {menuConfig.teams.items.map((item, idx) => {
              const Icon = Icons[item.icon];
              return (
                <SidebarMenuButton key={idx} tooltip={item.label} asChild>
                  <Link href={item.href} className="flex items-center gap-2">
                    <Icon className="size-4" />
                    <span className="flex-1 truncate">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              );
            })}
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
