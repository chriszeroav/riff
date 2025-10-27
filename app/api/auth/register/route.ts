import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

const registerSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = registerSchema.safeParse(body);

    if (!validatedData.success) {
      return Response.json(
        {
          data: null,
          success: false,
          error: validatedData.error.issues,
        },
        { status: 400 }
      );
    }

    const { email, password, name } = validatedData.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        {
          data: null,
          success: false,
          error: "El email ya está registrado",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true,
      },
    });

    return Response.json(
      {
        data: newUser,
        success: true,
        error: null,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        data: null,
        success: false,
        error: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
