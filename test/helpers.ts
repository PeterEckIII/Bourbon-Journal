import { prisma } from "~/db.server";
import type { User, Review } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { Context } from "./context";

interface LoginPayload {
  email: string;
  password: string;
  redirectTo?: string;
}

export const login = async (payload: LoginPayload, ctx: Context) => {
  const userWithPassword = await ctx.prisma.user.findUnique({
    where: { email: payload.email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    payload.password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
};

export const loadReviewsTable = async (
  review: Review,
  ctx: Context,
  id: User["id"]
) => {
  return await ctx.prisma.review.findMany({
    where: { userId: id },
    select: {
      date: true,
      id: true,
      imageId: true,
      overallRating: true,
      value: true,
      bottle: {
        select: {
          name: true,
          type: true,
          distiller: true,
          producer: true,
          proof: true,
          alcoholPercent: true,
          age: true,
          price: true,
        },
      },
    },
  });
};

export async function truncateDB() {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

  for (const { tablename } of tablenames) {
    if (tablename !== "_prisma_migrations") {
      try {
        await prisma.$executeRawUnsafe(
          `TRUNCATE TABLE "public"."${tablename}" CASCADE;`
        );
      } catch (error) {
        console.log({ error });
      }
    }
  }
}
