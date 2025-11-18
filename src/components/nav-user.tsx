"use client";
import {
  PanelLeft,
  MessageCircleQuestionMark,
  Zap,
  ArrowRightFromLine,
} from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Progress } from "./ui/progress";

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
            <Progress
              value={40}
              showLabel
              size="xs"
              labelName="Label"
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
    </SidebarMenu>
  );
}
