"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItemProps[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  const pathname = usePathname();
  const isLargeDevice = useMediaQuery("(min-width : 993px)");

  useEffect(() => {
    if (isLargeDevice) {
      onOpenChange(false);
    }
  }, [isLargeDevice, onOpenChange]);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="transition-none p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-auto overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className={cn(
                "w-full text-left p-4 text-main-foreground flex items-center text-base font-medium hover:bg-black hover:text-white",
                pathname === item.href && "bg-black text-white"
              )}>
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/sign-in"
              className="w-full text-left p-4 text-main-foreground flex items-center text-base font-medium hover:bg-black hover:text-white">
              Login
            </Link>
            <Link
              href="/sign-up"
              className="w-full text-left p-4 text-main-foreground flex items-center text-base font-medium hover:bg-black hover:text-white">
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
