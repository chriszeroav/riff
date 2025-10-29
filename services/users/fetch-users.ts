import { UserEntity } from "@/types/users";
import { format } from "date-fns";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const fetchUsers = async (page: number, take: number) => {
  try {
    const response = await fetch(`${API_URL}/users?page=${page}&take=${take}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!data.success) return data;

    const mappedUsers = data.data.users.map(
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
        users: mappedUsers,
        total: data.data.total,
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
