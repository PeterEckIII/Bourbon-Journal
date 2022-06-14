import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Table from "~/components/Table/Table";
import { json, LoaderFunction } from "remix";
import { requireUserId } from "~/session.server";
import { getReviewsForTable } from "~/models/review.server";

interface LoaderData {
  reviewListItems: Awaited<ReturnType<typeof getReviewsForTable>>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const reviewListItems = await getReviewsForTable({ userId });
  return json<LoaderData>({ reviewListItems });
};

export default function ReviewIndexPage() {
  const { reviewListItems } = useLoaderData<LoaderData>();
  return (
    <div>
      <p>
        No review selected. Select a review on the left, or{" "}
        <Link
          to="/reviews/new/bottleInfo"
          className="text-blue-500 underline"
          id="create-new-review-link"
        >
          create a new review.
        </Link>
      </p>
      <Table reviews={reviewListItems} />
      <div className="flex min-h-full flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
