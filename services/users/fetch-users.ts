"use server";

import { ServiceResponse } from "@/types/response";
import { UserEntity } from "@/types/users";
import { format } from "date-fns";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const fetchUsers = async (
  page: number,
  take: number
): Promise<ServiceResponse<UserEntity>> => {
  try {
    const cookieStore = await cookies();

    const response = await fetch(`${API_URL}/users?page=${page}&take=${take}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
    });

    const json = await response.json();

    if (!json.success) return json;

    const mappedUsers = json.data.users.map(
      (user: any): UserEntity => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        createdAt: format(new Date(user.created_at), "dd/MM/yyyy"),
      })
    );

    return {
      success: true,
      error: null,
      data: {
        data: mappedUsers,
        total: json.data.total,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: "Error desconocido",
      data: null,
    };
  }
};
