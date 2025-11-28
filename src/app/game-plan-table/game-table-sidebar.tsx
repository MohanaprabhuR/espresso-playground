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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { LogoIcon } from "../../../public/images/svg/logo";
import { Button } from "@/components/ui/button";
import {
  AlertCircleIcon,
  AppWindow,
  ArrowRightFromLine,
  Bell,
  ChevronDown,
  ChevronRight,
  CircleCheckBig,
  Files,
  House,
  Inbox,
  LogOut,
  MessageCircleQuestionMark,
  Moon,
  PanelLeft,
  PanelLeftIcon,
  Plus,
  Search,
  Settings,
  Sun,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";

const teamMenus = [
  {
    label: "Product",
    icon: "Fan",
    badge: 43,
    items: [
      { label: "General", href: "/product/general" },
      { label: "Standups", href: "/product/standups" },
      { label: "Training", href: "/product/training" },
      { label: "Update", href: "/product/update" },
    ],
  },
  {
    label: "Operations",
    icon: "KeyRound",
    badge: 26,
    items: [
      { label: "General", href: "/operations/general" },
      { label: "Standups", href: "/operations/standups" },
      { label: "Training", href: "/operations/training" },
      { label: "Update", href: "/operations/update" },
    ],
  },
  {
    label: "Open FLC",
    icon: "SquareArrowOutUpRight",
    badge: 13,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Delivery team",
    icon: "Truck",
    badge: 8,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Sales",
    icon: "Percent",
    badge: 26,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Framework",
    icon: "Frame",
    badge: 12,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Team coffee",
    icon: "Vault",
    badge: 9,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Vacation",
    icon: "TicketsPlane",
    badge: 24,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Frappe analytics",
    icon: "TChartPie",
    badge: 17,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Goals",
    icon: "Goal",
    badge: 9,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Quality",
    icon: "Infinity",
    badge: 3,
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Team out",
    icon: "ShieldHalf",
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "Adventure",
    icon: "Kayak",
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
  {
    label: "DevOps",
    icon: "FileScan",
    items: [
      { label: "General", href: "/open-flc/general" },
      { label: "Standups", href: "/open-flc/standups" },
      { label: "Training", href: "/open-flc/training" },
      { label: "Update", href: "/open-flc/update" },
    ],
  },
];

const GamePlanSidebar = () => {
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
                    <div className="bg-[#FF8F26] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoIcon />
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left">
                          <span className="truncate font-medium text-base">
                            Gameplan
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
                    <div className="bg-[#FF8F26] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoIcon />
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="truncate font-medium text-sm tracking-4 leading-tight text-foreground">
                        Gameplan
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
              <SidebarMenuBadge>⌘ K</SidebarMenuBadge>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Notifications">
              <Bell /> <span className="flex-1 truncate ">Notifications</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Inbox">
              <Inbox />
              <span className="flex-1 truncate ">Inbox</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Home">
              <House />
              <span className="flex-1 truncate ">Home</span>
              <SidebarMenuBadge>23</SidebarMenuBadge>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Drafts">
              <CircleCheckBig />
              <span className="flex-1 truncate ">Drafts</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Tasks">
              <Settings />
              <span className="flex-1 truncate ">Tasks</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Pages">
              <Files />
              <span className="flex-1 truncate ">Pages</span>
            </SidebarMenuButton>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>
              <span className="flex-1 truncate">Teams</span>
              <SidebarMenuButton className="w-auto">
                <Plus className="size-4" />
              </SidebarMenuButton>
            </SidebarGroupLabel>
            {teamMenus.map((menu, idx) => {
              const Icon = Icons[menu.icon];

              return (
                <Collapsible key={idx} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={menu.label}>
                        {!isCollapsed && (
                          <ChevronRight className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        )}

                        <div className="flex items-center gap-2 flex-1">
                          {Icon ? <Icon className="size-4" /> : null}
                          <span className="truncate">{menu.label}</span>
                        </div>

                        <SidebarMenuBadge className="ml-auto">
                          {menu.badge}
                        </SidebarMenuBadge>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      {menu.items.map((item, i) => (
                        <SidebarMenuSub key={i}>
                          <SidebarMenuSubButton asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSub>
                      ))}
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
            <SidebarMenuButton>More archived teams</SidebarMenuButton>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenuItem className="gap-2.5 flex flex-col">
            {!isCollapsed && (
              <>
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

export default GamePlanSidebar;
