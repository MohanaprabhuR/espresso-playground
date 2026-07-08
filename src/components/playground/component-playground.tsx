"use client";

import { useMemo, useState } from "react";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ApiTable,
  CodeBlock,
  DocSection,
  PlaygroundControlRow,
  PreviewBox,
  SegmentedControl,
} from "@/components/playground/component-doc-parts";
import {
  getDefaultState,
  type PlaygroundConfig,
  type PlaygroundControl,
} from "@/lib/playground-configs/types";
import { getPlaygroundConfig } from "@/lib/playground-configs";
import {
  baseColorDots,
  baseColorLabels,
  playgroundBaseColors,
  playgroundRadiusOptions,
  radiusLabels,
  usePlaygroundBaseColor,
  type PlaygroundBaseColor,
  type PlaygroundRadius,
} from "@/components/playground/playground-base-color-context";

function ControlField({
  control,
  state,
  onChange,
  stacked = false,
}: {
  control: PlaygroundControl;
  state: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
  stacked?: boolean;
}) {
  const disabled =
    control.type === "text" || control.type === "boolean"
      ? control.disabledWhen?.(state)
      : false;

  if (control.type === "text") {
    return (
      <PlaygroundControlRow label={control.label} stacked={stacked}>
        <input
          value={String(state[control.key] ?? "")}
          onChange={(e) => onChange(control.key, e.target.value)}
          disabled={disabled}
          className="h-8 w-full rounded-md border bg-transparent px-3 text-sm disabled:opacity-50"
        />
      </PlaygroundControlRow>
    );
  }

  if (control.type === "segmented") {
    return (
      <PlaygroundControlRow label={control.label} stacked={stacked}>
        <SegmentedControl
          value={String(state[control.key])}
          options={[...control.options]}
          onChange={(value) => onChange(control.key, value)}
          wrap
        />
      </PlaygroundControlRow>
    );
  }

  if (control.type === "boolean") {
    return (
      <PlaygroundControlRow label={control.label} stacked={stacked}>
        <Switch
          checked={Boolean(state[control.key])}
          onCheckedChange={(checked) => onChange(control.key, checked)}
          disabled={disabled}
        />
      </PlaygroundControlRow>
    );
  }

  return (
    <PlaygroundControlRow label={control.label} stacked={stacked}>
      <input
        type="number"
        value={Number(state[control.key])}
        min={control.min}
        max={control.max}
        onChange={(e) => onChange(control.key, Number(e.target.value))}
        className="h-8 w-full rounded-md border bg-transparent px-3 text-sm"
      />
    </PlaygroundControlRow>
  );
}

export function ComponentPlayground({ config }: { config: PlaygroundConfig }) {
  const defaults = useMemo(() => getDefaultState(config.controls), [config]);
  const [state, setState] = useState(() => defaults);
  const [showProperties, setShowProperties] = useState(true);
  const { baseColor, setBaseColor, radius, setRadius, baseColorStyle } =
    usePlaygroundBaseColor();
  const code = useMemo(() => config.buildCode(state), [config, state]);
  const Preview = config.Preview;
  const Examples = config.Examples;

  const variantControl = config.controls.find(
    (control) => control.type === "segmented" && control.key === "variant",
  );
  const otherControls = config.controls.filter(
    (control) => !(control.type === "segmented" && control.key === "variant"),
  );

  const handleChange = (key: string, value: unknown) => {
    setState((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "iconOnly" && value === true) {
        next.iconLeft = false;
        next.iconRight = false;
      }
      return next;
    });
  };

  return (
    <div
      className="playground-radius-scope space-y-12"
      data-playground-radius={radius}
      style={baseColorStyle}
    >
      <DocSection
        id="playground"
        title="Playground"
        description="Customize props and copy the generated code."
      >
        <div className="relative xl:pr-[324px]">
          <div className="min-w-0 space-y-4 overflow-hidden rounded-xl border">
            <PreviewBox className="rounded-none border-0 border-b">
              <Preview state={state} />
            </PreviewBox>
            <div className="border-t-0">
              <CodeBlock code={code} className="rounded-none border-0" />
            </div>
          </div>

          <aside className="mt-4 flex min-h-[420px] flex-col overflow-hidden rounded-xl border bg-background xl:fixed xl:top-24 xl:right-6 xl:mt-0 xl:h-[calc(100vh-7rem)] xl:w-[300px]">
            <div className="space-y-4 border-b p-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Variant</p>
                {variantControl && variantControl.type === "segmented" ? (
                  <SegmentedControl
                    value={String(state.variant)}
                    options={[...variantControl.options]}
                    onChange={(value) => handleChange("variant", value)}
                    wrap
                    pills
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No variants for this component.
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Select a button to edit its properties.
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-1 overflow-y-auto p-2">
              {showProperties ? (
                <>
                  <PlaygroundControlRow label="base color" stacked>
                    <Select
                      value={baseColor}
                      onValueChange={(value) =>
                        setBaseColor(value as PlaygroundBaseColor)
                      }
                    >
                      <SelectTrigger className="w-full" variant="outline">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {playgroundBaseColors.map((color) => (
                          <SelectItem key={color} value={color}>
                            <span className="flex items-center gap-2">
                              <span
                                className={`size-2.5 rounded-full ${baseColorDots[color]}`}
                              />
                              {baseColorLabels[color]}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </PlaygroundControlRow>

                  <PlaygroundControlRow label="radius" stacked>
                    <Select
                      value={radius}
                      onValueChange={(value) =>
                        setRadius(value as PlaygroundRadius)
                      }
                    >
                      <SelectTrigger className="w-full" variant="outline">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {playgroundRadiusOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {radiusLabels[option]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </PlaygroundControlRow>

                  {otherControls.map((control) => (
                    <ControlField
                      key={control.key}
                      control={control}
                      state={state}
                      onChange={handleChange}
                      stacked
                    />
                  ))}
                </>
              ) : null}
            </div>

            {!showProperties ? (
              <div className="space-y-2 border-t p-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowProperties(true)}
                >
                  Show properties
                </Button>
              </div>
            ) : null}
          </aside>
        </div>
      </DocSection>

      {Examples ? (
        <DocSection
          id="examples"
          title={config.examplesTitle ?? "Examples"}
          description={config.examplesDescription}
        >
          <Examples />
        </DocSection>
      ) : null}

      <DocSection id="api" title="API Reference">
        <ApiTable rows={config.apiRows} />
      </DocSection>
    </div>
  );
}

export function PlaygroundPage({ slug }: { slug: string }) {
  const config = getPlaygroundConfig(slug);
  if (!config) return null;
  return <ComponentPlayground config={config} />;
}
