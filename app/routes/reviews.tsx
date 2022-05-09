import { Form, useLoaderData, Outlet, Link } from "@remix-run/react";
import { LoaderFunction, json, LinksFunction } from "@remix-run/server-runtime";
import { useState } from "react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getReviewListItems } from "~/models/review.server";
import Hamburger from "~/components/Icons/Hamburger";
import AddIcon from "~/components/Icons/AddIcon";
import ArrowIcon from "~/components/Icons/ArrowIcon";
import Glencairn from "~/components/Icons/Glencairn";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Courgette&family=Satisfy&display=swap",
    },
  ];
};

type LoaderData = {
  reviewListItems: Awaited<ReturnType<typeof getReviewListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const reviewListItems = await getReviewListItems({ userId });
  return json<LoaderData>({ reviewListItems });
};

export default function ReviewsPage() {
  const data = useLoaderData() as LoaderData;
  const user = useUser();
  const [opened, setOpened] = useState<boolean>(false);

  const toggle = () => setOpened(!opened);

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to="." className="flex items-center text-white">
            <div className="flex">
              <Glencairn />
              <div className="text-center font-['Satisfy'] text-2xl leading-7">
                THE
                <br />
                BOURBON
                <br />
                NOOK
              </div>
            </div>
          </Link>
        </h1>
        <p className="font-['Courgette'] text-xl">{user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white" aria-roledescription="aside">
        {opened ? (
          // SIDE NAVBAR
          <div className="min-h-screen w-80 border-r bg-gray-50 duration-300 ease-in-out">
            <div className="flex justify-between">
              <Link to="new/bottleInfo" className="p-4 text-lg text-blue-500">
                <div>
                  <AddIcon /> New Review
                </div>
              </Link>
              <Hamburger opened={opened} setOpened={toggle} />
            </div>
            <hr />
            <div className="bg-gray-50">
              {data.reviewListItems.length !== 0 ? (
                data?.reviewListItems?.map((review) => {
                  return (
                    <div className="flex" key={review.id}>
                      <Link
                        className="m-2 p-2 text-blue-900"
                        to={`/reviews/${review.id}`}
                      >
                        {`${review?.bottle?.name} ${
                          review?.bottle?.batch &&
                          !review.bottle.batch.startsWith("N")
                            ? review.bottle.batch
                            : ""
                        }`}{" "}
                        <ArrowIcon />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="m-2 flex bg-gray-50 p-4">
                  No reviews to display. Add one!
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="align-center flex min-h-screen w-10 flex-col border-r bg-gray-50 p-2 pt-4 text-blue-900 duration-300 ease-in-out">
            <Hamburger opened={opened} setOpened={toggle} />
          </div>
        )}

        <div className="flex p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
