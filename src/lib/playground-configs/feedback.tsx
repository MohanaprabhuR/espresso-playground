"use client";

import { Diamond, CircleAlert, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  buildComponentCode,
  type PlaygroundConfig,
} from "@/lib/playground-configs/types";

const alertVariants = [
  "default",
  "information",
  "success",
  "warning",
  "error",
] as const;

export const alertConfig: PlaygroundConfig = {
  slug: "alert",
  controls: [
    {
      type: "text",
      key: "title",
      label: "title",
      defaultValue: "Your trial ends soon!",
    },
    {
      type: "text",
      key: "description",
      label: "description",
      defaultValue: "Upgrade now to continue enjoying all features.",
    },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: alertVariants,
      defaultValue: "default",
    },
    { type: "boolean", key: "showIcon", label: "icon", defaultValue: false },
    {
      type: "boolean",
      key: "longText",
      label: "longText",
      defaultValue: false,
    },
    { type: "boolean", key: "action", label: "action", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Alert
      variant={state.variant as (typeof alertVariants)[number]}
      action={Boolean(state.action)}
      longText={Boolean(state.longText)}
      className="w-full max-w-md"
    >
      {state.showIcon ? <CircleAlert /> : null}
      {state.longText ? (
        <AlertContent>
          <AlertTitle>{String(state.title)}</AlertTitle>
          <AlertDescription>{String(state.description)}</AlertDescription>
        </AlertContent>
      ) : (
        <AlertTitle>{String(state.title)}</AlertTitle>
      )}
      {state.action ? (
        <Button variant="ghost" iconOnly>
          <X />
        </Button>
      ) : null}
    </Alert>
  ),
  buildCode: (state) => {
    const props: Record<string, unknown> = {
      variant: state.variant,
      action: state.action,
      longText: state.longText,
    };
    const imports = [
      `import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/components/ui/alert";`,
      state.showIcon ? `import { CircleAlert } from "lucide-react";` : null,
      state.action ? `import { Button } from "@/components/ui/button";` : null,
      state.action ? `import { X } from "lucide-react";` : null,
    ].filter(Boolean) as string[];

    const body = state.longText
      ? [
          state.showIcon ? `  <CircleAlert />` : null,
          `  <AlertContent>`,
          `    <AlertTitle>${state.title}</AlertTitle>`,
          `    <AlertDescription>${state.description}</AlertDescription>`,
          `  </AlertContent>`,
          state.action
            ? `  <Button variant="ghost" iconOnly>\n    <X />\n  </Button>`
            : null,
        ]
          .filter(Boolean)
          .join("\n")
      : [
          state.showIcon ? `  <CircleAlert />` : null,
          `  <AlertTitle>${state.title}</AlertTitle>`,
          state.action
            ? `  <Button variant="ghost" iconOnly>\n    <X />\n  </Button>`
            : null,
        ]
          .filter(Boolean)
          .join("\n");

    return [
      ...imports,
      "",
      `<Alert`,
      ...Object.entries(props)
        .filter(([, v]) => v && v !== "default")
        .map(([k, v]) => `  ${k}${v === true ? "" : `="${v}"`}`),
      ">",
      body,
      `</Alert>`,
    ].join("\n");
  },
  Examples: () => (
    <div className="grid gap-3">
      {alertVariants.map((v) => (
        <Alert key={v} variant={v}>
          <AlertTitle className="capitalize">{v}</AlertTitle>
        </Alert>
      ))}
    </div>
  ),
  examplesTitle: "Themes",
  apiRows: [
    {
      name: "variant",
      type: "string",
      default: '"default"',
      description: "Visual style.",
    },
    {
      name: "action",
      type: "boolean",
      default: "false",
      description: "Action button layout.",
    },
    {
      name: "longText",
      type: "boolean",
      default: "false",
      description: "Title + description layout.",
    },
  ],
};

