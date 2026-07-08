"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TocItem = {
  id: string;
  label: string;
};

export function OnThisPage({ items }: { items: TocItem[] }) {
  return (
    <aside className="hidden xl:block w-48 shrink-0">
      <div className="sticky top-20">
        <p className="mb-3 text-sm font-medium text-foreground">On this page</p>
        <nav className="flex flex-col gap-2 border-l pl-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export function ComponentBreadcrumbs({ name }: { name: string }) {
  return (
    <nav className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link href="/playground" className="hover:text-foreground">
        Components
      </Link>
      <span>/</span>
      <span className="text-foreground">{name}</span>
    </nav>
  );
}

export function ComponentNav({
  prev,
  next,
}: {
  prev: { slug: string; name: string } | null;
  next: { slug: string; name: string } | null;
}) {
  return (
    <div className="mt-16 flex items-center justify-between gap-4 border-t pt-6">
      {prev ? (
        <Button variant="ghost" asChild className="h-auto flex-col items-start gap-1 px-0">
          <Link href={`/playground/${prev.slug}`}>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ChevronLeft className="size-3.5" />
              Previous
            </span>
            <span className="text-sm font-medium">{prev.name}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
      {next ? (
        <Button
          variant="ghost"
          asChild
          className="h-auto flex-col items-end gap-1 px-0"
        >
          <Link href={`/playground/${next.slug}`}>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              Next
              <ChevronRight className="size-3.5" />
            </span>
            <span className="text-sm font-medium">{next.name}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}

export function DocSection({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 space-y-4", className)}>
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function PreviewBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-[radial-gradient(circle,_var(--border)_1px,_transparent_1px)] [background-size:16px_16px] bg-muted/20 p-10 flex items-center justify-center min-h-[140px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PlaygroundControls({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="divide-y rounded-xl border">
      {children}
    </div>
  );
}

export function PlaygroundControlRow({
  label,
  children,
  stacked = false,
}: {
  label: string;
  children: React.ReactNode;
  stacked?: boolean;
}) {
  return (
    <div
      className={cn(
        "gap-2 px-3 py-2.5",
        stacked
          ? "flex flex-col items-stretch"
          : "flex flex-col sm:flex-row sm:items-center sm:justify-between",
      )}
    >
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div
        className={cn(
          "flex flex-wrap items-start gap-2",
          stacked ? "w-full" : "sm:justify-end",
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SegmentedControl<T extends string>({
  value,
  options,
  onChange,
  wrap = false,
  pills = false,
}: {
  value: T;
  options: T[];
  onChange: (value: T) => void;
  wrap?: boolean;
  pills?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex gap-1.5",
        wrap ? "flex-wrap items-start" : "inline-flex rounded-lg border p-0.5",
        pills && "w-full",
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "text-xs font-medium capitalize transition-colors",
            pills || wrap
              ? cn(
                  "rounded-full border px-2.5 py-1",
                  value === option
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted-foreground hover:text-foreground",
                )
              : cn(
                  "rounded-md px-2.5 py-1",
                  value === option
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                ),
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function CodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-xl border bg-muted/40 p-4 text-sm leading-relaxed",
        className,
      )}
    >
      <code>{code}</code>
    </pre>
  );
}

export function ApiTable({
  rows,
}: {
  rows: { name: string; type: string; default?: string; description: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/30 text-left">
            <th className="px-4 py-3 font-medium">Prop</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Default</th>
            <th className="px-4 py-3 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b last:border-0 align-top">
              <td className="px-4 py-3 font-mono text-xs">{row.name}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                {row.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                {row.default ?? "—"}
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
