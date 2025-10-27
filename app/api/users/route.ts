import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}