export const badgeConfig: PlaygroundConfig = {
  slug: "badges",
  controls: [
    { type: "text", key: "label", label: "label", defaultValue: "Badge" },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["default", "secondary", "destructive", "outline", "ghost"],
      defaultValue: "default",
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
  ],
  Preview: ({ state }) => (
    <Badge
      variant={state.variant as "default"}
      size={state.size as "sm"}
      theme={state.theme as "default"}
    >
      {String(state.label)}
    </Badge>
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Badge } from "@/components/ui/badge";`],
      component: "Badge",
      props: { variant: state.variant, size: state.size, theme: state.theme },
      defaults: { variant: "default", size: "sm", theme: "default" },
      children: String(state.label),
    }),
  Examples: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 items-start">
        {(
          ["default", "secondary", "destructive", "outline", "ghost"] as const
        ).map((v) => (
          <Badge key={v} variant={v}>
            {v}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-start">
        {(["default", "blue", "green", "amber", "red", "violet"] as const).map(
          (t) => (
            <Badge key={t} theme={t}>
              {t}
            </Badge>
          ),
        )}
      </div>
    </div>
  ),
  examplesTitle: "Variants & themes",
  apiRows: [
    {
      name: "variant",
      type: "string",
      default: '"default"',
      description: "Badge style.",
    },
    {
      name: "size",
      type: "string",
      default: '"sm"',
      description: "Badge size.",
    },
    {
      name: "theme",
      type: "string",
      default: '"default"',
      description: "Color theme token.",
    },
  ],
};

export const progressConfig: PlaygroundConfig = {
  slug: "progress",
  controls: [
    {
      type: "number",
      key: "value",
      label: "value",
      defaultValue: 60,
      min: 0,
      max: 100,
    },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["default", "split-rounded", "split-square"],
      defaultValue: "default",
    },
    {
      type: "number",
      key: "intervals",
      label: "intervals",
      defaultValue: 5,
      min: 2,
      max: 12,
    },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["xs", "sm", "md", "lg"],
      defaultValue: "sm",
    },
    {
      type: "boolean",
      key: "showLabel",
      label: "showLabel",
      defaultValue: false,
    },
  ],
  Preview: ({ state }) => {
    const variant = String(state.variant);
    const splitProps =
      variant === "split-rounded"
        ? { intervals: Number(state.intervals), square: false }
        : variant === "split-square"
          ? { intervals: Number(state.intervals), square: true }
          : {};

    return (
      <div className="w-full max-w-sm">
        <Progress
          value={Number(state.value)}
          size={state.size as "sm"}
          showLabel={Boolean(state.showLabel)}
          labelName="Storage"
          {...splitProps}
        />
      </div>
    );
  },
  buildCode: (state) => {
    const variant = String(state.variant);
    const props: Record<string, unknown> = {
      value: state.value,
      size: state.size,
      showLabel: state.showLabel,
    };

    if (variant === "split-rounded") {
      props.intervals = state.intervals;
      props.square = false;
    } else if (variant === "split-square") {
      props.intervals = state.intervals;
      props.square = true;
    }

    return buildComponentCode({
      imports: [`import { Progress } from "@/components/ui/progress";`],
      component: "Progress",
      props,
      defaults: { size: "sm", showLabel: false },
    });
  },
  Examples: () => (
    <div className="space-y-8 max-w-sm">
      <div className="space-y-3">
        <p className="text-sm font-medium">Default</p>
        {(["xs", "sm", "md", "lg"] as const).map((size) => (
          <Progress key={size} value={60} size={size} />
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium">Split rounded</p>
        {(["xs", "sm", "md", "lg"] as const).map((size) => (
          <Progress key={size} value={60} size={size} intervals={5} />
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium">Split square</p>
        {(["xs", "sm", "md", "lg"] as const).map((size) => (
          <Progress key={size} value={60} size={size} intervals={5} square />
        ))}
      </div>
    </div>
  ),
  examplesTitle: "Variants & sizes",
  apiRows: [
    {
      name: "value",
      type: "number",
      description: "Progress percentage 0-100.",
    },
    {
      name: "size",
      type: "string",
      default: '"sm"',
      description: "Bar height.",
    },
    {
      name: "intervals",
      type: "number",
      description: "Split the bar into segments. Omit for continuous bar.",
    },
    {
      name: "square",
      type: "boolean",
      default: "false",
      description: "Square segment ends when using intervals.",
    },
    {
      name: "showLabel",
      type: "boolean",
      default: "false",
      description: "Show label row.",
    },
  ],
};

export const skeletonConfig: PlaygroundConfig = {
  slug: "skeleton",
  controls: [
    {
      type: "segmented",
      key: "shape",
      label: "shape",
      options: ["text", "circle", "card"],
      defaultValue: "text",
    },
  ],
  Preview: ({ state }) => {
    if (state.shape === "circle")
      return <Skeleton className="size-12 rounded-full" />;
    if (state.shape === "card")
      return <Skeleton className="h-24 w-64 rounded-xl" />;
    return <Skeleton className="h-4 w-48" />;
  },
  buildCode: (state) => {
    const className =
      state.shape === "circle"
        ? "size-12 rounded-full"
        : state.shape === "card"
          ? "h-24 w-64 rounded-xl"
          : "h-4 w-48";
    return buildComponentCode({
      imports: [`import { Skeleton } from "@/components/ui/skeleton";`],
      component: "Skeleton",
      props: { className },
      defaults: {},
    });
  },
  Examples: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  ),
  apiRows: [
    {
      name: "className",
      type: "string",
      description: "Size and shape via Tailwind classes.",
    },
  ],
};

export const spinnerConfig: PlaygroundConfig = {
  slug: "spinner",
  controls: [
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["sm", "md", "lg", "xl"],
      defaultValue: "sm",
    },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: ["gray", "blue", "red", "green", "amber"],
      defaultValue: "gray",
    },
    { type: "boolean", key: "track", label: "track", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Spinner
      size={state.size as "sm"}
      variant={state.variant as "gray"}
      track={Boolean(state.track)}
    />
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Spinner } from "@/components/ui/spinner";`],
      component: "Spinner",
      props: { size: state.size, variant: state.variant, track: state.track },
      defaults: { size: "sm", variant: "gray", track: false },
    }),
  Examples: () => (
    <div className="mt-2 flex flex-wrap gap-6 pb-2">
      {(["sm", "md", "lg", "xl"] as const).map((s) => (
        <Spinner key={s} size={s} />
      ))}
      {(["gray", "blue", "green", "amber", "red"] as const).map((v) => (
        <Spinner key={v} variant={v} track />
      ))}
    </div>
  ),
  examplesTitle: "Sizes & variants",
  apiRows: [
    {
      name: "size",
      type: "string",
      default: '"sm"',
      description: "Spinner size.",
    },
    {
      name: "variant",
      type: "string",
      default: '"gray"',
      description: "Spinner color.",
    },
    {
      name: "track",
      type: "boolean",
      default: "false",
      description: "Show background track ring.",
    },
  ],
};

