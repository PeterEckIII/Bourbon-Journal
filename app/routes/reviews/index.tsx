import { Link, Outlet } from "@remix-run/react";

export default function ReviewIndexPage() {
  return (
    <div>
      <p>
        No review selected. Select a review on the left, or{" "}
        <Link to="/reviews/new/bottleInfo" className="text-blue-500 underline">
          create a new review.
        </Link>
      </p>
      <div className="flex min-h-full flex-col justify-center">
        <Outlet />
      </div>
    </div>
  );
}
