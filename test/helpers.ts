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
