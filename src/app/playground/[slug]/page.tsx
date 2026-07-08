import { playgroundComponents } from "@/lib/playground-components";
import { PlaygroundPageClient } from "./playground-page-client";

export function generateStaticParams() {
  return playgroundComponents.map((component) => ({
    slug: component.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PlaygroundPageClient slug={slug} />;
}
