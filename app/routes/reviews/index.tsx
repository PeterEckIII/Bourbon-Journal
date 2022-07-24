import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "remix";
import type { LoaderFunction, LinksFunction } from "@remix-run/server-runtime";
import { requireUserId } from "~/session.server";
import { getReviewsForTable } from "~/models/review.server";
import DataGrid from "~/components/DataGrid/DataGrid/DataGride";
import GridStyles from "ag-grid-community/styles/ag-grid.css";
import AlpineTheme from "ag-grid-community/styles/ag-theme-alpine.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/tabulator-tables@5.2.7/dist/css/tabulator.min.css",
    },
    {
      rel: "stylesheet",
      href: GridStyles,
    },
    {
      rel: "stylesheet",
      href: AlpineTheme,
    },
  ];
};

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
  const reviewList = reviewListItems.map((review) => {
    if (
      typeof window === "undefined" ||
      typeof review === "undefined" ||
      !review ||
      !review.bottle ||
      typeof review.bottle === "undefined"
    ) {
      return [];
    }
    return {
      name: review.bottle.name,
      type: review.bottle.type,
      distillery: review.bottle.distiller,
      producer: review.bottle.producer,
      date: review.date,
      rating: review.overallRating,
      imageId: `https://res.cloudinary.com/jpeckiii/image/upload/h_50,w_50/${userId}/${review.imageId}`,
      reviewId: `${review.id}`,
    };
  });

  return (
    <div className="w-full">
      {reviewListItems.length > 0 ? (
        <p>
          No review selected. Select a review from the table below, or{" "}
          <Link
            prefetch="intent"
            to="/reviews/new/bottleInfo"
            className="text-blue-500 underline"
            id="create-new-review-link"
          >
            create a new review.
          </Link>
        </p>
      ) : (
        <p>
          You have no reviews. Create your first review{" "}
          <Link
            prefetch="intent"
            to="/reviews/new/bottleInfo"
            className="text-blue-500 underline"
            id="create-new-review-link"
          >
            here
          </Link>{" "}
        </p>
      )}
      {reviewListItems.length > 0 ? (
        <>
          <DataGrid initialData={reviewList} />
        </>
      ) : null}
      <div className="flex min-h-full flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
