import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import DriveTableSidebar from "./drive-table-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine, ChevronDown, Plus } from "lucide-react";
import RightDriveTableSidebar from "./rigth-sidebar";

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
                <div>
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
                  <div className="flex">
                    <main className="flex-1 flex overflow-auto">
                      {children}
                    </main>
                    <RightDriveTableSidebar />
                  </div>
                </div>
              </div>
              <Toaster />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
