"use client";

import { FC } from "react";
import { useGetUsers } from "@/hooks/users";
import { Users as UsersTable } from "@/reports/users";
import { useSearchParams } from "next/navigation";

interface UsersProps {}

export const Users: FC<UsersProps> = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const take = searchParams.get("take") ? Number(searchParams.get("take")) : 10;

  const [users, loading, total] = useGetUsers(page, take);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="grid grid-rows-[auto_1fr]">
      <div>
        <p>{total}</p>
      </div>
      <UsersTable data={users} />
    </section>
  );
};