export const emptyConfig: PlaygroundConfig = {
  slug: "empty",
  controls: [
    {
      type: "text",
      key: "title",
      label: "title",
      defaultValue: "No results found",
    },
    {
      type: "text",
      key: "description",
      label: "description",
      defaultValue: "Try adjusting your search filters.",
    },
  ],
  Preview: ({ state }) => (
    <Empty className="w-full max-w-sm border rounded-xl">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Diamond />
        </EmptyMedia>
        <EmptyTitle>{String(state.title)}</EmptyTitle>
        <EmptyDescription>{String(state.description)}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Create new</Button>
      </EmptyContent>
    </Empty>
  ),
  buildCode: (state) =>
    [
      `import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";`,
      `import { Button } from "@/components/ui/button";`,
      `import { Diamond } from "lucide-react";`,
      "",
      `<Empty>`,
      `  <EmptyHeader>`,
      `    <EmptyMedia variant="icon"><Diamond /></EmptyMedia>`,
      `    <EmptyTitle>${state.title}</EmptyTitle>`,
      `    <EmptyDescription>${state.description}</EmptyDescription>`,
      `  </EmptyHeader>`,
      `  <EmptyContent><Button>Create new</Button></EmptyContent>`,
      `</Empty>`,
    ].join("\n"),
  apiRows: [
    {
      name: "children",
      type: "ReactNode",
      description: "Empty state content.",
    },
  ],
};

