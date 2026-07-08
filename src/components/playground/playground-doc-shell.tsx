"use client";

import { usePathname } from "next/navigation";

import {
  getPlaygroundComponent,
  getPlaygroundNeighbors,
} from "@/lib/playground-components";
import {
  ComponentBreadcrumbs,
  ComponentNav,
} from "./component-doc-parts";

export function PlaygroundDocShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const slug = pathname.replace("/playground/", "");
  const isIndex = pathname === "/playground" || !slug || slug === pathname;

  if (isIndex) {
    return <>{children}</>;
  }

  const component = getPlaygroundComponent(slug);
  if (!component) {
    return <div className="flex-1 p-8">{children}</div>;
  }

  const { prev, next } = getPlaygroundNeighbors(slug);

  return (
    <div className="flex flex-1 min-w-0">
      <div className="flex-1 min-w-0 px-6 py-8 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <ComponentBreadcrumbs name={component.name} />
          <header className="mb-10 space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">
              {component.name}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              {component.description}
            </p>
          </header>
          <div className="space-y-12">{children}</div>
          <ComponentNav prev={prev} next={next} />
        </div>
      </div>
    </div>
  );
}
