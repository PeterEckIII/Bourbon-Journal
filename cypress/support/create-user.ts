// Use this to create a new user and login with that user
// Simply call this with:
// npx ts-node --require tsconfig-paths/register ./cypress/support/create-user.ts username@example.com
// and it will log out the cookie value you can use to interact with the server
// as that new user.

import { installGlobals } from "@remix-run/node";
import { parse } from "cookie";

import { createUser } from "~/models/user.server";
import { createUserSession } from "~/session.server";
import { createBottle } from "~/models/bottle.server";
import { createReview } from "~/models/review.server";

import {
  review1,
  review2,
  review3,
  bottle1,
  bottle2,
  bottle3,
} from "./bottlesAndReviews";

installGlobals();

async function createAndLogin(email: string) {
  if (!email) {
    throw new Error("email required for login");
  }
  if (!email.endsWith("@example.com")) {
    throw new Error("All test emails must end in @example.com");
  }

  const user = await createUser(email, "myreallystrongpassword");

  const response = await createUserSession({
    request: new Request("test://test"),
    userId: user.id,
    remember: false,
    redirectTo: "/",
  });

  const cookieValue = response.headers.get("Set-Cookie");
  if (!cookieValue) {
    throw new Error("Cookie missing from createUserSession response");
  }
  const parsedCookie = parse(cookieValue);
  // we log it like this so our cypress command can parse it out and set it as
  // the cookie value.
  console.log(
    `
<cookie>
  ${parsedCookie.__session}
</cookie>
  `.trim()
  );
  const first = await createBottle(bottle1);
  const second = await createBottle(bottle2);
  const third = await createBottle(bottle3);
  await createReview({
    ...review1,
    userId: user.id,
    bottleId: first.id,
  });
  await createReview({
    ...review2,
    userId: user.id,
    bottleId: second.id,
  });
  await createReview({
    ...review3,
    userId: user.id,
    bottleId: third.id,
  });
}

createAndLogin(process.argv[2]);
