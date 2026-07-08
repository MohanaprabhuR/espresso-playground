export type ApiRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export type PlaygroundControl =
  | {
      type: "text";
      key: string;
      label: string;
      defaultValue: string;
      disabledWhen?: (state: Record<string, unknown>) => boolean;
    }
  | {
      type: "segmented";
      key: string;
      label: string;
      options: readonly string[];
      defaultValue: string;
    }
  | {
      type: "boolean";
      key: string;
      label: string;
      defaultValue: boolean;
      disabledWhen?: (state: Record<string, unknown>) => boolean;
    }
  | {
      type: "number";
      key: string;
      label: string;
      defaultValue: number;
      min?: number;
      max?: number;
    };

export type PlaygroundConfig = {
  slug: string;
  controls: PlaygroundControl[];
  Preview: React.ComponentType<{ state: Record<string, unknown> }>;
  buildCode: (state: Record<string, unknown>) => string;
  Examples?: React.ComponentType;
  examplesTitle?: string;
  examplesDescription?: string;
  apiRows: ApiRow[];
};

export function getDefaultState(
  controls: PlaygroundControl[],
): Record<string, unknown> {
  return controls.reduce<Record<string, unknown>>((acc, control) => {
    acc[control.key] = control.defaultValue;
    return acc;
  }, {});
}

export function formatProp(
  key: string,
  value: unknown,
  defaultValue?: unknown,
): string | null {
  if (value === defaultValue) return null;
  if (value === false || value === "") return null;
  if (typeof value === "boolean") return value ? key : null;
  if (typeof value === "number") return `${key}={${value}}`;
  return `${key}="${value}"`;
}

export function buildComponentCode({
  imports,
  component,
  props,
  defaults = {},
  children,
  multiline = false,
}: {
  imports: string[];
  component: string;
  props: Record<string, unknown>;
  defaults?: Record<string, unknown>;
  children?: string;
  multiline?: boolean;
}) {
  const propLines = Object.entries(props)
    .map(([key, value]) => formatProp(key, value, defaults[key]))
    .filter(Boolean);

  const open = multiline
    ? [`<${component}`, ...propLines.map((p) => `  ${p}`), ">"]
        .filter((line, i) => i === 0 || propLines.length > 0 || line === ">")
        .join("\n")
        .replace(/\n>$/, ">")
    : `<${component}${propLines.length ? ` ${propLines.join(" ")}` : ""}>`;

  if (!children) {
    return [...imports, "", open.replace(/>$/, " />")].join("\n");
  }

  return [
    ...imports,
    "",
    multiline && propLines.length
      ? `<${component}\n${propLines.map((p) => `  ${p}`).join("\n")}\n>`
      : `<${component}${propLines.length ? ` ${propLines.join(" ")}` : ""}>`,
    children,
    `</${component}>`,
  ].join("\n");
}
