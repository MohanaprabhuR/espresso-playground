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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LogoIcon } from "../../../public/images/svg/logo-game-plan";
import { LogoMail } from "../../../public/images/svg/logo-mail";
import { LogoDrive } from "../../../public/images/svg/logo-deive-table";
import { LogoHelpDesk } from "../../../public/images/svg/logo-help-desk";
import { LogoCrm } from "../../../public/images/svg/logo-crm";

const menuConfig = {
  quickActions: [
    { label: "Search", icon: "Search", href: "#" },
    { label: "Notifications", icon: "Bell", href: "#" },
  ],
  mainMenu: [
    { label: "Dashboard", icon: "LayoutDashboard", href: "#" },
    { label: "Tasks", icon: "CircleCheck", href: "#" },
    { label: "Notes", icon: "FileText", href: "#" },
    { label: "Emails", icon: "Inbox", href: "/mail", badge: "5" },
    { label: "Leads", icon: "Users", href: "#" },
    { label: "Deals", icon: "Handshake", href: "#" },
    { label: "Organization", icon: "Building2", href: "#" },
    { label: "Calendar", icon: "Calendar", href: "#" },
    { label: "Contacts", icon: "User", href: "#" },
    { label: "Call & Event Logs", icon: "Phone", href: "#" },
  ],

  labels: {
    title: "Labels",
    items: [
      {
        label: "Fashion",
        icon: "Zap",
        fill: "#7757EE",
        items: [
          { label: "General", href: "#" },
          { label: "Standups", href: "#" },
          { label: "Training", href: "#" },
          { label: "Update", href: "#" },
        ],
      },
      {
        label: "Projects",
        icon: "Zap",
        fill: "#E79913",
        items: [
          { label: "General", href: "#" },
          { label: "Standups", href: "#" },
          { label: "Training", href: "#" },
          { label: "Update", href: "#" },
        ],
      },
      {
        label: "Events",
        icon: "Zap",
        fill: "#84B346",
        items: [
          { label: "General", href: "#" },
          { label: "Standups", href: "#" },
          { label: "Training", href: "#" },
          { label: "Update", href: "#" },
        ],
      },
    ],
  },
};
const scheduleData = [
  {
    time: "4:00 - 4:30PM",
    title: "Branding changes",
    color: "#0289F7",
  },
  {
    time: "4:00 - 4:30PM",
    title: "Website design meeting",
    color: "#B35309",
  },
  {
    time: "4:00 - 4:30PM",
    title: "Feedback loops within the design process",
    color: "#E79913",
  },
];
const MailTableSidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" variant="ghost">
                    <div className="bg-[#0466DC] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoMail />
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left gap-y-0.75">
                          <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground ">
                            Mail
                          </span>
                          <span className="truncate text-sm text-muted-foreground tracking-4 leading-tight font-normal">
                            Aditi Sharma
                          </span>
                        </div>
                        <ChevronDown className="ml-auto size-4" />
                      </>
                    )}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-[220px]">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <div className="bg-[#0466DC] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoMail />
                    </div>
                    <div className="flex flex-col flex-1 text-left gap-y-0.75">
                      <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                        Mail
                      </span>
                      <span className="truncate text-sm text-muted-foreground tracking-4 leading-tight font-normal">
                        Aditi Sharma
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
                        <Link href="/crm-data-grid">
                          <DropdownMenuItem>
                            <div className="bg-[#DB4EE0] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoCrm />
                            </div>
                            CRM Data Grid
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
                        <Link href="/playground">
                          <DropdownMenuItem>
                            <div className="bg-[#84B346] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <Component className="size-4 text-white" />
                            </div>
                            Playground
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
                <SidebarMenuButton key={idx} tooltip={item.label} asChild>
                  <Link href={item.href}>
                    <Icon className="size-4" />
                    <span className="flex-1 truncate">{item.label}</span>
                  </Link>
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
                  <Link href={item.href}>
                    <Icon className="size-4" />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </Link>
                </SidebarMenuButton>
              );
            })}
          </SidebarGroup>

          <SidebarGroup>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 w-full text-muted-foreground">
                    {!isCollapsed && (
                      <>
                        <ChevronRight className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        <span className="flex-1">
                          {menuConfig.labels.title}
                        </span>
                      </>
                    )}
                    <Plus className="size-4 ml-auto" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menuConfig.labels.items.map((group, gIdx) => {
                      const GroupIcon = Icons[group.icon];

                      return (
                        <Collapsible
                          key={gIdx}
                          className="group/nested-collapsible"
                        >
                          <SidebarMenuSubItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuSubButton className="flex items-center gap-2 w-full">
                                <ChevronRight className="w-3 h-3 transition-transform duration-200 group-data-[state=open]/nested-collapsible:rotate-90" />

                                {GroupIcon && (
                                  <GroupIcon
                                    className="size-3"
                                    style={{ color: group.fill }}
                                  />
                                )}

                                <span className="flex-1 truncate">
                                  {group.label}
                                </span>
                              </SidebarMenuSubButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              <div className="ml-6 mt-1 flex flex-col gap-1">
                                {group.items.map((item, i) => (
                                  <SidebarMenuSubButton key={i} asChild>
                                    <Link href={item.href}>{item.label}</Link>
                                  </SidebarMenuSubButton>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </SidebarMenuSubItem>
                        </Collapsible>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          {!isCollapsed && (
            <>
              <SidebarGroup className="pb--4">
                <SidebarMenuItem>
                  <SidebarMenuButton>Upcoming events</SidebarMenuButton>
                  <SidebarMenuBadge>5</SidebarMenuBadge>
                </SidebarMenuItem>
                <div className="flex flex-col gap-y-1.5 pt-2">
                  {scheduleData.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg shadow-lg p-2 bg-background flex gap-x-1.5"
                    >
                      <div
                        className="min-w-0.5 h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div className="flex flex-col gap-y-0.5 min-w-0">
                        <p className="text-xs font-medium text-muted-foreground tracking-4 leading-tight truncate">
                          {item.time}
                        </p>
                        <p className="text-sm font-medium text-accent-foreground tracking-4 leading-tight truncate">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SidebarGroup>
              <div className="flex flex-col gap-y-2">
                <Label className="font-medium">Storage</Label>
                <Progress
                  value={80}
                  showLabel
                  size="xs"
                  labelName="679 GB of 2 TB"
                  className="flex-col-reverse"
                ></Progress>
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
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default MailTableSidebar;
