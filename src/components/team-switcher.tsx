"use client";

import * as React from "react";
import {
  ChevronsUpDown,
  Moon,
  Sun,
  Settings,
  User,
  LogOut,
  Sparkles,
  AlertCircleIcon,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function TeamSwitcher({
  teams,
}: {
  teams: { name: string; logo: React.ElementType; plan: string }[];
}) {
  const [activeTeam] = React.useState(teams[0]);
  const { theme, setTheme } = useTheme();

  if (!activeTeam) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full" variant="ghost">
              <activeTeam.logo className="size-7" />
              <div className="flex flex-col flex-1 text-left text-sm gap-1 group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium text-base">
                  {activeTeam.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {activeTeam.plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-[220px]">
            <DropdownMenuLabel className="flex items-center gap-2">
              <activeTeam.logo className="size-8" />
              <div className="flex flex-col">
                <span className="font-medium text-sm">{activeTeam.name}</span>
                <span className="text-xs text-muted-foreground">
                  {activeTeam.plan}
                </span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="size-4" />
              My Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem onClick={toggleTheme}>
              {theme === "light" ? (
                <>
                  <Moon className="size-4" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="size-4" />
                  Light Mode
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Sparkles className="size-4" />
              Upgrade to Pro
            </DropdownMenuItem>

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
  );
}
