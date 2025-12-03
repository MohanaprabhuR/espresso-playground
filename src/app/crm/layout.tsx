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
  ChevronDown,
  CircleGauge,
  FileText,
  LayoutGrid,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const viewOptions = [
  {
    value: "list-view",
    label: "List View",
    icon: <AlignJustify />,
  },
  {
    value: "report-view",
    label: "Report View",
    icon: <FileText />,
  },
  {
    value: "kanban-view",
    label: "Kanban View",
    icon: <LayoutGrid />,
  },
  {
    value: "dashboard-view",
    label: "Dashboard View",
    icon: <CircleGauge />,
  },
];

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
                <Header className="pl-5">
                  <Breadcrumb>
                    <BreadcrumbList size="md">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Leads</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator type="slash" />
                      <BreadcrumbItem>
                        <Select defaultValue="list-view">
                          <SelectTrigger
                            variant="ghost"
                            icon={<ChevronDown />}
                            className="font-medium"
                          >
                            <SelectValue placeholder="List View" />
                          </SelectTrigger>
                          <SelectContent>
                            {viewOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.icon}
                                {option.label}
                              </SelectItem>
                            ))}
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
