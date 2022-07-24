import type { User, Review, Bottle, Prisma } from "@prisma/client";

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

export const getReviewsForTable = async ({
  userId,
}: {
  userId: User["id"];
}) => {
  const reviews = await prisma.review.findMany({
    where: {
      userId,
    },
    select: {
      date: true,
      id: true,
      imageId: true,
      overallRating: true,
      bottle: {
        select: {
          name: true,
          type: true,
          distiller: true,
          producer: true,
        },
      },
    },
  });
  return reviews;
};

type FetchProps = {
  userId: User["id"];
  to: number;
  from: number;
};

export const fetchReviewsForTable = async ({
  userId,
  to = 0,
  from = 0,
}: FetchProps) => {
  const reviews = prisma.review.findMany({
    where: {
      userId,
    },
    skip: from,
    take: to - from,
    select: {
      id: true,
      date: true,
      imageId: true,
      overallRating: true,
      bottle: {
        select: {
          name: true,
          type: true,
          distiller: true,
          producer: true,
        },
      },
    },
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
  cherry,
  strawberry,
  raspberry,
  blackberry,
  blueberry,
  apple,
  banana,
  grape,
  stone,
  citrus,
  tropical,
  pepper,
  bakingSpice,
  cinnamon,
  herbal,
  mint,
  coffee,
  tobacco,
  leather,
  oak,
  toasted,
  smokey,
  peanut,
  almond,
  pecan,
  walnut,
  oily,
  floral,
  corn,
  rye,
  wheat,
  malt,
  dough,
  vanilla,
  caramel,
  molasses,
  butterscotch,
  honey,
  chocolate,
  toffee,
  sugar,
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
      cherry,
      strawberry,
      raspberry,
      blackberry,
      blueberry,
      apple,
      banana,
      grape,
      stone,
      citrus,
      tropical,
      pepper,
      bakingSpice,
      cinnamon,
      herbal,
      mint,
      coffee,
      tobacco,
      leather,
      oak,
      toasted,
      smokey,
      peanut,
      almond,
      pecan,
      walnut,
      oily,
      floral,
      corn,
      rye,
      wheat,
      malt,
      dough,
      vanilla,
      caramel,
      molasses,
      butterscotch,
      honey,
      chocolate,
      toffee,
      sugar,
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
