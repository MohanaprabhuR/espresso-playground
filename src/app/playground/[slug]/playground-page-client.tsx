"use client";

import { PlaygroundPage } from "@/components/playground/component-playground";

export function PlaygroundPageClient({ slug }: { slug: string }) {
  return <PlaygroundPage slug={slug} />;
}
