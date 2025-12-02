import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import HelpDeskSidebar from "./help-desk-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
              <HelpDeskSidebar />
              <div className="w-full">
                <Header>
                  <Breadcrumb>
                    <BreadcrumbList size="md">
                      <BreadcrumbPage>
                        <BreadcrumbLink href="#">Tickets</BreadcrumbLink>
                      </BreadcrumbPage>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <Button>
                    <Plus /> New Ticket
                  </Button>
                </Header>
                <main className="flex-1 flex px-5 py-2.5 overflow-auto">
                  {children}
                </main>
              </div>
              <Toaster />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
