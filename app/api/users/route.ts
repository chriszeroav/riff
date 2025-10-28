import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { createUserSchema } from "@/schemas/users";
import bcrypt from "bcrypt";

export const GET = auth(async function (request) {
  if (!request.auth || request.auth.user.role !== "ADMIN") {
    return Response.json(
      {
        data: null,
        success: false,
        error: "Permisos insuficientes",
      },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const take = Number(searchParams.get("take")) || 10;
  console.log(page, take);

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      created_at: true,
    },
  });

  return Response.json(users);
});

export const POST = auth(async function (request) {
  try {
    if (!request.auth || request.auth.user.role !== "ADMIN") {
      return Response.json(
        {
          data: null,
          success: false,
          error: "Acceso denegado",
        },
        { status: 403 }
      );
    }

    const body = await request.json();

    const validatedData = createUserSchema.safeParse(body);

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
});
