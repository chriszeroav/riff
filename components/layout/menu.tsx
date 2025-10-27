"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DashboardIcon, UsersIcon } from "@/components/icons";
import { useMenu } from "@/contexts/menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shadcn";

interface MenuProps {}

export const Menu: FC<MenuProps> = () => {
  const { open } = useMenu();

  return (
    <aside
      className={cn(
        "bg-primary flex flex-col p-4 gap-2",
        open ? "w-[250px]" : "w-20",
        "transition-all duration-300"
      )}
    >
      <MenuItem href="/dashboard" label="Dashboard" icon={DashboardIcon} />
      <MenuItem href="/dashboard/users" label="Users" icon={UsersIcon} />
    </aside>
  );
};

export const MenuItem: FC<{
  href: string;
  label: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}> = ({ href, label, icon: Icon }) => {
  const [openTooltip, setOpenTooltip] = useState(false);
  const { open } = useMenu();

  const handleChangeOpen = open ? undefined : setOpenTooltip;

  return (
    <Tooltip open={openTooltip} onOpenChange={handleChangeOpen}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className="inline-flex items-center overflow-hidden hover:bg-white/10"
        >
          <div className="min-w-12 size-12 inline-flex items-center justify-center ">
            <Icon className="size-8 text-white" />
          </div>
          <span className="text-white font-medium text-lg">{label}</span>
        </Link>
      </TooltipTrigger>

      <TooltipContent side="right">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};
