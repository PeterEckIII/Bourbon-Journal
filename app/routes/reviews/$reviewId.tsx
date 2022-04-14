import { Bottle } from "@prisma/client";
import {
  LoaderFunction,
  ActionFunction,
  json,
  redirect,
} from "@remix-run/server-runtime";
import {
  useLoaderData,
  useCatch,
  Form,
  useNavigate,
  useParams,
} from "@remix-run/react";
import invariant from "tiny-invariant";
import { getBottle } from "~/models/bottle.server";
import type { Review } from "~/models/review.server";
import { deleteReview, getReview } from "~/models/review.server";
import { requireUserId } from "~/session.server";
import { formatDateForReviewPage } from "~/utils/date";
import BottleDetails from "~/components/BottleDetails";
import SettingDetails from "~/components/SettingDetails";
import DeleteIcon from "~/components/DeleteIcon";
import EditIcon from "~/components/EditIcon";
import { transformImage } from "~/utils/cloudinary.server";
import ReviewPage from "~/components/ReviewPage";

type LoaderData = {
  review: Review;
  bottle: Bottle;
  imageUrl?: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.reviewId, "reviewId not found");

  const review = await getReview({ userId, id: params.reviewId });

  if (review === undefined || review === null) {
    throw new Response("Not Found", { status: 404 });
  }
  if (review.bottleId === undefined || review.bottleId === null) {
    throw new Error(`Error: Bottle ID is of type ${typeof review.bottleId}`);
  }

  const bottle = await getBottle(review.bottleId);

  if (bottle === undefined || bottle === null) {
    throw new Error(`Error: Bottle is null`);
  }

  if (review.imageId === null) {
    throw new Error(`Error with image ID!`);
  }

  const publicId = `${userId}/${review.imageId}`;

  const imageUrl = (await transformImage(publicId)) as string;

  return json<LoaderData>({ review, bottle, imageUrl });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.reviewId, "reviewId not found");

  const form = await request.formData();
  const _deleted = await form.get("_deleted")?.toString();

  if (_deleted) {
    await deleteReview({ userId, id: params.reviewId });
    return redirect("/reviews");
  } else {
    return redirect(`/reviews/${params.id}`);
  }
};

export default function ReviewDetailsPage() {
  const data = useLoaderData() as LoaderData;
  const { review, bottle } = data;
  const reviewDate = formatDateForReviewPage(review.date);
  const navigate = useNavigate();
  const params = useParams();

  const handleEditClick = () => {
    navigate(`/reviews/edit/${params.reviewId}`);
  };

  return (
    <div>
      <ReviewPage
        bottle={bottle}
        review={review}
        imageUrl={data?.imageUrl || ""}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Review not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
