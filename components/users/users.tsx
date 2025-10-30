import { FC } from "react";
import { Users as UsersTable } from "@/reports/users";
import { fetchUsers } from "@/services/users";

interface UsersProps {}

export const Users: FC<UsersProps> = async () => {
  const { data, error, success } = await fetchUsers(1, 10);

  if (!data || !success) {
    return <p>Error al cargar los usuarios: {error}</p>;
  }

  return (
    <section className="grid grid-rows-[auto_1fr]">
      <div>
        <p>{data.total}</p>
      </div>
      <UsersTable data={data.data} />
    </section>
  );
};
