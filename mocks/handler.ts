import { rest } from "msw";

type CloudinaryResponse = {
  public_id: string;
  version: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
  resource_type: "image" | "video";
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  url: string;
  secure_url: string;
  signature: string;
  original_filename: string;
};

export const handlers = [
  rest.get("/reviews", (req, res, ctx) => {
    if (req.url.searchParams.toString() === "_data=root") {
      return res(
        ctx.json({
          id: "cl8na0low00023qsfam5t4qo6",
          email: "test@example.com",
          createdAt: "2022-09-29T16:34:11.025Z",
          updatedAt: "2022-09-29T16:34:11.027Z",
        })
      );
    } else if (req.url.searchParams.toString() === "_data=routes%2Freviews") {
      return res(
        ctx.json({
          reviewListItems: [
            {
              id: "be36c14b-1f31-42f6-ae51-5ce77b3074cb",
              bottle: {
                id: "cl4ndv5jr1437ifi4permku66",
                name: "Four Roses SiB OBSK",
                type: "Tennessee Whiskey",
                bottler: "Four Roses",
                distiller: "Four Roses",
                producer: "Four Roses",
                country: "USA",
                region: "Four Roses",
                price: "150",
                age: "10yrs 5mos",
                year: "2021",
                batch: "Total Wine",
                alcoholPercent: "52.7",
                proof: "105.4",
                size: "750mL",
                color: "Copper",
                finishing: "None",
              },
            },
            {
              id: "06895e9e-008b-48b4-97d6-0ea514137f8b",
              bottle: {
                id: "cl467u1zc192340iffczvks52pa",
                name: 'Lucky Seven "The Hold Up"',
                type: "Bourbon ",
                bottler: "Bardstown Bourbon Co.",
                distiller: "Barton",
                producer: "Lucky Seven",
                country: "USA",
                region: "Bardstown Bourbon Co.",
                price: "100",
                age: "14yr",
                year: "2022",
                batch: "N/A",
                alcoholPercent: "50",
                proof: "100",
                size: "750mL",
                color: "Mahogany",
                finishing: "None",
              },
            },
            {
              id: "cb43d2d5-fb0d-4a8e-833b-625499ff6b56",
              bottle: {
                id: "cl466f2iy191802iffc54hkem1x",
                name: "Russell's Reserve Single Barrel",
                type: "Bourbon",
                bottler: "Wild Turkey",
                distiller: "Wild Turkey",
                producer: "Wild Turkey",
                country: "USA",
                region: "Kentucky",
                price: "59.99",
                age: "9yrs 7mos",
                year: "2021",
                batch: "Binny's #21-0174",
                alcoholPercent: "55",
                proof: "110",
                size: "750mL",
                color: "Amber",
                finishing: "None",
              },
            },
            {
              id: "2984fec0-0b62-4558-abc8-f288176d586a",
              bottle: {
                id: "cl3z0f05r105111iffcgyndkfap",
                name: "William Larue Weller",
                type: "Bourbon",
                bottler: "Buffalo Trace",
                distiller: "Buffalo Trace",
                producer: "Sazerac",
                country: "USA",
                region: "Kentucky",
                price: "129.99",
                age: "12yrs",
                year: "2021",
                batch: "N/A",
                alcoholPercent: "62.65",
                proof: "125.3",
                size: "750mL",
                color: "Copper",
                finishing: "None",
              },
            },
            {
              id: "41034d1b-3198-4385-bbd2-e5506fa84215",
              bottle: {
                id: "cl3c6flm514654i8kocroivrto",
                name: "Weller Full Proof",
                type: "Bourbon",
                bottler: "Buffalo Trace",
                distiller: "Buffalo Trace",
                producer: "Sazerac",
                country: "USA",
                region: "Kentucky",
                price: "50",
                age: "~7-9yrs",
                year: "2021",
                batch: "Woodman's SiB Select",
                alcoholPercent: "57",
                proof: "114",
                size: "750mL",
                color: "Amber",
                finishing: "None",
              },
            },
            {
              id: "e28e68c6-56bf-4aef-91e7-cc63c8150c33",
              bottle: {
                id: "cl326izqt36388i7i4pdgj9buw",
                name: "Old Elk Infinity Blend",
                type: "Bourbon",
                bottler: "Old Elk",
                distiller: "Old Elk",
                producer: "Old Elk",
                country: "USA",
                region: "Colorado",
                price: "150",
                age: "6-12yrs",
                year: "2021",
                batch: "N/A",
                alcoholPercent: "57.45",
                proof: "114.9",
                size: "750mL",
                color: "Amber",
                finishing: "None",
              },
            },
            {
              id: "ac83fade-7d3a-46ad-b825-fc9a823d8659",
              bottle: {
                id: "cl2pbjfe0136724i7fpmdemc842",
                name: "Kirkland Single Barrel",
                type: "Bourbon",
                bottler: "Kirkland",
                distiller: "Barton",
                producer: "Kirkland",
                country: "USA",
                region: "Kentucky",
                price: "34.99",
                age: "NAS",
                year: "2021",
                batch: "N/A",
                alcoholPercent: "60",
                proof: "120",
                size: "750mL",
                color: "Amber",
                finishing: "None",
              },
            },
            {
              id: "facab4d6-7ba9-4239-b396-f27c6a96ef6e",
              bottle: {
                id: "cl2panfwq136352i7fpqf4ay4sz",
                name: "Elijah Craig Barrel Proof",
                type: "Bourbon",
                bottler: "Elijah Craig",
                distiller: "Heaven Hill",
                producer: "Elijah Craig",
                country: "USA",
                region: "Kentucky",
                price: "69.99",
                age: "12yrs",
                year: "2021",
                batch: "B521",
                alcoholPercent: "59.1",
                proof: "118.2",
                size: "750mL",
                color: "Mahagony",
                finishing: "None",
              },
            },
            {
              id: "955ce04c-2182-48e3-81bb-390292a386d8",
              bottle: {
                id: "cl2i8tq5p50981i7fp9d564dog",
                name: "Four Roses SiBBS OBSV",
                type: "Bourbon",
                bottler: "Four Roses",
                distiller: "Four Roses",
                producer: "Four Roses",
                country: "USA",
                region: "Kentucky",
                price: "140",
                age: "9yrs 5mos",
                year: "2021",
                batch: "Discount Liquors SP",
                alcoholPercent: "56.3",
                proof: "112.6",
                size: "750mL",
                color: "Amber",
                finishing: "None",
              },
            },
            {
              id: "dea837e4-f64e-45ab-ab74-7d17708135ee",
              bottle: {
                id: "cl2bz8wpq0073i8ibsedeiau7",
                name: "Elijah Craig Barrel Proof",
                type: "Bourbon",
                bottler: "Elijah Craig",
                distiller: "Heaven Hill",
                producer: "Elijah Craig",
                country: "USA",
                region: "Kentucky",
                price: "69.99",
                age: "12yrs",
                year: "2021",
                batch: "A122",
                alcoholPercent: "60.4",
                proof: "120.8",
                size: "750mL",
                color: "Dark Amber",
                finishing: "None",
              },
            },
          ],
        })
      );
    } else if (
      req.url.searchParams.toString() === "_data=routes%2Freviews%2Findex"
    ) {
      return res(
        ctx.json({
          reviewListItems: [
            {
              date: "04/23/2022",
              id: "dea837e4-f64e-45ab-ab74-7d17708135ee",
              imageId: "dedb9eda-f21d-48a0-94e3-533c7c3a29fa_wblubt_l90mld",
              overallRating: 4,
              value: 5,
              bottle: {
                name: "Elijah Craig Barrel Proof",
                type: "Bourbon",
                distiller: "Heaven Hill",
                producer: "Elijah Craig",
                proof: "120.8",
                alcoholPercent: "60.4",
                age: "12yrs",
                price: "69.99",
              },
            },
            {
              date: "04/27/2022",
              id: "955ce04c-2182-48e3-81bb-390292a386d8",
              imageId: "b81a1f4a-52af-4a64-990b-5492bffd8af0_estds5_cxkvyg",
              overallRating: 2,
              value: 1,
              bottle: {
                name: "Four Roses SiBBS OBSV",
                type: "Bourbon",
                distiller: "Four Roses",
                producer: "Four Roses",
                proof: "112.6",
                alcoholPercent: "56.3",
                age: "9yrs 5mos",
                price: "140",
              },
            },
            {
              date: "05/02/2022",
              id: "facab4d6-7ba9-4239-b396-f27c6a96ef6e",
              imageId: "984fc771-9443-4852-a8f0-c92eaff1c30b_dfpprc_qasmv7",
              overallRating: 4,
              value: 5,
              bottle: {
                name: "Elijah Craig Barrel Proof",
                type: "Bourbon",
                distiller: "Heaven Hill",
                producer: "Elijah Craig",
                proof: "118.2",
                alcoholPercent: "59.1",
                age: "12yrs",
                price: "69.99",
              },
            },
            {
              date: "05/02/2022",
              id: "ac83fade-7d3a-46ad-b825-fc9a823d8659",
              imageId: "9bd4a411-ceec-40d7-a427-f52488626132_rdvowh_wnqter",
              overallRating: 4,
              value: 4,
              bottle: {
                name: "Kirkland Single Barrel",
                type: "Bourbon",
                distiller: "Barton",
                producer: "Kirkland",
                proof: "120",
                alcoholPercent: "60",
                age: "NAS",
                price: "34.99",
              },
            },
            {
              date: "05/11/2022",
              id: "e28e68c6-56bf-4aef-91e7-cc63c8150c33",
              imageId: "8573425e-27fb-4274-b6ed-f5b2f6af8a5c_om3wrk_c9mjlh",
              overallRating: 4,
              value: 3,
              bottle: {
                name: "Old Elk Infinity Blend",
                type: "Bourbon",
                distiller: "Old Elk",
                producer: "Old Elk",
                proof: "114.9",
                alcoholPercent: "57.45",
                age: "6-12yrs",
                price: "150",
              },
            },
            {
              date: "05/18/2022",
              id: "41034d1b-3198-4385-bbd2-e5506fa84215",
              imageId: "79aed275-dcf8-4dc3-94c7-6f1a75cc5e5f_aaklcr_vtx3bd",
              overallRating: 5,
              value: 5,
              bottle: {
                name: "Weller Full Proof",
                type: "Bourbon",
                distiller: "Buffalo Trace",
                producer: "Sazerac",
                proof: "114",
                alcoholPercent: "57",
                age: "~7-9yrs",
                price: "50",
              },
            },
            {
              date: "06/03/2022",
              id: "2984fec0-0b62-4558-abc8-f288176d586a",
              imageId: "63974685-2faf-4093-aa1c-504fa7c1f6c1_alwtzx_oj0giu",
              overallRating: 5,
              value: 5,
              bottle: {
                name: "William Larue Weller",
                type: "Bourbon",
                distiller: "Buffalo Trace",
                producer: "Sazerac",
                proof: "125.3",
                alcoholPercent: "62.65",
                age: "12yrs",
                price: "129.99",
              },
            },
            {
              date: "06/08/2022",
              id: "cb43d2d5-fb0d-4a8e-833b-625499ff6b56",
              imageId: "22b4a87b-553f-4a4e-ba7f-230ca3301c76_xsvbzi_ksi1rv",
              overallRating: 4,
              value: 5,
              bottle: {
                name: "Russell's Reserve Single Barrel",
                type: "Bourbon",
                distiller: "Wild Turkey",
                producer: "Wild Turkey",
                proof: "110",
                alcoholPercent: "55",
                age: "9yrs 7mos",
                price: "59.99",
              },
            },
            {
              date: "06/08/2022",
              id: "06895e9e-008b-48b4-97d6-0ea514137f8b",
              imageId: "fdc4110e-c3da-401d-945f-4d6d79dad835_bnsmcb_wg6vcf",
              overallRating: 2,
              value: 1,
              bottle: {
                name: 'Lucky Seven "The Hold Up"',
                type: "Bourbon ",
                distiller: "Barton",
                producer: "Lucky Seven",
                proof: "100",
                alcoholPercent: "50",
                age: "14yr",
                price: "100",
              },
            },
            {
              date: "06/20/2022",
              id: "be36c14b-1f31-42f6-ae51-5ce77b3074cb",
              imageId: "e2677873-c4f8-4a06-8f65-0e9ef43ee470_xt4imy_o24fpy",
              overallRating: 4,
              value: 3,
              bottle: {
                name: "Four Roses SiB OBSK",
                type: "Tennessee Whiskey",
                distiller: "Four Roses",
                producer: "Four Roses",
                proof: "105.4",
                alcoholPercent: "52.7",
                age: "10yrs 5mos",
                price: "150",
              },
            },
          ],
          userId: "cl8na0low00023qsfam5t4qo6",
        })
      );
    }
  }),
  rest.post(
    `/reviews/new/addImage?_data=routes%2Freviews%2Fnew%2FaddImage`,
    async (req, res, ctx) => {
      console.log(`REQ: ${JSON.stringify(req, null, 2)}`);
      console.log(`RES: ${JSON.stringify(res, null, 2)}`);
      console.log(`CTX: ${JSON.stringify(ctx, null, 2)}`);
      const version = "v1664652278";
      const userId = "cl8qaz3z900005rsfrwievf4d";
      const publicId = "126b206a-1c35-4c4f-b38c-8fe47050f21e";
      const extension = "png";

      return res(
        ctx.status(200),
        ctx.json({
          imageSrc: `https://res.cloudinary.com/jpeckiii/image/upload/${version}/${userId}/${publicId}.${extension}`,
          publicId: `${publicId}`,
        })
      );
    }
  ),
];
