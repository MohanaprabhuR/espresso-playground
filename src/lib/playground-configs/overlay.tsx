"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { type PlaygroundConfig } from "@/lib/playground-configs/types";

export const modalConfig: PlaygroundConfig = {
  slug: "modal",
  controls: [
    { type: "text", key: "title", label: "title", defaultValue: "Dialog title" },
    { type: "text", key: "description", label: "description", defaultValue: "Dialog description text." },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md", "lg"], defaultValue: "sm" },
  ],
  Preview: ({ state }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open modal</Button>
      </DialogTrigger>
      <DialogContent size={state.size as "sm"}>
        <DialogHeader>
          <DialogTitle>{String(state.title)}</DialogTitle>
          <DialogDescription>{String(state.description)}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  buildCode: (state) =>
    [
      `import { Button } from "@/components/ui/button";`,
      `import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";`,
      "",
      `<Dialog>`,
      `  <DialogTrigger asChild><Button variant="outline">Open</Button></DialogTrigger>`,
      `  <DialogContent size="${state.size}">`,
      `    <DialogHeader>`,
      `      <DialogTitle>${state.title}</DialogTitle>`,
      `      <DialogDescription>${state.description}</DialogDescription>`,
      `    </DialogHeader>`,
      `  </DialogContent>`,
      `</Dialog>`,
    ].join("\n"),
  apiRows: [
    { name: "size", type: "string", default: '"sm"', description: "Dialog width." },
    { name: "open", type: "boolean", description: "Controlled open state." },
  ],
};

export const popoverConfig: PlaygroundConfig = {
  slug: "popover",
  controls: [
    { type: "text", key: "content", label: "content", defaultValue: "Popover content" },
  ],
  Preview: ({ state }) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>{String(state.content)}</PopoverContent>
    </Popover>
  ),
  buildCode: (state) =>
    [
      `import { Button } from "@/components/ui/button";`,
      `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";`,
      "",
      `<Popover>`,
      `  <PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger>`,
      `  <PopoverContent>${state.content}</PopoverContent>`,
      `</Popover>`,
    ].join("\n"),
  apiRows: [
    { name: "children", type: "ReactNode", description: "Popover content." },
  ],
};

export const sheetConfig: PlaygroundConfig = {
  slug: "sheet",
  controls: [
    { type: "segmented", key: "side", label: "side", options: ["right", "left", "top", "bottom"], defaultValue: "right" },
    { type: "text", key: "title", label: "title", defaultValue: "Edit profile" },
  ],
  Preview: ({ state }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side={state.side as "right"}>
        <SheetHeader>
          <SheetTitle>{String(state.title)}</SheetTitle>
          <SheetDescription>Sheet panel content.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
  buildCode: (state) =>
    [
      `import { Button } from "@/components/ui/button";`,
      `import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";`,
      "",
      `<Sheet>`,
      `  <SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger>`,
      `  <SheetContent side="${state.side}">`,
      `    <SheetHeader><SheetTitle>${state.title}</SheetTitle></SheetHeader>`,
      `  </SheetContent>`,
      `</Sheet>`,
    ].join("\n"),
  apiRows: [
    { name: "side", type: "string", default: '"right"', description: "Edge to slide from." },
  ],
};

export const dropdownConfig: PlaygroundConfig = {
  slug: "dropdown",
  controls: [
    { type: "text", key: "label", label: "label", defaultValue: "Open menu" },
  ],
  Preview: ({ state }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{String(state.label)}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  buildCode: (state) =>
    [
      `import { Button } from "@/components/ui/button";`,
      `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";`,
      "",
      `<DropdownMenu>`,
      `  <DropdownMenuTrigger asChild><Button variant="outline">${state.label}</Button></DropdownMenuTrigger>`,
      `  <DropdownMenuContent>`,
      `    <DropdownMenuItem>Profile</DropdownMenuItem>`,
      `  </DropdownMenuContent>`,
      `</DropdownMenu>`,
    ].join("\n"),
  apiRows: [
    { name: "children", type: "ReactNode", description: "Menu items." },
  ],
};

export const contextMenuConfig: PlaygroundConfig = {
  slug: "context-menu",
  controls: [],
  Preview: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  buildCode: () =>
    [
      `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";`,
      "",
      `<ContextMenu>`,
      `  <ContextMenuTrigger>Right click</ContextMenuTrigger>`,
      `  <ContextMenuContent>`,
      `    <ContextMenuItem>Back</ContextMenuItem>`,
      `  </ContextMenuContent>`,
      `</ContextMenu>`,
    ].join("\n"),
  apiRows: [
    { name: "children", type: "ReactNode", description: "Context menu items." },
  ],
};
