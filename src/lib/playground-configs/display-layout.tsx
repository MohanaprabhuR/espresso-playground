"use client";

import { Diamond } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { Spacer } from "@/components/ui/spacer";
import { Divider } from "@/components/ui/divider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  buildComponentCode,
  type PlaygroundConfig,
} from "@/lib/playground-configs/types";
import { cn } from "@/lib/utils";

export const cardConfig: PlaygroundConfig = {
  slug: "card",
  controls: [
    { type: "text", key: "title", label: "title", defaultValue: "Card title" },
    { type: "text", key: "description", label: "description", defaultValue: "Card description text." },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md", "lg"], defaultValue: "md" },
  ],
  Preview: ({ state }) => (
    <Card size={state.size as "md"} className="w-72">
      <CardHeader>
        <CardTitle>{String(state.title)}</CardTitle>
        <CardDescription>{String(state.description)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content area.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
  buildCode: (state) =>
    [
      `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";`,
      "",
      `<Card size="${state.size}">`,
      `  <CardHeader>`,
      `    <CardTitle>${state.title}</CardTitle>`,
      `    <CardDescription>${state.description}</CardDescription>`,
      `  </CardHeader>`,
      `  <CardContent>...</CardContent>`,
      `</Card>`,
    ].join("\n"),
  Examples: () => (
    <div className="flex flex-wrap gap-4">
      {(["sm", "md", "lg"] as const).map((s) => (
        <Card key={s} size={s} className="w-56">
          <CardHeader><CardTitle>Size {s}</CardTitle></CardHeader>
        </Card>
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    { name: "size", type: "string", default: '"md"', description: "Card padding and radius." },
  ],
};

export const avatarConfig: PlaygroundConfig = {
  slug: "avatar",
  controls: [
    { type: "segmented", key: "size", label: "size", options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"], defaultValue: "md" },
    { type: "segmented", key: "shape", label: "shape", options: ["circle", "square"], defaultValue: "circle" },
    { type: "text", key: "fallback", label: "fallback", defaultValue: "FP" },
  ],
  Preview: ({ state }) => (
    <Avatar size={state.size as "md"} shape={state.shape as "circle"}>
      <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" alt="User" />
      <AvatarFallback>{String(state.fallback)}</AvatarFallback>
    </Avatar>
  ),
  buildCode: (state) =>
    [
      `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";`,
      "",
      `<Avatar size="${state.size}">`,
      `  <AvatarImage src="..." alt="User" />`,
      `  <AvatarFallback>${state.fallback}</AvatarFallback>`,
      `</Avatar>`,
    ].join("\n"),
  Examples: () => (
    <div className="flex items-end gap-3 flex-wrap">
      {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const).map((s) => (
        <Avatar key={s} size={s}>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    { name: "size", type: "string", default: '"sm"', description: "Avatar dimensions." },
    { name: "shape", type: "string", default: '"circle"', description: "circle or square." },
  ],
};

export const kbdConfig: PlaygroundConfig = {
  slug: "kbd",
  controls: [
    { type: "text", key: "keys", label: "keys", defaultValue: "⌘ K" },
  ],
  Preview: ({ state }) => (
    <KbdGroup>
      {String(state.keys).split(" ").map((k) => (
        <Kbd key={k}>{k}</Kbd>
      ))}
    </KbdGroup>
  ),
  buildCode: (state) =>
    [
      `import { Kbd, KbdGroup } from "@/components/ui/kbd";`,
      "",
      `<KbdGroup>`,
      ...String(state.keys).split(" ").map((k) => `  <Kbd>${k}</Kbd>`),
      `</KbdGroup>`,
    ].join("\n"),
  apiRows: [
    { name: "children", type: "ReactNode", description: "Key label text." },
  ],
};

export const separatorConfig: PlaygroundConfig = {
  slug: "separator",
  controls: [
    { type: "segmented", key: "orientation", label: "orientation", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
  ],
  Preview: ({ state }) =>
    state.orientation === "vertical" ? (
      <div className="flex h-12 items-center gap-4">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Right</span>
      </div>
    ) : (
      <div className="w-64 space-y-2">
        <p className="text-sm">Above</p>
        <Separator />
        <p className="text-sm">Below</p>
      </div>
    ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Separator } from "@/components/ui/separator";`],
      component: "Separator",
      props: { orientation: state.orientation },
      defaults: { orientation: "horizontal" },
    }),
  apiRows: [
    { name: "orientation", type: "string", default: '"horizontal"', description: "Line direction." },
  ],
};

export const spacerConfig: PlaygroundConfig = {
  slug: "spacer",
  controls: [
    { type: "segmented", key: "size", label: "size", options: ["xs", "sm", "md", "lg", "xl"], defaultValue: "md" },
  ],
  Preview: ({ state }) => (
    <div className="flex items-center rounded-lg border p-2">
      <div className="size-8 rounded bg-muted" />
      <Spacer size={state.size as "md"} />
      <div className="size-8 rounded bg-muted" />
    </div>
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Spacer } from "@/components/ui/spacer";`],
      component: "Spacer",
      props: { size: state.size },
      defaults: { size: "md" },
    }),
  apiRows: [
    { name: "size", type: "string", default: '"md"', description: "Spacing amount." },
  ],
};

export const dividerConfig: PlaygroundConfig = {
  slug: "divider",
  controls: [
    { type: "segmented", key: "orientation", label: "orientation", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
    { type: "boolean", key: "withSlot", label: "withSlot", defaultValue: false },
  ],
  Preview: ({ state }) =>
    state.withSlot ? (
      <Divider orientation={state.orientation as "horizontal"}>
        <Button variant="outline" size="sm">Label</Button>
      </Divider>
    ) : (
      <Divider slot={false} orientation={state.orientation as "horizontal"} className="w-48" />
    ),
  buildCode: (state) =>
    state.withSlot
      ? [
          `import { Divider } from "@/components/ui/divider";`,
          `import { Button } from "@/components/ui/button";`,
          "",
          `<Divider orientation="${state.orientation}">`,
          `  <Button variant="outline">Label</Button>`,
          `</Divider>`,
        ].join("\n")
      : buildComponentCode({
          imports: [`import { Divider } from "@/components/ui/divider";`],
          component: "Divider",
          props: { slot: false, orientation: state.orientation },
          defaults: { orientation: "horizontal" },
        }),
  apiRows: [
    { name: "orientation", type: "string", default: '"horizontal"', description: "Divider direction." },
    { name: "slot", type: "boolean", default: "true", description: "Show center slot content." },
  ],
};

export const scrollAreaConfig: PlaygroundConfig = {
  slug: "scroll-area",
  controls: [
    { type: "number", key: "items", label: "items", defaultValue: 12, min: 4, max: 20 },
  ],
  Preview: ({ state }) => (
    <ScrollArea className="h-40 w-48 rounded-md border">
      <div className="p-3 space-y-2">
        {Array.from({ length: Number(state.items) }, (_, i) => (
          <p key={i} className="text-sm">Item {i + 1}</p>
        ))}
      </div>
    </ScrollArea>
  ),
  buildCode: () =>
    [
      `import { ScrollArea } from "@/components/ui/scroll-area";`,
      "",
      `<ScrollArea className="h-40 w-48 rounded-md border">`,
      `  <div className="p-3">...</div>`,
      `</ScrollArea>`,
    ].join("\n"),
  apiRows: [
    { name: "className", type: "string", description: "Set height/width for scroll container." },
  ],
};

export const ratingConfig: PlaygroundConfig = {
  slug: "rating",
  controls: [
    { type: "number", key: "value", label: "value", defaultValue: 3, min: 0, max: 5 },
    { type: "boolean", key: "readOnly", label: "readOnly", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Rating value={Number(state.value)} readOnly={Boolean(state.readOnly)}>
      {Array.from({ length: 5 }, (_, i) => (
        <RatingButton key={i} />
      ))}
    </Rating>
  ),
  buildCode: (state) =>
    [
      `import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";`,
      "",
      `<Rating value={${state.value}}${state.readOnly ? " readOnly" : ""}>`,
      `  {Array.from({ length: 5 }).map((_, i) => <RatingButton key={i} />)}`,
      `</Rating>`,
    ].join("\n"),
  apiRows: [
    { name: "value", type: "number", description: "Current rating value." },
    { name: "readOnly", type: "boolean", default: "false", description: "Disable interaction." },
  ],
};

export const breadcrumbConfig: PlaygroundConfig = {
  slug: "breadcrumb",
  controls: [
    { type: "text", key: "page", label: "page", defaultValue: "Settings" },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["sm", "md"],
      defaultValue: "sm",
    },
  ],
  Preview: ({ state }) => (
    <Breadcrumb>
      <BreadcrumbList size={state.size as "sm"}>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{String(state.page)}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  buildCode: (state) =>
    [
      `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";`,
      "",
      `<Breadcrumb>`,
      `  <BreadcrumbList${state.size !== "sm" ? ` size="${state.size}"` : ""}>`,
      `    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>`,
      `    <BreadcrumbSeparator />`,
      `    <BreadcrumbItem><BreadcrumbPage>${state.page}</BreadcrumbPage></BreadcrumbItem>`,
      `  </BreadcrumbList>`,
      `</Breadcrumb>`,
    ].join("\n"),
  Examples: () => (
    <div className="space-y-6">
      {(["sm", "md"] as const).map((size) => (
        <Breadcrumb key={size}>
          <BreadcrumbList size={size}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{size}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    {
      name: "size",
      type: "string",
      default: '"sm"',
      description: "Breadcrumb text and link size. Set on BreadcrumbList.",
    },
    {
      name: "children",
      type: "ReactNode",
      description: "Breadcrumb list items.",
    },
  ],
};

export const tabsConfig: PlaygroundConfig = {
  slug: "tabs",
  controls: [
    { type: "text", key: "tab1", label: "tab1", defaultValue: "Account" },
    { type: "text", key: "tab2", label: "tab2", defaultValue: "Password" },
    { type: "segmented", key: "variant", label: "variant", options: ["ghost", "outline", "subtle", "browser", "underline"], defaultValue: "subtle" },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md"], defaultValue: "sm" },
    {
      type: "segmented",
      key: "orientation",
      label: "orientation",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  ],
  Preview: ({ state }) => {
    const orientation = state.orientation as "horizontal" | "vertical";

    return (
      <Tabs
        defaultValue="tab1"
        variant={state.variant as "subtle"}
        size={state.size as "sm"}
        orientation={orientation}
        className={cn(
          orientation === "vertical" ? "w-full max-w-md items-start gap-4" : "w-72",
        )}
      >
        <TabsList>
          <TabsTrigger value="tab1">{String(state.tab1)}</TabsTrigger>
          <TabsTrigger value="tab2">{String(state.tab2)}</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="text-sm">
          {String(state.tab1)} content
        </TabsContent>
        <TabsContent value="tab2" className="text-sm">
          {String(state.tab2)} content
        </TabsContent>
      </Tabs>
    );
  },
  buildCode: (state) =>
    [
      `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";`,
      "",
      `<Tabs defaultValue="tab1" variant="${state.variant}" size="${state.size}"${state.orientation !== "horizontal" ? ` orientation="${state.orientation}"` : ""}>`,
      `  <TabsList>`,
      `    <TabsTrigger value="tab1">${state.tab1}</TabsTrigger>`,
      `    <TabsTrigger value="tab2">${state.tab2}</TabsTrigger>`,
      `  </TabsList>`,
      `  <TabsContent value="tab1">${state.tab1} content</TabsContent>`,
      `  <TabsContent value="tab2">${state.tab2} content</TabsContent>`,
      `</Tabs>`,
    ].join("\n"),
  Examples: () => (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium">Horizontal</p>
        <div className="space-y-6">
          {(["ghost", "outline", "subtle", "browser", "underline"] as const).map((v) => (
            <Tabs key={v} defaultValue="a" variant={v}>
              <TabsList>
                <TabsTrigger value="a">{v}</TabsTrigger>
                <TabsTrigger value="b">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="a">Content</TabsContent>
              <TabsContent value="b">Content</TabsContent>
            </Tabs>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium">Vertical</p>
        <div className="space-y-6">
          {(["ghost", "outline", "subtle", "browser", "underline"] as const).map((v) => (
            <Tabs key={v} defaultValue="a" variant={v} orientation="vertical" className="items-start gap-4">
              <TabsList>
                <TabsTrigger value="a">{v}</TabsTrigger>
                <TabsTrigger value="b">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="a">Content</TabsContent>
              <TabsContent value="b">Content</TabsContent>
            </Tabs>
          ))}
        </div>
      </div>
    </div>
  ),
  examplesTitle: "Variants & orientation",
  apiRows: [
    { name: "variant", type: "string", default: '"subtle"', description: "Tab list style." },
    { name: "size", type: "string", default: '"sm"', description: "Tab trigger size." },
    {
      name: "orientation",
      type: "string",
      default: '"horizontal"',
      description: "Horizontal or vertical tab layout.",
    },
    { name: "defaultValue", type: "string", description: "Initially active tab." },
  ],
};

export const paginationConfig: PlaygroundConfig = {
  slug: "pagination",
  controls: [
    { type: "number", key: "page", label: "page", defaultValue: 2, min: 1, max: 5 },
  ],
  Preview: ({ state }) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        {[1, 2, 3].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink href="#" isActive={p === Number(state.page)}>{p}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  buildCode: () =>
    [
      `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";`,
      "",
      `<Pagination>`,
      `  <PaginationContent>...</PaginationContent>`,
      `</Pagination>`,
    ].join("\n"),
  apiRows: [
    { name: "isActive", type: "boolean", description: "Highlight current page link." },
  ],
};
