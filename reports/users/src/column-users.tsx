import { UserEntity } from "@/types/users";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserEntity>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "role",
    header: "Rol",
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de Creación",
  },
];
