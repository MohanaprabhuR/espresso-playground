"use client";

import { toast } from "sonner";
import {
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Diamond,
  Ellipsis,
  Globe,
  Image,
  LayoutGrid,
  MousePointer2,
  Plane,
  Play,
  Plus,
  Settings,
  Share2,
  Sparkles,
  Square,
  Type,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import { Tag } from "@/components/ui/tags";
import { Header } from "@/components/ui/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlashIcon } from "../../../public/images/svg/slashIcon";
import {
  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from "@/components/ui/notification";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { type PlaygroundConfig } from "@/lib/playground-configs/types";

export const sonnerConfig: PlaygroundConfig = {
  slug: "sonner",
  controls: [
    {
      type: "text",
      key: "message",
      label: "message",
      defaultValue: "Event has been created",
    },
    {
      type: "segmented",
      key: "type",
      label: "type",
      options: ["default", "success", "error"],
      defaultValue: "default",
    },
  ],
  Preview: ({ state }) => (
    <Button
      variant="outline"
      onClick={() => {
        const msg = String(state.message);
        if (state.type === "success") toast.success(msg);
        else if (state.type === "error") toast.error(msg);
        else toast(msg);
      }}
    >
      Show toast
    </Button>
  ),
  buildCode: (state) =>
    [
      `import { toast } from "sonner";`,
      `import { Button } from "@/components/ui/button";`,
      "",
      `<Button onClick={() => toast${state.type === "success" ? ".success" : state.type === "error" ? ".error" : ""}("${state.message}")}>`,
      `  Show toast`,
      `</Button>`,
    ].join("\n"),
  apiRows: [
    { name: "message", type: "string", description: "Toast message text." },
  ],
};

export const notificationConfig: PlaygroundConfig = {
  slug: "notification",
  controls: [
    { type: "text", key: "title", label: "title", defaultValue: "New message" },
    {
      type: "text",
      key: "description",
      label: "description",
      defaultValue: "You have a new notification.",
    },
    {
      type: "boolean",
      key: "longText",
      label: "longText",
      defaultValue: false,
    },
    { type: "boolean", key: "action", label: "action", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Notification
      className="w-full max-w-sm"
      longText={Boolean(state.longText)}
      action={Boolean(state.action)}
    >
      <NotificationContent>
        <NotificationTitle>{String(state.title)}</NotificationTitle>
        <NotificationDescription>
          {String(state.description)}
        </NotificationDescription>
      </NotificationContent>
      {state.action ? (
        <Button variant="ghost" size="sm">
          View
        </Button>
      ) : null}
    </Notification>
  ),
  buildCode: (state) =>
    [
      `import { Button } from "@/components/ui/button";`,
      `import { Notification, NotificationContent, NotificationDescription, NotificationTitle } from "@/components/ui/notification";`,
      "",
      `<Notification${state.longText ? " longText" : ""}${state.action ? " action" : ""}>`,
      `  <NotificationContent>`,
      `    <NotificationTitle>${state.title}</NotificationTitle>`,
      `    <NotificationDescription>${state.description}</NotificationDescription>`,
      `  </NotificationContent>`,
      state.action ? `  <Button variant="ghost">View</Button>` : null,
      `</Notification>`,
    ]
      .filter(Boolean)
      .join("\n"),
  apiRows: [
    {
      name: "longText",
      type: "boolean",
      default: "false",
      description: "Expanded layout with description.",
    },
    {
      name: "action",
      type: "boolean",
      default: "false",
      description: "Action button layout.",
    },
    {
      name: "notificationPanel",
      type: "boolean",
      description: "Panel layout variant.",
    },
    { name: "modal", type: "boolean", description: "Centered modal layout." },
  ],
};

export const tagsConfig: PlaygroundConfig = {
  slug: "tags",
  controls: [
    { type: "text", key: "label", label: "label", defaultValue: "Design" },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["solid", "subtle", "destructive", "outline", "ghost"],
      defaultValue: "solid",
    },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["sm", "md", "lg"],
      defaultValue: "sm",
    },
    {
      type: "segmented",
      key: "theme",
      label: "theme",
      options: ["default", "blue", "green", "amber", "red", "violet"],
      defaultValue: "default",
    },
    {
      type: "boolean",
      key: "disabled",
      label: "disabled",
      defaultValue: false,
    },
  ],
  Preview: ({ state }) => (
    <Tag
      variant={state.variant as "solid"}
      size={state.size as "sm"}
      theme={state.theme as "default"}
      disabled={Boolean(state.disabled)}
    >
      {String(state.label)}
    </Tag>
  ),
  buildCode: (state) =>
    [
      `import { Tag } from "@/components/ui/tags";`,
      "",
      `<Tag variant="${state.variant}" size="${state.size}" theme="${state.theme}"${state.disabled ? " disabled" : ""}>`,
      `  ${state.label}`,
      `</Tag>`,
    ].join("\n"),
  Examples: () => (
    <div className="flex flex-wrap gap-2 items-start">
      {(["solid", "subtle", "outline", "ghost", "destructive"] as const).map(
        (v) => (
          <Tag key={v} variant={v}>
            {v}
          </Tag>
        ),
      )}
    </div>
  ),
  examplesTitle: "Variants",
  apiRows: [
    {
      name: "variant",
      type: "string",
      default: '"solid"',
      description: "Tag style.",
    },
    { name: "size", type: "string", default: '"sm"', description: "Tag size." },
    {
      name: "theme",
      type: "string",
      default: '"default"',
      description: "Color theme.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable tag.",
    },
  ],
};

export const calendarConfig: PlaygroundConfig = {
  slug: "calendar",
  controls: [],
  Preview: () => <Calendar mode="single" className="rounded-md border" />,
  buildCode: () =>
    [
      `import { Calendar } from "@/components/ui/calendar";`,
      "",
      `<Calendar mode="single" className="rounded-md border" />`,
    ].join("\n"),
  apiRows: [
    {
      name: "mode",
      type: "string",
      default: '"single"',
      description: "Selection mode.",
    },
  ],
};

function BuilderLogo() {
  return <div className="size-5 shrink-0 rounded bg-blue-600" />;
}

function HeaderBreadcrumbDemo() {
  return (
    <Header className="rounded-lg border">
      <Breadcrumb className="min-w-0">
        <BreadcrumbList size="md">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Plane className="size-4" />
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">General</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Task</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Open source frappe products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex shrink-0 items-center gap-x-2">
        <span className="text-sm text-muted-foreground">4/6</span>
        <Select defaultValue="day">
          <SelectTrigger size="sm" icon={<ChevronDown className="size-4" />}>
            <SelectValue placeholder="Day" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
          </SelectContent>
        </Select>
        <Button iconOnly variant="ghost" size="sm" aria-label="Previous">
          <ChevronLeft className="size-4" />
        </Button>
        <Button iconOnly variant="ghost" size="sm" aria-label="Next">
          <ChevronRight className="size-4" />
        </Button>
        <Button iconOnly variant="ghost" aria-label="More options">
          <Ellipsis className="size-4" />
        </Button>
        <Button>
          <Check className="size-4" />
          Mark complete
        </Button>
      </div>
    </Header>
  );
}

function HeaderWorkspaceDemo() {
  return (
    <Header className="rounded-lg border">
      <Button variant="ghost" className="gap-2 px-2">
        <BuilderLogo />
        Builder
        <ChevronDown className="size-4 text-muted-foreground" />
      </Button>
      <div className="flex items-center gap-2">
        <Button variant="ghost">
          <BookOpen className="size-4" />
          Learning resources
        </Button>
        <Button variant="ghost">
          <Sparkles className="size-4" />
          Templates
        </Button>
        <Button>
          <Plus className="size-4" />
          New Project
        </Button>
        <Avatar size="2xl" shape="circle">
          <AvatarImage
            src="https://mockmind-api.uifaces.co/content/human/80.jpg"
            alt="User"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </Header>
  );
}

function HeaderEditorDemo() {
  return (
    <Header className="rounded-lg border">
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="gap-1 px-2" aria-label="Workspace">
          <BuilderLogo />
          <ChevronDown className="size-4 text-muted-foreground" />
        </Button>
        <ButtonGroup>
          <Button iconOnly variant="ghost" aria-label="Shape">
            <Square className="size-4" />
          </Button>
          <Button iconOnly variant="ghost" aria-label="Select">
            <MousePointer2 className="size-4" />
          </Button>
          <Button iconOnly variant="ghost" aria-label="Text">
            <Type className="size-4" />
          </Button>
          <Button iconOnly variant="ghost" aria-label="Image">
            <Image className="size-4" />
          </Button>
          <Button iconOnly variant="ghost" aria-label="Grid">
            <LayoutGrid className="size-4" />
          </Button>
        </ButtonGroup>
      </div>
      <Button variant="ghost" className="text-muted-foreground">
        My page - pages/my-page-c3c8
        <ChevronDown className="size-4" />
      </Button>
      <div className="flex items-center gap-2">
        <Button iconOnly variant="ghost" aria-label="Settings">
          <Settings className="size-4" />
        </Button>
        <Button iconOnly variant="ghost" aria-label="Preview">
          <Play className="size-4" />
        </Button>
        <Button variant="secondary">
          <Share2 className="size-4" />
          Share
        </Button>
        <Button>
          <Globe className="size-4" />
          Publish
        </Button>
        <Avatar size="2xl" shape="circle">
          <AvatarImage
            src="https://mockmind-api.uifaces.co/content/human/80.jpg"
            alt="User"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </Header>
  );
}

const headerDemos = {
  breadcrumb: HeaderBreadcrumbDemo,
  workspace: HeaderWorkspaceDemo,
  editor: HeaderEditorDemo,
} as const;

export const headerConfig: PlaygroundConfig = {
  slug: "header",
  controls: [
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["breadcrumb", "workspace", "editor"],
      defaultValue: "breadcrumb",
    },
  ],
  Preview: ({ state }) => {
    const variant = state.variant as keyof typeof headerDemos;
    const Demo = headerDemos[variant] ?? HeaderBreadcrumbDemo;

    return (
      <div className="w-full overflow-x-auto">
        <Demo />
      </div>
    );
  },
  buildCode: (state) => {
    const variant = String(state.variant);

    if (variant === "workspace") {
      return [
        `import { Header } from "@/components/ui/header";`,
        `import { Button } from "@/components/ui/button";`,
        `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";`,
        "",
        `<Header>`,
        `  <Button variant="ghost">`,
        `    <span className="size-5 rounded bg-blue-600" />`,
        `    Builder`,
        `  </Button>`,
        `  <div className="flex items-center gap-2">`,
        `    <Button variant="ghost">Learning resources</Button>`,
        `    <Button variant="ghost">Templates</Button>`,
        `    <Button>New Project</Button>`,
        `    <Avatar size="2xl"><AvatarImage src="..." /><AvatarFallback>U</AvatarFallback></Avatar>`,
        `  </div>`,
        `</Header>`,
      ].join("\n");
    }

    if (variant === "editor") {
      return [
        `import { Header } from "@/components/ui/header";`,
        `import { Button } from "@/components/ui/button";`,
        `import { ButtonGroup } from "@/components/ui/button-group";`,
        `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";`,
        "",
        `<Header>`,
        `  <div className="flex items-center gap-2">{/* logo + tools */}</div>`,
        `  <Button variant="ghost">My page - pages/my-page-c3c8</Button>`,
        `  <div className="flex items-center gap-2">`,
        `    <Button variant="secondary">Share</Button>`,
        `    <Button>Publish</Button>`,
        `    <Avatar size="2xl"><AvatarImage src="..." /><AvatarFallback>U</AvatarFallback></Avatar>`,
        `  </div>`,
        `</Header>`,
      ].join("\n");
    }

    return [
      `import { Header } from "@/components/ui/header";`,
      `import { Button } from "@/components/ui/button";`,
      `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";`,
      `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";`,
      "",
      `<Header>`,
      `  <Breadcrumb>`,
      `    <BreadcrumbList size="md">`,
      `      <BreadcrumbItem><BreadcrumbLink href="#">Products</BreadcrumbLink></BreadcrumbItem>`,
      `      <BreadcrumbSeparator />`,
      `      <BreadcrumbItem><BreadcrumbPage>Open source frappe products</BreadcrumbPage></BreadcrumbItem>`,
      `    </BreadcrumbList>`,
      `  </Breadcrumb>`,
      `  <div className="flex items-center gap-2">`,
      `    <span className="text-sm text-muted-foreground">4/6</span>`,
      `    <Select defaultValue="day"><SelectTrigger size="sm"><SelectValue /></SelectTrigger></Select>`,
      `    <Button><Check /> Mark complete</Button>`,
      `  </div>`,
      `</Header>`,
    ].join("\n");
  },
  Examples: () => (
    <div className="flex w-full flex-col gap-4">
      <HeaderBreadcrumbDemo />
      <HeaderWorkspaceDemo />
      <HeaderEditorDemo />
    </div>
  ),
  examplesTitle: "Header layouts",
  examplesDescription:
    "Breadcrumb status bar, workspace header, and editor toolbar.",
  apiRows: [
    {
      name: "children",
      type: "ReactNode",
      description:
        "Left and right header sections composed with buttons, breadcrumbs, and avatars.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional classes for the header container.",
    },
  ],
};

