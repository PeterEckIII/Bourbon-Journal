import { installGlobals } from "@remix-run/node";
import { parse } from "cookie";
import { getUserByEmail } from "~/models/user.server";
import { createUserSession } from "~/session.server";

installGlobals();

async function loginExistingUser(email: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error(`Could not find the user by their email`);
  }

  const response = await createUserSession({
    request: new Request("test://test"),
    userId: user.id,
    remember: false,
    redirectTo: "/reviews",
  });

  const cookieValue = response.headers.get("Set-Cookie");
  if (!cookieValue) {
    throw new Error(`Cookie missing from createUserSession response`);
  }
  const parsedCookie = parse(cookieValue);

  console.log(
    `
<cookie>
  ${parsedCookie.__session}
</cookie>
  `.trim()
  );
}

loginExistingUser(process.argv[2]);
