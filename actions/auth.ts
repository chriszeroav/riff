"use server";

import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { loginSchema } from "@/schemas/auth";

export const signInCredentials = async (data: z.infer<typeof loginSchema>) => {
  await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirectTo: "/dashboard",
  });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
