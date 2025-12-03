import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import DriveTableSidebar from "./drive-table-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine, ChevronDown, Plus } from "lucide-react";

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
              <DriveTableSidebar />
              <div className="w-full min-w-0">
                <Header>
                  <Breadcrumb>
                    <BreadcrumbList size="md">
                      <BreadcrumbItem>
                        <BreadcrumbPage>My drive</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <Button>
                    <ArrowUpToLine /> Upload
                    <ChevronDown />
                  </Button>
                </Header>
                <main className="flex-1 flex   overflow-auto">{children}</main>
              </div>

              <Toaster />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
