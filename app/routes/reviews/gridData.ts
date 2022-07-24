import { fetchReviewsForTable } from "~/models/review.server";
import type { LoaderFunction } from "remix";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const from = Number(new URL(request.url).searchParams.get("from")) || 0;
  const to = Number(new URL(request.url).searchParams.get("to")) || 0;

  if (from >= 0 && to > 0) {
    const data = await fetchReviewsForTable({ userId, from, to });
    return data;
  }
  return [];
};
