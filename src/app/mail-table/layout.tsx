import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import MailTableSidebar from "./mail-table-sidebar";
import { Header } from "@/components/ui/header";
import { LogoStart } from "../../../public/images/svg/logo-star";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Grip, Pencil, RefreshCcw, Search } from "lucide-react";

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
              <MailTableSidebar />
              <div className="w-full min-w-0">
                <Header>
                  <Breadcrumb>
                    <BreadcrumbList size="md">
                      <BreadcrumbPage>
                        <BreadcrumbLink href="#">Inbox</BreadcrumbLink>
                      </BreadcrumbPage>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="flex gap-x-2">
                    <Button iconOnly variant="ghost">
                      <Search />
                    </Button>
                    <Button iconOnly variant="ghost">
                      <RefreshCcw />
                    </Button>
                    <Button iconOnly variant="ghost">
                      <Grip />
                    </Button>
                    <Button iconOnly variant="ghost">
                      <LogoStart />
                    </Button>
                    <Button>
                      <Pencil /> Compose
                    </Button>
                  </div>
                </Header>
                <main className="flex-1 flex  pb-2.5 overflow-auto">
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
