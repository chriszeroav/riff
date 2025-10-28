import { AddUser } from "@/components/users";

export default function UsersPage() {
  return (
    <div className="p-4 grid grid-rows-[auto_1fr] gap-4">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <AddUser />
      </section>
      <section></section>
    </div>
  );
}
