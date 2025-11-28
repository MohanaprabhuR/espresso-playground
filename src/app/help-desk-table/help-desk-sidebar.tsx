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
  BookOpen,
  ChartPie,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  LogOut,
  MessageCircleQuestionMark,
  MessageCircleReply,
  Moon,
  PanelLeft,
  PanelLeftIcon,
  Plus,
  Search,
  SquareUserRound,
  Sun,
  Ticket,
  TicketCheck,
  TicketPlus,
  TicketX,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";

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
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.46 5.51458V0H0V2.51234H14.9602V4.89906C13.9553 5.18798 13.2267 6.11754 13.2267 7.21041C13.2267 8.30328 13.9553 9.22028 14.9602 9.5092V11.8959H2.51234V5.33872H0V14.4083H17.4725V8.89367L15.9777 7.82593V6.59489L17.4725 5.52714L17.46 5.51458Z"
                          fill="#EDF7FF"
                        />
                      </svg>
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left">
                          <span className="truncate font-medium text-base">
                            Helpdesk
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
                    <div className="bg-[#7D42FB] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.46 5.51458V0H0V2.51234H14.9602V4.89906C13.9553 5.18798 13.2267 6.11754 13.2267 7.21041C13.2267 8.30328 13.9553 9.22028 14.9602 9.5092V11.8959H2.51234V5.33872H0V14.4083H17.4725V8.89367L15.9777 7.82593V6.59489L17.4725 5.52714L17.46 5.51458Z"
                          fill="#EDF7FF"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="truncate font-medium text-sm tracking-4 leading-tight text-foreground">
                        Helpdesk
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
            <SidebarMenuButton
              tooltip="Tickets"
              isActive={pathname === "/help-desk-table"}
            >
              <Ticket />
              <span className="flex-1 truncate ">Tickets</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Knowledge Base">
              <BookOpen />
              <span className="flex-1 truncate ">Knowledge Base</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Canned response">
              <MessageCircleReply />
              <span className="flex-1 truncate ">Canned response</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Cusotmers">
              <CircleUserRound />
              <span className="flex-1 truncate ">Cusotmers</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Contacts">
              <SquareUserRound />{" "}
              <span className="flex-1 truncate ">Contacts</span>
            </SidebarMenuButton>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>
              <ChevronRight />
              <span className="flex-1 truncate"> Saved views</span>
              <SidebarMenuButton className="w-auto">
                <Plus className="size-4" />
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarMenuButton tooltip="My leads">
              <TicketCheck />
              <span className="flex-1 truncate ">Resolved tickets</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Deals flow">
              <TicketX />
              <span className="flex-1 truncate ">Closed tickets</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Qualified Deals">
              <TicketPlus />
              <span className="flex-1 truncate ">My tickets</span>
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

                  {/* 👇 Dynamic trigger icon */}
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
