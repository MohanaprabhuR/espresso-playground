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
import { LogoIcon } from "../../../public/images/svg/logo-game-plan";
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
import { LogoCrm } from "../../../public/images/svg/logo-crm";
import { LogoHelpDesk } from "../../../public/images/svg/logo-help-desk";
import { LogoDrive } from "../../../public/images/svg/logo-deive-table";
import { LogoMail } from "../../../public/images/svg/logo-mail";

const menuConfig = {
  mainMenu: [
    { label: "Search", icon: "Search", href: "#", badge: "⌘ K" },
    { label: "Notifications", icon: "Bell", href: "/notifications" },
    { label: "Inbox", icon: "Inbox", href: "/inbox" },
    { label: "Home", icon: "House", href: "/game-plan-table", badge: "23" },
    { label: "Drafts", icon: "CircleCheckBig", href: "/drafts" },
    { label: "Tasks", icon: "Settings", href: "/tasks" },
    { label: "Pages", icon: "Files", href: "/pages" },
  ],
  teams: [
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
        { label: "General", href: "/delivery/general" },
        { label: "Standups", href: "/delivery/standups" },
        { label: "Training", href: "/delivery/training" },
        { label: "Update", href: "/delivery/update" },
      ],
    },
    {
      label: "Sales",
      icon: "Percent",
      badge: 26,
      items: [
        { label: "General", href: "/sales/general" },
        { label: "Standups", href: "/sales/standups" },
        { label: "Training", href: "/sales/training" },
        { label: "Update", href: "/sales/update" },
      ],
    },
    {
      label: "Framework",
      icon: "Frame",
      badge: 12,
      items: [
        { label: "General", href: "/framework/general" },
        { label: "Standups", href: "/framework/standups" },
        { label: "Training", href: "/framework/training" },
        { label: "Update", href: "/framework/update" },
      ],
    },
    {
      label: "Team coffee",
      icon: "Vault",
      badge: 9,
      items: [
        { label: "General", href: "/coffee/general" },
        { label: "Standups", href: "/coffee/standups" },
        { label: "Training", href: "/coffee/training" },
        { label: "Update", href: "/coffee/update" },
      ],
    },
    {
      label: "Vacation",
      icon: "TicketsPlane",
      badge: 24,
      items: [
        { label: "General", href: "/vacation/general" },
        { label: "Standups", href: "/vacation/standups" },
        { label: "Training", href: "/vacation/training" },
        { label: "Update", href: "/vacation/update" },
      ],
    },
    {
      label: "Frappe analytics",
      icon: "ChartPie",
      badge: 17,
      items: [
        { label: "General", href: "/analytics/general" },
        { label: "Standups", href: "/analytics/standups" },
        { label: "Training", href: "/analytics/training" },
        { label: "Update", href: "/analytics/update" },
      ],
    },
    {
      label: "Goals",
      icon: "Goal",
      badge: 9,
      items: [
        { label: "General", href: "/goals/general" },
        { label: "Standups", href: "/goals/standups" },
        { label: "Training", href: "/goals/training" },
        { label: "Update", href: "/goals/update" },
      ],
    },
    {
      label: "Quality",
      icon: "Infinity",
      badge: 3,
      items: [
        { label: "General", href: "/quality/general" },
        { label: "Standups", href: "/quality/standups" },
        { label: "Training", href: "/quality/training" },
        { label: "Update", href: "/quality/update" },
      ],
    },
    {
      label: "Team out",
      icon: "ShieldHalf",
      items: [
        { label: "General", href: "/teamout/general" },
        { label: "Standups", href: "/teamout/standups" },
        { label: "Training", href: "/teamout/training" },
        { label: "Update", href: "/teamout/update" },
      ],
    },
    {
      label: "Adventure",
      icon: "Kayak",
      items: [
        { label: "General", href: "/adventure/general" },
        { label: "Standups", href: "/adventure/standups" },
        { label: "Training", href: "/adventure/training" },
        { label: "Update", href: "/adventure/update" },
      ],
    },
    {
      label: "DevOps",
      icon: "FileScan",
      items: [
        { label: "General", href: "/devops/general" },
        { label: "Standups", href: "/devops/standups" },
        { label: "Training", href: "/devops/training" },
        { label: "Update", href: "/devops/update" },
      ],
    },
  ],
};

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
                          <span className="truncate font-medium text-sm tracking-4 leading-tight text-foreground">
                            Gameplan
                          </span>
                          <span className="truncate text-xs text-muted-foreground tracking-4 leading-tight font-normal">
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
                          <DropdownMenuItem>
                            <div className="bg-[#DB4EE0] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoCrm />
                            </div>
                            CRM Deals
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/help-desk-table">
                          <DropdownMenuItem>
                            <div className="bg-[#7D42FB] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoHelpDesk />
                            </div>
                            Helpdesk Tickets
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/drive-table">
                          <DropdownMenuItem>
                            <div className="bg-[#016E7D] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoDrive />
                            </div>
                            Drive Files
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/mail-table">
                          <DropdownMenuItem>
                            <div className="bg-[#0466DC] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoMail />
                            </div>
                            Mail Inbox
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/game-plan-table">
                          <DropdownMenuItem>
                            <div className="bg-[#FF8F26] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <LogoIcon />
                            </div>
                            Gameplan Tasks
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/common/avatar">
                          <DropdownMenuItem>
                            <div className="bg-[#84B346] flex aspect-square size-7 items-center justify-center rounded-lg min-w-0 shrink-0">
                              <Component className="size-4 text-white" />
                            </div>
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
            {menuConfig.mainMenu.map((item, idx) => {
              const Icon = Icons[item.icon];
              return (
                <SidebarMenuButton
                  key={idx}
                  tooltip={item.label}
                  isActive={pathname === item.href}
                  asChild={item.href !== "#"}
                >
                  {item.href !== "#" ? (
                    <Link href={item.href} className="flex items-center gap-2">
                      <Icon className="size-4" />
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      )}
                    </Link>
                  ) : (
                    <>
                      <Icon className="size-4" />
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      )}
                    </>
                  )}
                </SidebarMenuButton>
              );
            })}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>
              <span className="flex-1 truncate">Teams</span>
              <SidebarMenuButton className="w-auto">
                <Plus className="size-4" />
              </SidebarMenuButton>
            </SidebarGroupLabel>
            {menuConfig.teams.map((menu, idx) => {
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

                        {menu.badge && (
                          <SidebarMenuBadge className="ml-auto">
                            {menu.badge}
                          </SidebarMenuBadge>
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub className="gap-1">
                        {menu.items.map((item, i) => (
                          <SidebarMenuSubButton key={i} asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </SidebarMenuSubButton>
                        ))}
                      </SidebarMenuSub>
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
