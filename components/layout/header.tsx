"use client";

import { FC } from "react";
import { Button } from "@/components/shadcn";
import { MenuIcon } from "lucide-react";
import { useMenu } from "@/contexts/menu";
import { SignoutButton } from "@/components/auth";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { toggle } = useMenu();

  return (
    <header className="h-16 bg-white shadow">
      <Button onClick={toggle}>
        <MenuIcon />
      </Button>

      <SignoutButton />
    </header>
  );
};
