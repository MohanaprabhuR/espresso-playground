"use client";
import * as React from "react";
import {
  Bell,
  Search,
  FolderMinusIcon,
  Home,
  InboxIcon,
  Sliders,
  Radio,
  Projector,
  TextSearch,
  TextCursorInput,
  TextSelect,
  DivideIcon,
  CheckSquare,
  Badge,
  LinkIcon,
  Plus,
  RegexIcon,
  SwitchCameraIcon,
  Tablet,
  ToolCase,
  Tags,
  SplinePointer,
  AlertCircleIcon,
  DropletIcon,
  FormInputIcon,
  EclipseIcon,
  NotepadTextIcon,
  FileSlidersIcon,
  IndentDecreaseIcon,
  SquareChevronRightIcon,
  SpaceIcon,
  Calendar1Icon,
  MoreHorizontal,
  Plane,
  MoonStar,
  Grid2x2,
  Blend,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { LogoIcon } from "../../public/images/svg/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
} from "./ui/dropdown-menu";

// This is sample data.
const data = {
  user: {
    name: "Frapper",
    email: "m@example.com",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
  teams: [
    {
      name: "Gameplan",
      logo: LogoIcon,
      plan: "Sally Potter",
    },
  ],
  navPrimary: [
    {
      title: "Search",
      icon: Search,
    },
    {
      title: "Notification",
      icon: Bell,
      badge: "2",
    },
  ],
  navMainDropDown: [
    {
      title: "Form Components",
      icon: FolderMinusIcon,
      items: [
        { title: "General", url: "#" },
        { title: "Standups", url: "#" },
        { title: "Training", url: "#" },
        { title: "Update", url: "#" },
      ],
    },
    {
      title: "Product",
      icon: MoonStar,
      badge: "5",
      items: [
        { title: "General", url: "#" },
        { title: "Standups", url: "#" },
        { title: "Training", url: "#" },
        { title: "Update", url: "#" },
      ],
    },
  ],

  navMain: [
    {
      title: "Avatar",
      url: "/avatar",
      icon: Home,
      badge: "1",
    },
    {
      title: "Badge",
      url: "/badges",
      icon: Badge,
      badge: "2",
    },
    {
      title: "Breadcrumb",
      url: "/breadcrumb",
      icon: LinkIcon,
      badge: "3",
    },
    {
      title: "Button",
      url: "/button",
      icon: RegexIcon,
      badge: "4",
    },
    {
      title: "Button Group",
      url: "/buttongroup",
      icon: InboxIcon,
      badge: "5",
    },
    {
      title: "Checkbox",
      url: "/checkbox",
      icon: CheckSquare,
    },
    {
      title: "Divider",
      url: "/divider",
      icon: DivideIcon,
    },
    {
      title: "Select",
      url: "/select",
      icon: TextSelect,
    },
    {
      title: "Input",
      url: "/input",
      icon: TextCursorInput,
    },
    {
      title: "Text Area",
      url: "/textarea",
      icon: TextSearch,
    },
    {
      title: "Progress Bar",
      url: "/progress",
      icon: Projector,
    },
    {
      title: "Radio Group",
      url: "/radio",
      icon: Radio,
    },
    {
      title: "Slider",
      url: "/slider",
      icon: Sliders,
    },
    {
      title: "Spinner",
      url: "/spinner",
      icon: SplinePointer,
    },
    {
      title: "Switch",
      url: "/switch",
      icon: SwitchCameraIcon,
    },
    {
      title: "Tabs",
      url: "/tabs",
      icon: Tablet,
    },
    {
      title: "Tags",
      url: "/tags",
      icon: Tags,
    },
    {
      title: "Tooltip",
      url: "/tooltip",
      icon: ToolCase,
    },
    {
      title: "Alert",
      url: "/alert",
      icon: AlertCircleIcon,
    },
    {
      title: "Notification",
      url: "/notification",
      icon: NotepadTextIcon,
    },
    {
      title: "DropDwon",
      url: "/dropdown",
      icon: DropletIcon,
    },
    {
      title: "Input Group",
      url: "/input-group",
      icon: FormInputIcon,
    },

    {
      title: "Empty",
      url: "/empty",
      icon: EclipseIcon,
    },

    {
      title: "Field",
      url: "/field",
      icon: FileSlidersIcon,
    },

    {
      title: "Item",
      url: "/item",
      icon: IndentDecreaseIcon,
    },

    {
      title: "Kbd",
      url: "/kbd",
      icon: SquareChevronRightIcon,
    },
    { title: "Spacer", url: "/spacer", badge: "new", icon: SpaceIcon },
    { title: "Calendar", url: "/calendar", badge: "new", icon: Calendar1Icon },
    { title: "Popover", url: "/popover", badge: "new", icon: Blend },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navPrimary} />
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="sm">
            <a href="#">
              <Home />
              <span>Home</span>
            </a>
          </SidebarMenuButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction>
                <MoreHorizontal />
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
              <DropdownMenuItem>
                <span>Edit Project</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Delete Project</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="sm">
            <a href="#">
              <Plane />
              <span>Travel</span>
            </a>
          </SidebarMenuButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction>
                <MoreHorizontal />
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
              <DropdownMenuItem>
                <span>Edit Project</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Delete Project</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
        <SidebarSeparator />
        <SidebarGroupLabel>
          Teams
          <SidebarMenuButton className="w-auto">
            <Plus className="size-4" />
          </SidebarMenuButton>
        </SidebarGroupLabel>
        <NavMain items={data.navMainDropDown} />
        <SidebarSeparator />
        <NavMain items={data.navMain} />
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-between gap-1">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
