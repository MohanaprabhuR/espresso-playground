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
  ArrowRightFromLine,
  ChevronDown,
  ChevronRight,
  Component,
  LogOut,
  MessageCircleQuestionMark,
  Moon,
  PanelLeft,
  PanelLeftIcon,
  Plus,
  Sun,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { LogoCrm } from "../../../public/images/svg/logo-crm";
import { LogoHelpDesk } from "../../../public/images/svg/logo-help-desk";
import { LogoMail } from "../../../public/images/svg/logo-mail";
import { LogoIcon } from "../../../public/images/svg/logo-game-plan";
import { LogoDrive } from "../../../public/images/svg/logo-deive-table";

const menuConfig = {
  quickActions: [
    { label: "Search", icon: "Search", href: "#" },
    { label: "Notifications", icon: "Bell", href: "#" },
  ],
  mainMenu: [
    { label: "Home", icon: "House", href: "/drive", badge: "5" },
    { label: "Recents", icon: "Clock3", href: "#" },
    { label: "Shared", icon: "Users", href: "#" },
    { label: "Trash", icon: "Trash2", href: "#" },
  ],
  views: {
    label: "views",
    icon: "ChevronRight",
    items: [
      { label: "Favorites", icon: "Star", href: "#" },
      { label: "Documents", icon: "FileText", href: "#" },
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
                      <LogoDrive />
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left gap-y-0.75">
                          <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                            Drive
                          </span>
                          <span className="truncate text-sm text-muted-foreground tracking-4 leading-tight font-normal">
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
                      <LogoDrive />
                    </div>
                    <div className="flex flex-col flex-1 text-left gap-y-0.75">
                      <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                        Drive
                      </span>
                      <span className="truncate text-sm text-muted-foreground tracking-4 leading-tight font-normal">
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
                        <Link href="/crm">
                          <DropdownMenuItem>
                            <div className="bg-[#DB4EE0] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoCrm />
                            </div>
                            CRM
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/helpdesk">
                          <DropdownMenuItem>
                            <div className="bg-[#7D42FB] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoHelpDesk />
                            </div>
                            Helpdesk
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/drive">
                          <DropdownMenuItem>
                            <div className="bg-[#016E7D] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoDrive />
                            </div>
                            Drive
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/mail">
                          <DropdownMenuItem>
                            <div className="bg-[#0466DC] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoMail />
                            </div>
                            Mail
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/gameplan">
                          <DropdownMenuItem>
                            <div className="bg-[#FF8F26] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoIcon />
                            </div>
                            Gameplan
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/ui/avatar">
                          <DropdownMenuItem>
                            <div className="bg-[#84B346] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <Component className="size-4 text-white" />
                            </div>
                            UI
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
                <Label className="font-medium">Storage</Label>
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