export const fieldConfig: PlaygroundConfig = {
  slug: "field",
  controls: [
    { type: "text", key: "label", label: "label", defaultValue: "Email" },
    {
      type: "text",
      key: "hint",
      label: "hint",
      defaultValue: "We'll never share your email.",
    },
    {
      type: "segmented",
      key: "orientation",
      label: "orientation",
      options: ["vertical", "horizontal", "responsive"],
      defaultValue: "vertical",
    },
  ],
  Preview: ({ state }) => (
    <FieldGroup className="w-full max-w-sm">
      <Field orientation={state.orientation as "vertical"}>
        <FieldLabel>{String(state.label)}</FieldLabel>
        <Input placeholder="you@example.com" />
        <FieldDescription>{String(state.hint)}</FieldDescription>
      </Field>
    </FieldGroup>
  ),
  buildCode: (state) =>
    [
      `import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";`,
      `import { Input } from "@/components/ui/input";`,
      "",
      `<FieldGroup>`,
      `  <Field orientation="${state.orientation}">`,
      `    <FieldLabel>${state.label}</FieldLabel>`,
      `    <Input placeholder="you@example.com" />`,
      `    <FieldDescription>${state.hint}</FieldDescription>`,
      `  </Field>`,
      `</FieldGroup>`,
    ].join("\n"),
  apiRows: [
    {
      name: "orientation",
      type: "string",
      default: '"vertical"',
      description: "Field layout direction.",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "Field label, input, hint.",
    },
  ],
};

