import { AddUser, Users } from "@/components/users";
import { Suspense } from "react";

export default async function UsersPage() {
  return (
    <div className="p-4 grid grid-rows-[auto_1fr] gap-4 overflow-auto">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <AddUser />
      </section>
      <Suspense fallback={<div>Cargando usuarios...</div>}>
        <Users />
      </Suspense>
    </div>
  );
}
