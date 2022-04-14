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
      <h3 className="text-2xl font-bold">
        {bottle.name} {bottle.batch?.startsWith("N") ? null : bottle.batch}
      </h3>
      <div className="flex pl-2">
        <p className="py-4">{reviewDate}</p>
      </div>
      <div className="my-2 flex justify-evenly py-2">
        <BottleDetails bottle={bottle} />
        <div className="align-center flex flex-col justify-center">
          <img src={data?.imageUrl} alt={`Picture of ${bottle.name}`} />
        </div>
      </div>
      <SettingDetails bottle={bottle} review={review} />

      <div className="flex justify-end">
        <div className="m-1 inline text-right">
          <button
            onClick={handleEditClick}
            className="my-4 rounded bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 focus:bg-blue-400"
          >
            <EditIcon /> Edit
          </button>
        </div>
        <Form method="post" className="m-1 inline text-right">
          <input type="hidden" name="_deleted" value="_deleted" />
          <button
            type="submit"
            className="my-4 rounded bg-red-500 py-2 px-4 text-white hover:bg-red-700 focus:bg-red-400"
          >
            <DeleteIcon /> Delete
          </button>
        </Form>
      </div>
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