export const inputGroupConfig: PlaygroundConfig = {
  slug: "input-group",
  controls: [
    {
      type: "text",
      key: "placeholder",
      label: "placeholder",
      defaultValue: "Search...",
    },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["default", "outline"],
      defaultValue: "default",
    },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    {
      type: "segmented",
      key: "status",
      label: "status",
      options: ["default", "success", "warning", "error"],
      defaultValue: "default",
    },
  ],
  Preview: ({ state }) => (
    <InputGroup
      className="max-w-xs"
      variant={state.variant as "default"}
      size={state.size as "md"}
      status={state.status as "default"}
    >
      <InputGroupAddon>
        <Bell className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder={String(state.placeholder)} />
    </InputGroup>
  ),
  buildCode: (state) =>
    [
      `import { Bell } from "lucide-react";`,
      `import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";`,
      "",
      `<InputGroup variant="${state.variant}" size="${state.size}"${state.status !== "default" ? ` status="${state.status}"` : ""}>`,
      `  <InputGroupAddon><Bell className="size-4" /></InputGroupAddon>`,
      `  <InputGroupInput placeholder="${state.placeholder}" />`,
      `</InputGroup>`,
    ].join("\n"),
  apiRows: [
    {
      name: "variant",
      type: "string",
      default: '"default"',
      description: "Input group style.",
    },
    {
      name: "size",
      type: "string",
      default: '"md"',
      description: "Input group size.",
    },
    { name: "status", type: "string", description: "Validation status." },
  ],
};

