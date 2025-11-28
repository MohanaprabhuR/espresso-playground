import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system">
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
