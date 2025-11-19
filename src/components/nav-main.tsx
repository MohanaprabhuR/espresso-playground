"use client";
import * as React from "react";
import { type LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    onClick?: () => void;
    items?: {
      title: string;
      url: string;
      badge?: string | number;
    }[];
  }[];
}) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const hasSubItems = item.items && item.items.length > 0;
          const isItemActive = item.url === pathname;
          const hasActiveChild =
            hasSubItems && item.items.some((sub) => sub.url === pathname);
          const shouldBeOpen = isItemActive || hasActiveChild || item.isActive;

          // Handle dropdowns
          if (hasSubItems) {
            return (
              <Collapsible
                key={item.title}
                defaultOpen={shouldBeOpen}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isItemActive || hasActiveChild}
                    >
                      {!isCollapsed && (
                        <ChevronRight className="w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                      <div className="flex items-center gap-2 flex-1">
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span className="truncate ">{item.title}</span>
                      </div>
                      {item.badge && (
                        <SidebarMenuBadge className="ml-auto">
                          {item.badge}
                        </SidebarMenuBadge>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((sub) => {
                        const isSubItemActive = sub.url === pathname;
                        return (
                          <SidebarMenuSubItem key={sub.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isSubItemActive}
                            >
                              <Link
                                href={sub.url}
                                className="flex items-center justify-between w-full"
                              >
                                <span className="truncate flex-1 ">
                                  {sub.title}
                                </span>
                                {sub.badge && (
                                  <SidebarMenuBadge className="ml-auto">
                                    {sub.badge}
                                  </SidebarMenuBadge>
                                )}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          // Single menu item
          const handleClick = (e: React.MouseEvent) => {
            if (item.onClick) {
              e.preventDefault();
              item.onClick();
            }
          };

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={isItemActive}
              >
                <Link
                  href={item.url || "#"}
                  onClick={handleClick}
                  className="flex items-center gap-2"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="flex-1 truncate ">{item.title}</span>
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
