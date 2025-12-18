import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import CrmSidebar from "./crm-sidebar";
import { Header } from "@/components/ui/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  AlignJustify,
  Calendar,
  ChevronDown,
  CircleGauge,
  Columns2,
  FileText,
  LayoutGrid,
  MapPin,
  Menu,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlashIcon } from "../../../public/images/svg/slashIcon";

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
              <CrmSidebar />
              <div className="w-full min-w-0">
                <Header>
                  <Breadcrumb>
                    <BreadcrumbList size="md" className="items-start">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Leads</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <SlashIcon />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <Select defaultValue="list">
                          <SelectTrigger
                            size="sm"
                            variant="ghost"
                            icon={<ChevronDown />}
                            className="font-medium px-1.25 text-lg leading-none"
                          >
                            <SelectValue placeholder="List View" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="list">
                              <Menu className="size-4" /> List view
                            </SelectItem>
                            <SelectItem value="kanban">
                              <Columns2 className="size-4" />
                              Kanban view
                            </SelectItem>
                            <SelectItem value="calendar">
                              <Calendar className="size-4" />
                              Calendar
                            </SelectItem>
                            <SelectSeparator />
                            <SelectItem value="product">
                              <span>🔆</span> Product - sales
                            </SelectItem>
                            <SelectItem value="support">
                              <span>⚓</span>Support
                            </SelectItem>
                            <SelectItem value="board">
                              <span>📌</span>Board- highest sales
                            </SelectItem>
                            <SelectItem value="pinned">
                              <MapPin className="size-4" /> Board pinned
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>

                  <Button>
                    <Plus />
                    Create
                  </Button>
                </Header>
                <main className="flex-1 flex overflow-auto">{children}</main>
              </div>
              <Toaster />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
