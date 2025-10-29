"use client";

import { UserEntity } from "@/types/users";
import { useEffect, useState } from "react";
import { fetchUsers } from "@/services/users";
import { toast } from "sonner";

export const useGetUsers = (
  page: number,
  take: number
): [UserEntity[], boolean, number] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await fetchUsers(page, take);

      if (!response.success) {
        throw new Error(response.error);
      }

      setUsers(response.data.users);
      setTotal(response.data.total);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }

      toast.error("Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return [users, loading, total];
};
