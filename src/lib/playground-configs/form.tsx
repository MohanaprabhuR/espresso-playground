"use client";

import { Diamond } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  buildComponentCode,
  type PlaygroundConfig,
} from "@/lib/playground-configs/types";

export const inputConfig: PlaygroundConfig = {
  slug: "input",
  controls: [
    { type: "text", key: "placeholder", label: "placeholder", defaultValue: "Enter text..." },
    { type: "segmented", key: "variant", label: "variant", options: ["default", "outline"], defaultValue: "default" },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md", "lg", "xl"], defaultValue: "sm" },
    { type: "segmented", key: "status", label: "status", options: ["default", "success", "warning", "error"], defaultValue: "default" },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Input
      placeholder={String(state.placeholder)}
      variant={state.variant as "default"}
      size={state.size as "md"}
      status={state.status as "default"}
      disabled={Boolean(state.disabled)}
      className="max-w-xs"
    />
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Input } from "@/components/ui/input";`],
      component: "Input",
      props: {
        placeholder: state.placeholder,
        variant: state.variant,
        size: state.size,
        status: state.status,
        disabled: state.disabled,
      },
      defaults: { variant: "default", size: "sm", status: "default", disabled: false },
    }),
  Examples: () => (
    <div className="grid gap-3 max-w-xs">
      {(["sm", "md", "lg", "xl"] as const).map((s) => (
        <Input key={s} size={s} placeholder={`Size ${s}`} />
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    { name: "variant", type: "string", default: '"default"', description: "Input style." },
    { name: "size", type: "string", default: '"sm"', description: "Input size." },
    { name: "status", type: "string", default: '"default"', description: "Validation status." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable input." },
  ],
};

export const textareaConfig: PlaygroundConfig = {
  slug: "textarea",
  controls: [
    { type: "text", key: "placeholder", label: "placeholder", defaultValue: "Write something..." },
    { type: "segmented", key: "variant", label: "variant", options: ["default", "outline", "ghost"], defaultValue: "default" },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md", "lg"], defaultValue: "sm" },
    { type: "segmented", key: "status", label: "status", options: ["default", "success", "warning", "error"], defaultValue: "default" },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Textarea
      placeholder={String(state.placeholder)}
      variant={state.variant as "default"}
      size={state.size as "sm"}
      status={state.status as "default"}
      disabled={Boolean(state.disabled)}
      className="max-w-sm"
    />
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Textarea } from "@/components/ui/textarea";`],
      component: "Textarea",
      props: {
        placeholder: state.placeholder,
        variant: state.variant,
        size: state.size,
        status: state.status,
        disabled: state.disabled,
      },
      defaults: { variant: "default", size: "sm", status: "default", disabled: false },
    }),
  Examples: () => (
    <div className="grid gap-3 max-w-sm">
      {(["sm", "md", "lg"] as const).map((s) => (
        <Textarea key={s} size={s} placeholder={`Size ${s}`} />
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    { name: "variant", type: "string", default: '"default"', description: "Textarea style." },
    { name: "size", type: "string", default: '"sm"', description: "Textarea size." },
    { name: "status", type: "string", default: '"default"', description: "Validation status." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable textarea." },
  ],
};

export const selectConfig: PlaygroundConfig = {
  slug: "select",
  controls: [
    { type: "text", key: "placeholder", label: "placeholder", defaultValue: "Select option" },
    { type: "segmented", key: "variant", label: "variant", options: ["default", "outline", "ghost"], defaultValue: "default" },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md", "lg"], defaultValue: "sm" },
    { type: "segmented", key: "status", label: "status", options: ["default", "success", "warning", "error"], defaultValue: "default" },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Select disabled={Boolean(state.disabled)}>
      <SelectTrigger
        className="w-48"
        variant={state.variant as "default"}
        size={state.size as "sm"}
        status={state.status === "default" ? undefined : (state.status as "success")}
      >
        <SelectValue placeholder={String(state.placeholder)} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
        <SelectItem value="b">Option B</SelectItem>
      </SelectContent>
    </Select>
  ),
  buildCode: (state) =>
    [
      `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";`,
      "",
      `<Select${state.disabled ? " disabled" : ""}>`,
      `  <SelectTrigger variant="${state.variant}" size="${state.size}"${state.status !== "default" ? ` status="${state.status}"` : ""}>`,
      `    <SelectValue placeholder="${state.placeholder}" />`,
      `  </SelectTrigger>`,
      `  <SelectContent>`,
      `    <SelectItem value="a">Option A</SelectItem>`,
      `  </SelectContent>`,
      `</Select>`,
    ].join("\n"),
  Examples: () => (
    <div className="flex flex-wrap gap-3">
      {(["sm", "md", "lg"] as const).map((s) => (
        <Select key={s}>
          <SelectTrigger size={s} className="w-36">
            <SelectValue placeholder={`Size ${s}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option</SelectItem>
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    { name: "variant", type: "string", default: '"default"', description: "Trigger style." },
    { name: "size", type: "string", default: '"sm"', description: "Trigger size." },
    { name: "status", type: "string", description: "success | warning | error on trigger." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable select." },
  ],
};

export const checkboxConfig: PlaygroundConfig = {
  slug: "checkbox",
  controls: [
    { type: "text", key: "label", label: "label", defaultValue: "Accept terms" },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md"], defaultValue: "md" },
    { type: "boolean", key: "checked", label: "checked", defaultValue: false },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Checkbox
      label={String(state.label)}
      size={state.size as "md"}
      checked={Boolean(state.checked)}
      disabled={Boolean(state.disabled)}
    />
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Checkbox } from "@/components/ui/checkbox";`],
      component: "Checkbox",
      props: { label: state.label, size: state.size, checked: state.checked, disabled: state.disabled },
      defaults: { size: "md", checked: false, disabled: false },
    }),
  Examples: () => (
    <div className="flex gap-4">
      <Checkbox size="sm" />
      <Checkbox checked size="sm" />
      <Checkbox checked="indeterminate" size="sm" />
    </div>
  ),
  apiRows: [
    { name: "label", type: "string", description: "Optional label text." },
    { name: "size", type: "string", default: '"md"', description: "Checkbox size." },
    { name: "checked", type: "boolean", description: "Checked state." },
  ],
};

export const switchConfig: PlaygroundConfig = {
  slug: "switch",
  controls: [
    { type: "text", key: "label", label: "label", defaultValue: "Airplane mode" },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md"], defaultValue: "sm" },
    { type: "boolean", key: "checked", label: "checked", defaultValue: false },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Switch
      label={String(state.label)}
      size={state.size as "sm"}
      checked={Boolean(state.checked)}
      disabled={Boolean(state.disabled)}
    />
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Switch } from "@/components/ui/switch";`],
      component: "Switch",
      props: { label: state.label, size: state.size, checked: state.checked, disabled: state.disabled },
      defaults: { size: "sm", checked: false, disabled: false },
    }),
  apiRows: [
    { name: "label", type: "ReactNode", description: "Optional label." },
    { name: "size", type: "string", default: '"sm"', description: "Switch size." },
    { name: "checked", type: "boolean", description: "On/off state." },
  ],
};

export const sliderConfig: PlaygroundConfig = {
  slug: "slider",
  controls: [
    { type: "number", key: "value", label: "value", defaultValue: 50, min: 0, max: 100 },
    { type: "segmented", key: "size", label: "size", options: ["sm", "md", "lg", "xl"], defaultValue: "sm" },
    { type: "boolean", key: "knob", label: "knob", defaultValue: true },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <Slider
      defaultValue={[Number(state.value)]}
      max={100}
      step={1}
      size={state.size as "sm"}
      knob={Boolean(state.knob)}
      disabled={Boolean(state.disabled)}
      className="w-64"
    />
  ),
  buildCode: (state) =>
    buildComponentCode({
      imports: [`import { Slider } from "@/components/ui/slider";`],
      component: "Slider",
      props: {
        defaultValue: `[${state.value}]`,
        max: 100,
        size: state.size,
        knob: state.knob,
        disabled: state.disabled,
      },
      defaults: { size: "sm", knob: true, disabled: false },
    }),
  Examples: () => (
    <div className="space-y-6 max-w-xs">
      {(["sm", "md", "lg", "xl"] as const).map((s) => (
        <Slider key={s} defaultValue={[40]} size={s} knob className="w-full" />
      ))}
    </div>
  ),
  examplesTitle: "Sizes",
  apiRows: [
    { name: "defaultValue", type: "number[]", description: "Initial value(s)." },
    { name: "size", type: "string", default: '"sm"', description: "Track and thumb size." },
    { name: "knob", type: "boolean", default: "false", description: "Show draggable thumb." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
  ],
};

export const radioConfig: PlaygroundConfig = {
  slug: "radio",
  controls: [
    { type: "segmented", key: "size", label: "size", options: ["sm", "md"], defaultValue: "sm" },
    { type: "boolean", key: "disabled", label: "disabled", defaultValue: false },
  ],
  Preview: ({ state }) => (
    <RadioGroup defaultValue="a" disabled={Boolean(state.disabled)}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" size={state.size as "md"} id="a" />
        <Label htmlFor="a">Option A</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" size={state.size as "md"} id="b" />
        <Label htmlFor="b">Option B</Label>
      </div>
    </RadioGroup>
  ),
  buildCode: (state) =>
    [
      `import { Label } from "@/components/ui/label";`,
      `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";`,
      "",
      `<RadioGroup defaultValue="a"${state.disabled ? " disabled" : ""}>`,
      `  <RadioGroupItem value="a" size="${state.size}" />`,
      `</RadioGroup>`,
    ].join("\n"),
  apiRows: [
    { name: "size", type: "string", default: '"sm"', description: "Radio item size." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable group." },
  ],
};
