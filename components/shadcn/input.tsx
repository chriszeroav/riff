import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-neutral-400 border-neutral-500 h-10 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-on-background aria-invalid:border-red-500",
        className
      )}
      {...props}
    />
  );
}

export { Input };
