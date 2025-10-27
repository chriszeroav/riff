import { Button, buttonVariants } from "@/components/shadcn";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={cn(
        "min-h-dvh",
        "flex flex-col items-center justify-center  gap-2"
      )}
    >
      <h1 className="text-4xl font-semibold">Bienvenido a Riff</h1>
      <Link
        className={buttonVariants({ size: "lg", className: "text-xl" })}
        href="/auth/signin"
      >
        Iniciar sesión
      </Link>
    </main>
  );
}
