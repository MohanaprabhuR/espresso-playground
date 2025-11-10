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
  Blend,
  Component,
  Megaphone,
  BadgePercent,
  ArrowDownUp,
  ChevronDown,
  CornerDownLeft,
  Diamond,
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { KbdGroup, Kbd } from "./ui/kbd";

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
      openModal: true,
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
    { title: "Avatar", url: "/avatar", icon: Home, badge: "1" },
    { title: "Badge", url: "/badges", icon: BadgePercent, badge: "2" },
    { title: "Breadcrumb", url: "/breadcrumb", icon: LinkIcon, badge: "3" },
    { title: "Button", url: "/button", icon: RegexIcon, badge: "4" },
    { title: "Button Group", url: "/buttongroup", icon: InboxIcon, badge: "5" },
    { title: "Checkbox", url: "/checkbox", icon: CheckSquare },
    { title: "Divider", url: "/divider", icon: DivideIcon },
    { title: "Select", url: "/select", icon: TextSelect },
    { title: "Input", url: "/input", icon: TextCursorInput },
    { title: "Text Area", url: "/textarea", icon: TextSearch },
    { title: "Progress Bar", url: "/progress", icon: Projector },
    { title: "Radio Group", url: "/radio", icon: Radio },
    { title: "Slider", url: "/slider", icon: Sliders },
    { title: "Spinner", url: "/spinner", icon: SplinePointer },
    { title: "Switch", url: "/switch", icon: SwitchCameraIcon },
    { title: "Tabs", url: "/tabs", icon: Tablet },
    { title: "Tooltip", url: "/tooltip", icon: ToolCase },
    { title: "Alert", url: "/alert", icon: AlertCircleIcon },
    { title: "Notification", url: "/notification", icon: NotepadTextIcon },
    { title: "Dropdown", url: "/dropdown", icon: DropletIcon },
    { title: "Input Group", url: "/input-group", icon: FormInputIcon },
    { title: "Empty", url: "/empty", icon: EclipseIcon },
    { title: "Field", url: "/field", icon: FileSlidersIcon },
    { title: "Item", url: "/item", icon: IndentDecreaseIcon },
    { title: "Kbd", url: "/kbd", icon: SquareChevronRightIcon },
    { title: "Spacer", url: "/spacer", badge: "new", icon: SpaceIcon },
    { title: "Calendar", url: "/calendar", badge: "new", icon: Calendar1Icon },
    { title: "Popover", url: "/popover", badge: "new", icon: Blend },
    { title: "Modals", url: "/modal", badge: "new", icon: Component },
    { title: "Sonner", url: "/sonner", badge: "new", icon: Megaphone },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [searchModalOpen, setSearchModalOpen] = React.useState(false);

  return (
    <>
      <Dialog open={searchModalOpen} onOpenChange={setSearchModalOpen}>
        <DialogContent
          className="p-0 overflow-hidden"
          size="lg"
          showCloseButton={false}
        >
          <DialogHeader>
            <Input
              variant="outline"
              placeholder="Type to search..."
              size="xl"
              className="rounded-none border-none focus:ring-0 focus-visible:ring-0"
              prefix={<Search className="size-6" />}
            />
          </DialogHeader>
          <div className="space-y-4.5 px-4 py-2.5">
            <div className="flex flex-col gap-2">
              <Label>Search in</Label>
              <ButtonGroup destructive>
                <Button variant="secondary">
                  <Diamond className="size-4" />
                  Folder
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="secondary">
                  <Diamond className="size-4" />
                  Folder
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="secondary">
                  <Diamond className="size-4" />
                  Folder
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="secondary">
                  <Diamond className="size-4" />
                  Folder
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="secondary">
                  <Diamond className="size-4" />
                  Folder
                  <ChevronDown className="size-4" />
                </Button>
              </ButtonGroup>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quick actions</Label>
              <div className="p-2  flex items-center justify-between w-full max-w-[250px] gap-2">
                <div className="flex items-center gap-2">
                  <Diamond className="size-4" />
                  <p className="text-accent-secondary  text-base font-normal tracking-1">
                    Create task
                  </p>
                </div>
                <KbdGroup>
                  <Kbd>⌘ T</Kbd>
                </KbdGroup>
              </div>
              <div className="p-2  flex items-center justify-between w-full max-w-[250px] gap-2">
                <div className="flex items-center gap-2">
                  <Diamond className="size-4" />
                  <p className="text-accent-secondary  text-base font-normal tracking-1">
                    Create new discussion
                  </p>
                </div>
                <KbdGroup>
                  <Kbd>⌘ T</Kbd>
                </KbdGroup>
              </div>
              <div className="p-2  flex items-center justify-between w-full max-w-[250px] gap-2">
                <div className="flex items-center gap-2">
                  <Diamond className="size-4" />
                  <p className="text-accent-secondary  text-base font-normal tracking-1">
                    Create project
                  </p>
                </div>
                <KbdGroup>
                  <Kbd>⌘ T</Kbd>
                </KbdGroup>
              </div>
              <div className="p-2  flex items-center justify-between w-full max-w-[250px] gap-2">
                <div className="flex items-center gap-2">
                  <Diamond className="size-4" />
                  <p className="text-accent-secondary  text-base font-normal tracking-1">
                    Switch to dark mode
                  </p>
                </div>
                <KbdGroup>
                  <Kbd>⌘ T</Kbd>
                </KbdGroup>
              </div>
              <div className="p-2  flex items-center justify-between w-full max-w-[250px] gap-2">
                <div className="flex items-center gap-2">
                  <Diamond className="size-4" />
                  <p className="text-accent-secondary  text-base font-normal tracking-1">
                    New contact
                  </p>
                </div>
                <KbdGroup>
                  <Kbd>⌘ T</Kbd>
                </KbdGroup>
              </div>
              <div className="p-2  flex items-center justify-between w-full max-w-[250px] gap-2">
                <div className="flex items-center gap-2">
                  <Diamond className="size-4" />
                  <p className="text-accent-secondary  text-base font-normal tracking-1">
                    New view
                  </p>
                </div>
                <KbdGroup>
                  <Kbd>⌘ T</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>
          <DialogFooter className="justify-start gap-4 border-t px-2.5 py-1">
            <Badge variant="ghost">
              <ArrowDownUp className="size-4" />
              Select
            </Badge>
            <Badge variant="ghost">
              <CornerDownLeft className="size-4" />
              Open
            </Badge>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>

        <SidebarContent>
          <NavMain
            items={data.navPrimary.map((item) =>
              item.openModal
                ? {
                    ...item,
                    onClick: () => setSearchModalOpen(true),
                  }
                : item
            )}
          />

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
    </>
  );
}
