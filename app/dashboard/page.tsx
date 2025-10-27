import { auth } from "@/auth";
import { SignoutButton } from "@/components/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <main>
      Dashboard
      <SignoutButton />
    </main>
  );
}
