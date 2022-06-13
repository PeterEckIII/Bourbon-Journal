import { rest } from "msw";

export const handlers = [
  // rest.post(
  //   "https://api.cloudinary.com/v1_1/jpeckiii/image/upload",
  //   (req, res, ctx) => {
  //     return res(
  //       ctx.status(200),
  //       ctx.json({
  //         imageSrc:
  //           "https://res.cloudinary.com/jpeckiii/image/upload/v1652286186/cl2bz78pk0019i8ibabnf3zl4/dedb9eda-f21d-48a0-94e3-533c7c3a29fa.png",
  //         publicId: "dedb9eda-f21d-48a0-94e3-533c7c3a29fa",
  //       })
  //     );
  //   }
  // ),
];
