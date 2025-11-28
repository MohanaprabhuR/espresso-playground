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
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileText,
  House,
  Inbox,
  LogOut,
  Mails,
  MessageCircleQuestionMark,
  Moon,
  PanelLeft,
  PanelLeftIcon,
  Pin,
  Search,
  Send,
  SendHorizontal,
  Star,
  Sun,
  Trash,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const MailTableSidebar = () => {
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
                    <div className="bg-[#0466DC] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V1.69143L2.28571 3.55429L6.65143 7.10857C7.34857 7.68 8.24 8 9.14286 8C10.0457 8 10.9371 7.68 11.6343 7.10857L16 3.54286V11.4171H2.28571V6.51429L0 4.65143V10.8457C0 12.4229 1.28 13.7029 2.85714 13.7029H15.4286C17.0057 13.7029 18.2857 12.4229 18.2857 10.8457V0H0ZM10.1943 5.33714C9.6 5.81714 8.68571 5.81714 8.10286 5.33714L4.35429 2.28571H13.9429L10.1943 5.33714Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    {!isCollapsed && (
                      <>
                        <div className="flex flex-col flex-1 text-left">
                          <span className="truncate font-medium text-base">
                            Mail
                          </span>
                          <span className="truncate text-xs text-muted-foreground">
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
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V1.69143L2.28571 3.55429L6.65143 7.10857C7.34857 7.68 8.24 8 9.14286 8C10.0457 8 10.9371 7.68 11.6343 7.10857L16 3.54286V11.4171H2.28571V6.51429L0 4.65143V10.8457C0 12.4229 1.28 13.7029 2.85714 13.7029H15.4286C17.0057 13.7029 18.2857 12.4229 18.2857 10.8457V0H0ZM10.1943 5.33714C9.6 5.81714 8.68571 5.81714 8.10286 5.33714L4.35429 2.28571H13.9429L10.1943 5.33714Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="truncate font-medium text-sm tracking-4 leading-tight text-foreground">
                        Mail
                      </span>
                      <span className="truncate text-xs text-muted-foreground tracking-4 leading-tight font-normal">
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
            <SidebarMenuButton tooltip="Home">
              <House />
              <span className="flex-1 truncate ">Home</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip="Inbox"
              isActive={pathname === "/mail-table"}
            >
              <Inbox />
              <span className="flex-1 truncate ">Inbox</span>
              <SidebarMenuBadge>5</SidebarMenuBadge>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Starred">
              <Star />
              <span className="flex-1 truncate ">Starred</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Important">
              <SendHorizontal />
              <span className="flex-1 truncate ">Important</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Send">
              <Send />
              <span className="flex-1 truncate ">Send</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Drafts">
              <FileText />
              <span className="flex-1 truncate ">Drafts</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Categories">
              <Pin />
              <span className="flex-1 truncate ">Categories</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Contacts">
              <User />
              <span className="flex-1 truncate ">Contacts</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Calendar">
              <Calendar />
              <span className="flex-1 truncate ">Calendar</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Shedules">
              <Clock3 />
              <span className="flex-1 truncate ">Shedules</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Notebook">
              <BookOpen />
              <span className="flex-1 truncate ">Notebook</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="To-do’s">
              <CircleCheck />
              <span className="flex-1 truncate ">To-do’s</span>
            </SidebarMenuButton>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarMenuButton tooltip="Spam">
              <Mails />
              <span className="flex-1 truncate ">Spam</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Trash">
              <Trash />
              <span className="flex-1 truncate ">Trash</span>
            </SidebarMenuButton>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>
              <span className="flex-1 truncate">Labels</span>
            </SidebarGroupLabel>

            <SidebarMenuButton tooltip="Fashion">
              {!isCollapsed && <ChevronRight />}
              <Zap />
              <span className="flex-1 truncate">Fashion</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Projects">
              {!isCollapsed && <ChevronRight />}
              <Zap />
              <span className="flex-1 truncate">Projects</span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip="Events">
              {!isCollapsed && <ChevronRight />}
              <Zap />
              <span className="flex-1 truncate">Events</span>
            </SidebarMenuButton>
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

export default MailTableSidebar;
