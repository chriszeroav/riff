"use client";

import { AddUserFormValues } from "@/types/users";
import { useRouter } from "next/navigation";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const useCreateUser = (): [
  (values: AddUserFormValues) => Promise<string>,
  boolean
] => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createUser = async (values: AddUserFormValues) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      router.refresh();

      return "Usuario creado exitosamente";
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return [createUser, loading];
};
