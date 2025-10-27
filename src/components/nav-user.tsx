"use client";
import {
  CloudIcon,
  PanelLeft,
  PanelLeftClose,
  MessageCircleQuestionMark,
  Zap,
} from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Progress } from "./ui/progress";
import { Label } from "./ui/label";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu>
      <SidebarMenuItem className="gap-2.5 flex flex-col">
        {!isCollapsed && (
          <>
            <Progress value={40} size="xs" showLabel>
              <Label>
                <CloudIcon className="size-4" />
                Label
              </Label>
            </Progress>

            <div className="flex gap-1 justify-between w-full">
              <div className="flex items-center gap-1">
                <SidebarMenuButton>
                  <Zap className="size-4" />
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <MessageCircleQuestionMark className="size-4" />
                </SidebarMenuButton>
              </div>

              <SidebarMenuButton asChild>
                <SidebarTrigger>
                  <PanelLeftClose className="size-4" />
                </SidebarTrigger>
              </SidebarMenuButton>
            </div>
          </>
        )}

        {isCollapsed && (
          <SidebarMenuButton asChild>
            <SidebarTrigger>
              <PanelLeft className="size-4" />
            </SidebarTrigger>
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
