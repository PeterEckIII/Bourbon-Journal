import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Table from "~/components/Table/Table";
import NewTable from "~/components/Table/NewTable/NewTable";
import { json } from "remix";
import type { LoaderFunction, LinksFunction } from "@remix-run/server-runtime";
import { requireUserId } from "~/session.server";
import { getReviewsForTable } from "~/models/review.server";
import { useMemo } from "react";
import LinkFormatter from "~/components/Table/LinkFormatter/LinkFormatter";
import NameFormatter from "~/components/Table/NameCel/NameCell";
import TableStyles from "~/components/Table/NewTable/NewTable.css";
import DataGrid from "~/components/Table/DataGrid/DataGride";
import GridStyles from "ag-grid-community/styles/ag-grid.css";
import AlpineTheme from "ag-grid-community/styles/ag-theme-alpine.css";

type ColumnDefinitionAlign = "left" | "center" | "right";
type VerticalAlign = "top" | "middle" | "bottom";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/tabulator-tables@5.2.7/dist/css/tabulator.min.css",
    },
    {
      rel: "stylesheet",
      href: TableStyles,
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

export interface IReviewTableItem {
  name: string;
  type: string;
  distillery: string;
  producer: string;
  date: string;
  rating: number;
  imageId: string;
  reviewId: string;
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
      imageId: `https://res.cloudinary.com/jpeckiii/image/upload/h_50,w_50/cl2c0togd0005ebsf0fbpdakc/f9fc1081-1375-4441-a2a2-8147cddb4215`,
      reviewId: `${review.id}`,
    };
  });

  const data = useMemo(() => reviewList, [reviewList]);

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Name",
  //       accessor: "name",
  //       Cell: ImageCell,
  //       imgAccessor: "imageId",
  //       dateAccessor: "date",
  //     },
  //     {
  //       Header: "Distillery",
  //       accessor: "distillery",
  //     },
  //     {
  //       Header: "Producer",
  //       accessor: "producer",
  //     },
  //     {
  //       Header: "Type",
  //       accessor: "type",
  //     },
  //     {
  //       Header: "Rating",
  //       accessor: "rating",
  //       Cell: RatingPill,
  //     },
  //     {
  //       Header: "Link",
  //       accessor: "reviewId",
  //       Cell: LinkCell,
  //     },
  //   ],
  //   []
  // );

  const columnsTwo = useMemo(
    () => [
      {
        title: "Name",
        field: "name",
        responsive: 0,
        vertAlign: "middle" as VerticalAlign,
        hozAlign: "left" as ColumnDefinitionAlign,
        formatter: NameFormatter,
      },
      {
        title: "Date",
        field: "date",
        responsive: 1,
        vertAlign: "top" as VerticalAlign,
        hozAlign: "center" as ColumnDefinitionAlign,
      },
      {
        title: "Distillery",
        field: "distillery",
        responsive: 2,
        vertAlign: "middle" as VerticalAlign,
        hozAlign: "left" as ColumnDefinitionAlign,
      },
      {
        title: "Producer",
        field: "producer",
        responsive: 5,
        vertAlign: "middle" as VerticalAlign,
        hozAlign: "left" as ColumnDefinitionAlign,
      },
      {
        title: "Type",
        field: "type",
        responsive: 2,
        visible: false,
      },
      {
        title: "Rating",
        field: "rating",
        responsive: 0,
        vertAlign: "middle" as VerticalAlign,
        hozAlign: "left" as ColumnDefinitionAlign,
      },
      {
        title: "Link",
        field: "reviewId",
        responsive: 0,
        vertAlign: "middle" as VerticalAlign,
        hozAlign: "left" as ColumnDefinitionAlign,
        formatter: LinkFormatter,
      },
    ],
    []
  );

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
          {/* <Table data={data} columns={columns} /> */}
          {/* <NewTable data={data as IReviewTableItem[]} columns={columnsTwo} /> */}
          <DataGrid initialData={reviewList} />
        </>
      ) : null}
      <div className="flex min-h-full flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