export const tooltipConfig: PlaygroundConfig = {
  slug: "tooltip",
  controls: [
    {
      type: "text",
      key: "content",
      label: "content",
      defaultValue: "Add to library",
    },
    {
      type: "segmented",
      key: "side",
      label: "side",
      options: ["top", "bottom", "left", "right"],
      defaultValue: "top",
    },
    { type: "boolean", key: "arrow", label: "arrow", defaultValue: true },
    { type: "boolean", key: "resize", label: "resize", defaultValue: true },
  ],
  Preview: ({ state }) => (
    <div className="flex min-h-32 w-full items-center justify-center p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent
          side={state.side as "top"}
          arrow={Boolean(state.arrow)}
          resize={Boolean(state.resize)}
        >
          {String(state.content)}
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  buildCode: (state) => {
    const props = [
      state.side !== "top" ? `side="${state.side}"` : null,
      state.arrow === false ? `arrow={false}` : null,
      state.resize === false ? `resize={false}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    return [
      `import { Button } from "@/components/ui/button";`,
      `import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";`,
      "",
      `<Tooltip>`,
      `  <TooltipTrigger asChild>`,
      `    <Button variant="outline">Hover me</Button>`,
      `  </TooltipTrigger>`,
      `  <TooltipContent${props ? ` ${props}` : ""}>${state.content}</TooltipContent>`,
      `</Tooltip>`,
    ].join("\n");
  },
  Examples: () => (
    <div className="grid grid-cols-2 gap-8 p-4">
      {(["top", "bottom", "left", "right"] as const).map((side) => (
        <div key={side} className="flex min-h-24 items-center justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
          </Tooltip>
        </div>
      ))}
    </div>
  ),
  examplesTitle: "Sides",
  apiRows: [
    { name: "content", type: "ReactNode", description: "Tooltip body text." },
    {
      name: "side",
      type: "string",
      default: '"top"',
      description: "Preferred side: top, bottom, left, or right.",
    },
    {
      name: "arrow",
      type: "boolean",
      default: "true",
      description: "Show pointer arrow on the tooltip.",
    },
    {
      name: "resize",
      type: "boolean",
      default: "true",
      description: "Constrain tooltip width with max-w-40.",
    },
  ],
};

export const alertDialogConfig: PlaygroundConfig = {
  slug: "alert-dialog",
  controls: [
    {
      type: "text",
      key: "title",
      label: "title",
      defaultValue: "Are you sure?",
    },
    {
      type: "text",
      key: "description",
      label: "description",
      defaultValue: "This action cannot be undone.",
    },
  ],
  Preview: ({ state }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{String(state.title)}</AlertDialogTitle>
          <AlertDialogDescription>
            {String(state.description)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  buildCode: (state) =>
    [
      `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";`,
      `import { Button } from "@/components/ui/button";`,
      "",
      `<AlertDialog>`,
      `  <AlertDialogTrigger asChild><Button variant="outline">Open</Button></AlertDialogTrigger>`,
      `  <AlertDialogContent>`,
      `    <AlertDialogHeader>`,
      `      <AlertDialogTitle>${state.title}</AlertDialogTitle>`,
      `      <AlertDialogDescription>${state.description}</AlertDialogDescription>`,
      `    </AlertDialogHeader>`,
      `    <AlertDialogFooter>`,
      `      <AlertDialogCancel>Cancel</AlertDialogCancel>`,
      `      <AlertDialogAction>Continue</AlertDialogAction>`,
      `    </AlertDialogFooter>`,
      `  </AlertDialogContent>`,
      `</AlertDialog>`,
    ].join("\n"),
  apiRows: [
    { name: "open", type: "boolean", description: "Controlled open state." },
  ],
};
