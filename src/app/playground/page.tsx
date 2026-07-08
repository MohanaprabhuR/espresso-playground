import Link from "next/link";

import { playgroundNavItems } from "@/lib/playground-nav";

export default function PlaygroundHome() {

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-10 lg:px-10">
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Getting Started</p>
        <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Browse Espresso UI components with live previews, interactive
          playgrounds, and API references. Select a component from the sidebar
          to get started.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {playgroundNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.slug}
              href={item.url}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent/50"
            >
              {Icon ? (
                <Icon className="size-4 shrink-0 text-muted-foreground" />
              ) : null}
              <span className="flex-1 font-medium">{item.title}</span>
              {item.badge ? (
                <span className="text-xs text-muted-foreground">{item.badge}</span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <p className="text-sm text-muted-foreground">
        {playgroundNavItems.length} components available
      </p>
    </div>
  );
}
