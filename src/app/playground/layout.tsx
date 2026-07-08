import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { PlaygroundSidebar } from "@/components/playground/playground-sidebar";
import { PlaygroundDocShell } from "@/components/playground/playground-doc-shell";
import { PlaygroundBaseColorProvider } from "@/components/playground/playground-base-color-context";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Component Playground | Espresso",
  description: "Browse and test shadcn/ui components",
};

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlaygroundBaseColorProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <PlaygroundSidebar />
          <main className="flex flex-1 min-w-0 flex-col">
            <PlaygroundDocShell>
              <div className="legacy-demo [&_.text-xl.text-primary]:sr-only [&>div>div>h1]:sr-only">
                {children}
              </div>
            </PlaygroundDocShell>
          </main>
          <Toaster />
        </div>
      </SidebarProvider>
    </PlaygroundBaseColorProvider>
  );
}
