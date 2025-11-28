import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; // import your sidebar component
import { Toaster } from "@/components/ui/sonner"; // optional toast notifications

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <Sidebar>
                <SidebarHeader>Game Plan Table</SidebarHeader>
                <SidebarContent>
                  <SidebarMenuItem>Table</SidebarMenuItem>
                  <SidebarMenuItem>Link</SidebarMenuItem>
                </SidebarContent>
              </Sidebar>
              <main className="flex-1 p-6 overflow-auto">{children}</main>

              <Toaster />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
