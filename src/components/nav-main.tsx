"use client";
import * as React from "react";
import { type LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url?: string;
    icon?: LucideIcon;
    badge?: string | number;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      badge?: string | number;
    }[];
  }[];
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const hasSubItems = item.items && item.items.length > 0;

          if (hasSubItems) {
            return (
              <Collapsible
                key={item.title}
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  {/* Trigger */}
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {!isCollapsed && (
                        <ChevronRight className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                      <div className="flex items-center gap-2 flex-1">
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span className="truncate">{item.title}</span>
                      </div>
                      {item.badge && (
                        <SidebarMenuBadge className="ml-auto">
                          {item.badge}
                        </SidebarMenuBadge>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  {/* Collapsible content */}
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={subItem.url}
                              className="flex items-center justify-between w-full"
                            >
                              <span className="truncate">{subItem.title}</span>
                              {subItem.badge && (
                                <SidebarMenuBadge className="ml-auto">
                                  {subItem.badge}
                                </SidebarMenuBadge>
                              )}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          // Single link (no children)
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link
                  href={item.url || "#"}
                  className="flex items-center gap-2"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="flex-1 truncate">{item.title}</span>
                  {item.badge && (
                    <SidebarMenuBadge className="ml-auto">
                      {item.badge}
                    </SidebarMenuBadge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
