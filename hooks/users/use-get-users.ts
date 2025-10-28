const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const useGetUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data.users;
  } catch (error) {}
};
