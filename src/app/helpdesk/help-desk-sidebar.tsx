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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
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
  ChartPie,
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
import { LogoIcon } from "../../../public/images/svg/logo-game-plan";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const menuConfig = {
  quickActions: [
    { label: "Search", icon: "Search", href: "#" },
    { label: "Notifications", icon: "Bell", href: "#" },
  ],
  mainMenu: [
    { label: "Tickets", icon: "Ticket", href: "/helpdesk" },
    { label: "Knowledge Base", icon: "BookOpen", href: "#" },
    {
      label: "Canned response",
      icon: "MessageCircleReply",
      href: "/canned-response",
    },
    { label: "Customers", icon: "CircleUserRound", href: "#" },
    { label: "Contacts", icon: "SquareUserRound", href: "#" },
  ],
  savedViews: [
    {
      label: "Saved views",
      icon: "ChevronRight",
      items: [
        {
          label: "Resolved tickets",
          icon: "TicketCheck",
          href: "/resolved-tickets",
        },
        { label: "Closed tickets", icon: "TicketX", href: "#" },
        { label: "My tickets", icon: "TicketPlus", href: "#" },
      ],
    },
  ],
};

const HelpDeskSidebar = () => {
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
                    <div className="bg-[#7D42FB] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoHelpDesk />
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left gap-y-0.75">
                          <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                            Helpdesk
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
                    <div className="bg-[#7D42FB] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <LogoHelpDesk />
                    </div>
                    <div className="flex flex-col flex-1 text-left gap-y-0.75">
                      <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                        Helpdesk
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
            {menuConfig.savedViews.map((team, idx) => {
              return (
                <Collapsible key={idx} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="flex items-center gap-2 w-full text-muted-foreground"
                        tooltip={team.label}
                      >
                        {!isCollapsed && (
                          <>
                            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            <span className="flex-1 ">{team.label}</span>
                          </>
                        )}

                        <Plus className="size-4 ml-auto " />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {team.items.map((item, i) => {
                          const Icon = Icons[item.icon];

                          return (
                            <SidebarMenuSubButton key={i} asChild>
                              <Link
                                href={item.href}
                                className="flex items-center gap-2"
                              >
                                {Icon && <Icon className="size-4" />}
                                <span className="flex-1 truncate">
                                  {item.label}
                                </span>
                              </Link>
                            </SidebarMenuSubButton>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenuItem className="gap-2.5 flex flex-col">
            {!isCollapsed && (
              <>
                <div className="px-3 py-2.5 rounded-2xl border bg-background">
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

export default HelpDeskSidebar;
