"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertCircleIcon,
  AppWindow,
  ChevronDown,
  Component,
  LogOut,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { playgroundNavItems } from "@/lib/playground-nav";
import { cn } from "@/lib/utils";
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
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LogoCrm } from "../../../public/images/svg/logo-crm";
import { LogoDrive } from "../../../public/images/svg/logo-deive-table";
import { LogoIcon } from "../../../public/images/svg/logo-game-plan";
import { LogoHelpDesk } from "../../../public/images/svg/logo-help-desk";
import { LogoMail } from "../../../public/images/svg/logo-mail";
import { useTheme } from "next-themes";

export function PlaygroundSidebar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const toggleTheme = () =>
    setTheme((resolvedTheme ?? theme) === "light" ? "dark" : "light");
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const filteredComponents = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return playgroundNavItems;
    return playgroundNavItems.filter((item) =>
      item.title.toLowerCase().includes(normalized),
    );
  }, [query]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (resolvedTheme ?? theme) === "light";

  return (
    <Sidebar collapsible="none" className="border-r">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="ghost">
                  <div className="bg-[#DB4EE0] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                    <LogoCrm />
                  </div>
                  {!isCollapsed && (
                    <>
                      <div className="flex flex-col flex-1 text-left gap-y-0.75">
                        <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                          PlayGround
                        </span>
                        <span className="truncate text-sm text-muted-foreground tracking-4 leading-tight font-normal">
                          Timeless
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
                    <LogoCrm />
                  </div>
                  <div className="flex flex-col flex-1 text-left gap-y-0.75">
                    <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                      CRM
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
                  {isLight ? (
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

      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/playground"}>
                <Link href="/playground">Introduction</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {filteredComponents.map((item) => {
              const isActive = pathname === item.url;
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.slug}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link
                      href={item.url}
                      className={cn(
                        "flex w-full items-center gap-2",
                        isActive && "font-medium",
                      )}
                    >
                      {Icon ? (
                        <Icon className="size-4 shrink-0 text-muted-foreground" />
                      ) : null}
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge ? (
                        <span className="text-xs text-muted-foreground">
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
