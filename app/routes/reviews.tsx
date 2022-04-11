import { Form, useLoaderData, Outlet, Link } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/server-runtime";
import { useState } from "react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getReviewListItems } from "~/models/review.server";
import Hamburger from "~/components/Hamburger";
import AddIcon from "~/components/AddIcon";

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
          <Link to=".">Reviews</Link>
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        {opened ? (
          <div className={`h-full w-80 border-r bg-gray-50`}>
            <div className="flex justify-between">
              <Link to="new/bottleInfo" className="p-4 text-xl text-blue-500">
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
                        {`${review?.bottle?.year} ${review?.bottle?.name}`}{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
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
          <div className="align-center flex h-full w-10 flex-col border-r bg-gray-50 p-2 pt-4 text-blue-900">
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