export const itemConfig: PlaygroundConfig = {
  slug: "item",
  controls: [
    { type: "text", key: "title", label: "title", defaultValue: "Item title" },
    {
      type: "text",
      key: "description",
      label: "description",
      defaultValue: "Item description text.",
    },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["default", "outline", "muted"],
      defaultValue: "default",
    },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["default", "sm"],
      defaultValue: "default",
    },
  ],
  Preview: ({ state }) => (
    <Item
      className="w-full max-w-sm"
      variant={state.variant as "default"}
      size={state.size as "default"}
    >
      <ItemMedia variant="icon">
        <Diamond className="size-4" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{String(state.title)}</ItemTitle>
        <ItemDescription>{String(state.description)}</ItemDescription>
      </ItemContent>
    </Item>
  ),
  buildCode: (state) =>
    [
      `import { Diamond } from "lucide-react";`,
      `import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";`,
      "",
      `<Item variant="${state.variant}" size="${state.size}">`,
      `  <ItemMedia variant="icon"><Diamond className="size-4" /></ItemMedia>`,
      `  <ItemContent>`,
      `    <ItemTitle>${state.title}</ItemTitle>`,
      `    <ItemDescription>${state.description}</ItemDescription>`,
      `  </ItemContent>`,
      `</Item>`,
    ].join("\n"),
  apiRows: [
    {
      name: "variant",
      type: "string",
      default: '"default"',
      description: "Item surface style.",
    },
    {
      name: "size",
      type: "string",
      default: '"default"',
      description: "Item padding size.",
    },
  ],
};
