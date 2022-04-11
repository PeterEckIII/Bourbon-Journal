import type { User, Review } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Review } from "@prisma/client";

export const getReview = async ({
  id,
  userId,
}: Pick<Review, "id"> & {
  userId: User["id"];
}) => {
  return prisma.review.findFirst({
    where: { id, userId },
  });
};

export const getReviewListItems = async ({
  userId,
}: {
  userId: User["id"];
}) => {
  const reviews = prisma.review.findMany({
    select: { id: true, bottle: true },
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  });
  return reviews;
};

export const createReview = async ({
  bottleId,
  date,
  imageId,
  setting,
  glassware,
  restTime,
  nose,
  palate,
  finish,
  thoughts,
  baked,
  buttery,
  chocolate,
  toffee,
  rye,
  corn,
  wheat,
  malt,
  bakingSpice,
  molasses,
  nutty,
  oaky,
  redFruit,
  darkFruit,
  berryFruit,
  citrusFruit,
  stoneFruit,
  driedFruit,
  earthy,
  tobacco,
  leather,
  floral,
  herbaceous,
  overallRating,
  value,
  userId,
}: Review & {
  userId: User["id"];
}) => {
  return await prisma.review.create({
    data: {
      bottleId,
      date,
      imageId,
      setting,
      glassware,
      restTime,
      nose,
      palate,
      finish,
      thoughts,
      baked,
      buttery,
      chocolate,
      toffee,
      rye,
      corn,
      wheat,
      malt,
      bakingSpice,
      molasses,
      nutty,
      oaky,
      redFruit,
      darkFruit,
      berryFruit,
      citrusFruit,
      stoneFruit,
      driedFruit,
      earthy,
      tobacco,
      leather,
      floral,
      herbaceous,
      overallRating,
      value,
      userId,
    },
  });
};

export const editReview = async (review: Review, userId: User["id"]) => {
  if (userId !== review.userId) {
    throw new Error(`You are not authorized to edit this review`);
  }
  return await prisma.review.update({
    where: {
      id: review.id,
    },
    data: {
      ...review,
    },
  });
};

export const deleteReview = async ({
  id,
  userId,
}: Pick<Review, "id"> & { userId: User["id"] }) => {
  return prisma.review.deleteMany({
    where: { id, userId },
  });
};
