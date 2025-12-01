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
  SidebarMenuBadge,
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
  ArrowRightFromLine,
  Bell,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  House,
  LogOut,
  MessageCircleQuestionMark,
  Moon,
  PanelLeft,
  PanelLeftIcon,
  Plus,
  Search,
  Star,
  Sun,
  Trash2,
  User,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const menuConfig = {
  quickActions: [
    { label: "Search", icon: "Search", href: "#" },
    { label: "Notifications", icon: "Bell", href: "#" },
  ],
  mainMenu: [
    { label: "Home", icon: "House", href: "/drive-table", badge: "5" },
    { label: "Recents", icon: "Clock3", href: "/recents" },
    { label: "Shared", icon: "Users", href: "/shared" },
    { label: "Trash", icon: "Trash2", href: "/trash" },
  ],
  views: {
    label: "views",
    icon: "ChevronRight",
    items: [
      { label: "Favorites", icon: "Star", href: "/favorites" },
      { label: "Documents", icon: "FileText", href: "/documents" },
    ],
  },
};

const DriveTableSidebar = () => {
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
                    <div className="bg-[#016E7D] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1821 1.79632H9.29565L8.3284 0H0V2.51234H6.821L7.78825 4.30866H14.8479C15.0866 4.30866 15.2876 4.50964 15.2876 4.74832V11.5442C15.2876 11.7829 15.0866 11.9838 14.8479 11.9838H2.952C2.71332 11.9838 2.51234 11.7829 2.51234 11.5442V5.33872H0V10.8659C0 12.8632 1.62046 14.4962 3.61777 14.4962H14.1821C16.1795 14.4962 17.7999 12.8757 17.7999 10.8659V5.41409C17.7999 3.41678 16.1795 1.78376 14.1821 1.78376V1.79632Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left">
                          <span className="truncate font-medium text-base">
                            Drive
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
                    <div className="bg-[#016E7D] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1821 1.79632H9.29565L8.3284 0H0V2.51234H6.821L7.78825 4.30866H14.8479C15.0866 4.30866 15.2876 4.50964 15.2876 4.74832V11.5442C15.2876 11.7829 15.0866 11.9838 14.8479 11.9838H2.952C2.71332 11.9838 2.51234 11.7829 2.51234 11.5442V5.33872H0V10.8659C0 12.8632 1.62046 14.4962 3.61777 14.4962H14.1821C16.1795 14.4962 17.7999 12.8757 17.7999 10.8659V5.41409C17.7999 3.41678 16.1795 1.78376 14.1821 1.78376V1.79632Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="truncate font-medium text-sm tracking-4 leading-tight text-foreground">
                        Drive
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
              <span className="flex-1 truncate">views</span>
              <SidebarMenuButton className="w-auto">
                <Plus className="size-4" />
              </SidebarMenuButton>
            </SidebarGroupLabel>
            {menuConfig.views.items.map((item, idx) => {
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
                <Label className="text-secondary-foreground font-medium">
                  Storage
                </Label>
                <Progress
                  value={80}
                  showLabel
                  size="xs"
                  labelName="679 GB of 2 TB"
                ></Progress>
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

export default DriveTableSidebar;
