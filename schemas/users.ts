import { z } from "zod";

export const createUserSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  name: z.string().min(2, "Mínimo 2 caracteres").or(z.literal("")).optional(),
});
