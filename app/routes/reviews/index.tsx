import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Table from "~/components/Table/Table";
import TestTable from "~/components/Table/TestTable";
import { json, LoaderFunction } from "remix";
import { requireUserId } from "~/session.server";
import { getReviewsForTable } from "~/models/review.server";

interface LoaderData {
  reviewListItems: Awaited<ReturnType<typeof getReviewsForTable>>;
  userId: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const reviewListItems = await getReviewsForTable({ userId });
  return json<LoaderData>({ reviewListItems, userId });
};

export default function ReviewIndexPage() {
  const { reviewListItems, userId } = useLoaderData<LoaderData>();
  return (
    <div>
      <p>
        No review selected. Select a review on the left, or{" "}
        <Link
          prefetch="intent"
          to="/reviews/new/bottleInfo"
          className="text-blue-500 underline"
          id="create-new-review-link"
        >
          create a new review.
        </Link>
      </p>
      {/* <Table reviews={reviewListItems} userId={userId} /> */}
      <Table reviews={reviewListItems} userId={userId} />
      <div className="flex min-h-full flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
