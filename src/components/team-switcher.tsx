"use client";

import React from "react";

import {
  Moon,
  Sun,
  Settings,
  User,
  LogOut,
  Sparkles,
  AlertCircleIcon,
  SettingsIcon,
  Bell,
  ChevronRight,
  Inbox,
  Mail,
  Shield,
  Zap,
  ArrowRightFromLine,
  PanelLeft,
  MessageCircleQuestionMark,
  ListFilter,
  ChevronDown,
} from "lucide-react";

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
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

function SettingsDialogContent() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { icon: User, label: "My profile" },
    { icon: SettingsIcon, label: "General" },
    { icon: Inbox, label: "Inbox", count: null },
    { icon: Mail, label: "Mail", count: null },
    { icon: Shield, label: "Accounts" },
    { icon: Bell, label: "Notifications" },
    { icon: Shield, label: "Security" },
    { icon: ChevronRight, label: "List item", count: 5 },
    { icon: ChevronRight, label: "List item", count: 5 },
    { icon: ChevronRight, label: "List item", count: 5 },
    { icon: ChevronRight, label: "List item", count: 5 },
    { icon: ChevronRight, label: "List item", count: 5 },
    { icon: ChevronRight, label: "List item", count: 5 },
  ];

  return (
    <>
      <Sidebar className="h-full bg-background" collapsible="icon">
        {!isCollapsed && (
          <SidebarHeader className="p-4">
            <DialogTitle>Settings</DialogTitle>
          </SidebarHeader>
        )}

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.label)}
                      tooltip={item.label}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="flex-1">{item.label}</span>
                      {item.count && (
                        <span className="text-xs text-muted-foreground">
                          {item.count}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="gap-2.5 flex flex-col">
              {!isCollapsed && (
                <>
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
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 overflow-y-auto p-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">General</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Display</h3>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-normal">Themes</Label>
                  </div>
                  <Tabs value={theme} onValueChange={setTheme}>
                    <TabsList>
                      <TabsTrigger value="light">
                        <Sun className="size-4" />
                      </TabsTrigger>
                      <TabsTrigger value="dark">
                        <Moon className="size-4" />
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-normal">Property</Label>
                      <p className="text-xs text-muted-foreground">
                        Description
                      </p>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-normal">Property</Label>
                      <p className="text-xs text-muted-foreground">
                        Description
                      </p>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Behaviour</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-normal">Property</Label>
                  <p className="text-xs text-muted-foreground">Description</p>
                </div>
                <Select>
                  <SelectTrigger variant="outline">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-normal">Property</Label>
                  <p className="text-xs text-muted-foreground">Description</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <Label className="text-sm font-normal">Property</Label>
                  <p className="text-xs text-muted-foreground">Description</p>
                </div>
                <div className="flex items-center gap-2 w-[240px]">
                  <InputGroup size="sm">
                    <InputGroupInput placeholder="Search..." size="sm" />
                    <InputGroupAddon>
                      <Mail />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <ListFilter />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-normal">Property</Label>
                  <p className="text-xs text-muted-foreground">Description</p>
                </div>
                <Switch />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export function TeamSwitcher({
  teams,
}: {
  teams: { name: string; logo: React.ElementType; plan: string }[];
}) {
  const [activeTeam] = React.useState(teams[0]);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  if (!activeTeam) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full" variant="ghost">
                <div className="bg-[#FF8F26] flex aspect-square size-8 items-center justify-center rounded-lg min-w-0 shrink-0">
                  <activeTeam.logo />
                </div>
                <div className="flex flex-col flex-1 text-left text-sm gap-y-1 group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-medium text-base tracking-4 leading-tight text-foreground">
                    {activeTeam.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground tracking-4 leading-tight font-normal">
                    {activeTeam.plan}
                  </span>
                </div>
                <ChevronDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-[220px]">
              <DropdownMenuLabel className="flex items-center gap-2">
                <div className="bg-[#FF8F26] flex aspect-square size-8 items-center justify-center rounded-lg">
                  <activeTeam.logo />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="font-medium text-sm tracking-4 leading-tight text-foreground">
                    {activeTeam.name}
                  </span>
                  <span className="text-xs text-muted-foreground tracking-4 leading-tight font-normal">
                    {activeTeam.plan}
                  </span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <User className="size-4" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl h-[600px] p-0">
          <SidebarProvider>
            <SettingsDialogContent />
          </SidebarProvider>
        </DialogContent>
      </Dialog>
    </>
  );
}
