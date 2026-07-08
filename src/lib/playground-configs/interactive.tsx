"use client";

import { useMemo } from "react";
import { Diamond } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  buildComponentCode,
  type PlaygroundConfig,
} from "@/lib/playground-configs/types";

const buttonVariants = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "shadow",
] as const;

const buttonSizes = ["sm", "md", "lg", "xl", "2xl"] as const;

export const buttonConfig: PlaygroundConfig = {
  slug: "button",
  controls: [
    {
      type: "text",
      key: "label",
      label: "label",
      defaultValue: "Save",
      disabledWhen: (s) => Boolean(s.iconOnly),
    },
    {
      type: "segmented",
      key: "variant",
      label: "variant",
      options: buttonVariants,
      defaultValue: "secondary",
    },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: buttonSizes,
      defaultValue: "sm",
    },
    {
      type: "boolean",
      key: "iconLeft",
      label: "iconLeft",
      defaultValue: false,
      disabledWhen: (s) => Boolean(s.iconOnly),
    },
    {
      type: "boolean",
      key: "iconRight",
      label: "iconRight",
      defaultValue: false,
      disabledWhen: (s) => Boolean(s.iconOnly),
    },
    {
      type: "boolean",
      key: "iconOnly",
      label: "iconOnly",
      defaultValue: false,
    },
    {
      type: "boolean",
      key: "disabled",
      label: "disabled",
      defaultValue: false,
    },
  ],
  Preview: ({ state }) => (
    <Button
      variant={state.variant as (typeof buttonVariants)[number]}
      size={state.size as (typeof buttonSizes)[number]}
      iconOnly={Boolean(state.iconOnly)}
      disabled={Boolean(state.disabled)}
    >
      {state.iconLeft && !state.iconOnly ? <Diamond /> : null}
      {state.iconOnly ? <Diamond /> : String(state.label)}
      {state.iconRight && !state.iconOnly ? <Diamond /> : null}
    </Button>
  ),
  buildCode: (state) => {
    const imports = [
      `import { Button } from "@/components/ui/button";`,
      state.iconLeft || state.iconRight || state.iconOnly
        ? `import { Diamond } from "lucide-react";`
        : null,
    ].filter(Boolean) as string[];

    if (state.iconOnly) {
      return [
        ...imports,
        "",
        `<Button`,
        state.variant !== "primary" ? `  variant="${state.variant}"` : null,
        state.size !== "sm" ? `  size="${state.size}"` : null,
        `  iconOnly`,
        state.disabled ? `  disabled` : null,
        `>`,
        `  <Diamond />`,
        `</Button>`,
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      ...imports,
      "",
      `<Button`,
      state.variant !== "primary" ? `  variant="${state.variant}"` : null,
      state.size !== "sm" ? `  size="${state.size}"` : null,
      state.disabled ? `  disabled` : null,
      `>`,
      state.iconLeft ? `  <Diamond />` : null,
      `  ${state.label}`,
      state.iconRight ? `  <Diamond />` : null,
      `</Button>`,
    ]
      .filter(Boolean)
      .join("\n");
  },
  Examples: () => (
    <div className="space-y-4">
      {buttonVariants.map((v) => (
        <div key={v} className="flex flex-wrap gap-2 items-start">
          {buttonSizes.map((s) => (
            <Button key={s} variant={v} size={s}>
              <Diamond />
              {v}
              <Diamond />
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  examplesDescription: "All variants across sizes sm to 2xl.",
  apiRows: [
    {
      name: "variant",
      type: "string",
      default: '"primary"',
      description: "Visual style.",
    },
    {
      name: "size",
      type: "string",
      default: '"sm"',
      description: "Button size.",
    },
    {
      name: "iconOnly",
      type: "boolean",
      default: "false",
      description: "Icon-only mode.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable button.",
    },
  ],
};

export const buttonGroupConfig: PlaygroundConfig = {
  slug: "buttongroup",
  controls: [
    {
      type: "segmented",
      key: "orientation",
      label: "orientation",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
    {
      type: "segmented",
      key: "size",
      label: "size",
      options: ["sm", "md", "lg"],
      defaultValue: "sm",
    },
    {
      type: "boolean",
      key: "destructive",
      label: "destructive",
      defaultValue: false,
    },
    {
      type: "boolean",
      key: "wrapLayout",
      label: "wrapLayout",
      defaultValue: false,
    },
  ],
  Preview: ({ state }) => (
    <ButtonGroup
      orientation={state.orientation as "horizontal"}
      size={state.size as "sm"}
      destructive={Boolean(state.destructive)}
      wrapLayout={Boolean(state.wrapLayout)}
    >
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
  buildCode: (state) =>
    [
      `import { Button } from "@/components/ui/button";`,
      `import { ButtonGroup } from "@/components/ui/button-group";`,
      "",
      `<ButtonGroup`,
      state.orientation !== "horizontal"
        ? `  orientation="${state.orientation}"`
        : null,
      state.size !== "sm" ? `  size="${state.size}"` : null,
      state.destructive ? `  destructive` : null,
      state.wrapLayout ? `  wrapLayout` : null,
      `>`,
      `  <Button variant="outline">Left</Button>`,
      `  <Button variant="outline">Center</Button>`,
      `  <Button variant="outline">Right</Button>`,
      `</ButtonGroup>`,
    ]
      .filter(Boolean)
      .join("\n"),
  apiRows: [
    {
      name: "orientation",
      type: "string",
      default: '"horizontal"',
      description: "Layout direction.",
    },
    {
      name: "size",
      type: "string",
      default: '"sm"',
      description: "Group spacing size.",
    },
    {
      name: "destructive",
      type: "boolean",
      default: "false",
      description: "Destructive styling.",
    },
    {
      name: "wrapLayout",
      type: "boolean",
      default: "false",
      description: "Allow wrapping.",
    },
  ],
};

export const accordionConfig: PlaygroundConfig = {
  slug: "accordion",
  controls: [
    {
      type: "segmented",
      key: "type",
      label: "type",
      options: ["single", "multiple"],
      defaultValue: "single",
    },
  ],
  Preview: ({ state }) => (
    <Accordion
      type={state.type as "single"}
      collapsible={state.type === "single"}
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It follows WAI-ARIA patterns.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. Fully themeable with Tailwind.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  buildCode: (state) =>
    [
      `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";`,
      "",
      `<Accordion type="${state.type}"${state.type === "single" ? " collapsible" : ""}>`,
      `  <AccordionItem value="item-1">`,
      `    <AccordionTrigger>Title</AccordionTrigger>`,
      `    <AccordionContent>Content</AccordionContent>`,
      `  </AccordionItem>`,
      `</Accordion>`,
    ].join("\n"),
  apiRows: [
    {
      name: "type",
      type: "string",
      default: '"single"',
      description: "single or multiple open items.",
    },
    {
      name: "collapsible",
      type: "boolean",
      description: "Allow closing all items.",
    },
  ],
};
