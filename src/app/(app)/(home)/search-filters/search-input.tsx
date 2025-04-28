"use client";

import { ListFilterIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CategoriesSidebar } from "./categories-sidebar";
import { CustomCategory } from "../types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  disabled?: boolean;
  data: CustomCategory[];
}

export const SearchInput = ({ disabled, data }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar
        data={data}
        onOpenChange={setIsSidebarOpen}
        open={isSidebarOpen}
      />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/50" />
        <Input
          disabled={disabled}
          className="pl-8"
          placeholder="Search Products"
        />
      </div>
      {/* TODO: Add categories view all button */}
      <Button
        variant="reverse"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsSidebarOpen(true)}>
        <ListFilterIcon />
      </Button>
      {/* TODO: Add library button */}
    </div>
  );
};
