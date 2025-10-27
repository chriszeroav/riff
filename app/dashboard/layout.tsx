import { Header, Menu } from "@/components/layout";
import { MenuProvider } from "@/contexts/menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MenuProvider>
      <div className="h-screen flex flex-col bg-background">
        <Header />
        <div className="grow grid grid-cols-[auto_1fr]">
          <Menu />
          {children}
        </div>
      </div>
    </MenuProvider>
  );
}
