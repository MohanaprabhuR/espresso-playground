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
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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
                <Header className="py-0">
                  <Breadcrumb>
                    <BreadcrumbList size="md">
                      <BreadcrumbPage className="p-0">
                        <BreadcrumbLink href="#">Inbox</BreadcrumbLink>
                      </BreadcrumbPage>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div>
                    <Tabs defaultValue="primary" variant="underline">
                      <TabsList className="border-none">
                        <TabsTrigger value="primary" className="py-4">
                          Primary <Badge variant="secondary">24</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="updates" className="py-4">
                          Updates
                        </TabsTrigger>
                        <TabsTrigger value="social" className="py-4">
                          Social
                        </TabsTrigger>
                        <TabsTrigger value="promotions" className="py-4">
                          Promotions
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
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
                <main className="flex-1 flex  overflow-auto">{children}</main>
              </div>
              <Toaster />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
