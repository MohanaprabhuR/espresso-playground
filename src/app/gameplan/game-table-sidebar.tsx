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
    { label: "Notifications", icon: "Bell", href: "#" },
    { label: "Inbox", icon: "Inbox", href: "#" },
    { label: "Home", icon: "House", href: "/gameplan", badge: "23" },
    { label: "Drafts", icon: "CircleCheckBig", href: "#" },
    { label: "Tasks", icon: "Settings", href: "#" },
    { label: "Pages", icon: "Files", href: "#" },
  ],
  teams: [
    {
      label: "Product",
      icon: "Fan",
      badge: 43,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Operations",
      icon: "KeyRound",
      badge: 26,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Open FLC",
      icon: "SquareArrowOutUpRight",
      badge: 13,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Delivery team",
      icon: "Truck",
      badge: 8,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Sales",
      icon: "Percent",
      badge: 26,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Framework",
      icon: "Frame",
      badge: 12,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Team coffee",
      icon: "Vault",
      badge: 9,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Vacation",
      icon: "TicketsPlane",
      badge: 24,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Frappe analytics",
      icon: "ChartPie",
      badge: 17,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Goals",
      icon: "Goal",
      badge: 9,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Quality",
      icon: "Infinity",
      badge: 3,
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Team out",
      icon: "ShieldHalf",
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "Adventure",
      icon: "Kayak",
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
    {
      label: "DevOps",
      icon: "FileScan",
      items: [
        { label: "General", href: "#" },
        { label: "Standups", href: "#" },
        { label: "Training", href: "#" },
        { label: "Update", href: "#" },
      ],
    },
  ],
};

const GamePlanSidebar = () => {
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
                    <div className="bg-[#FF8F26] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoIcon />
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left gap-y-0.75">
                          <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                            Gameplan
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
                    <div className="bg-[#FF8F26] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoIcon />
                    </div>
                    <div className="flex flex-col flex-1 text-left gap-y-0.75">
                      <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                        Gameplan
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

                    <CollapsibleContent className="ml-6 mt-1 flex flex-col gap-1">
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
