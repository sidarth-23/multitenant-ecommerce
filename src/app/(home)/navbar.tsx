"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/consts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="noShadow"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems: { href: string; children: string }[] = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen,  setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav
      className={cn("h-20 flex border-b-2 justify-between font-medium bg-white")}>
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", font.className)}>
          {APP_NAME}
        </span>
      </Link>

      <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} items={navbarItems}/>

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="noShadow"
          className="border-0 border-l-2 rounded-none h-full bg-white hover:bg-main hover:text-black px-12 text-lg">
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          variant="noShadow"
          className="border-0 border-l-2 rounded-none h-full bg-black text-white hover:bg-main hover:text-black px-12 text-lg">
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center pr-4">
        <Button variant="noShadow" size="icon" className="bg-transparent border-none hover:bg-main/20" onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
