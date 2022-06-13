import "dotenv/config";
import cloudinary from "cloudinary";
import { writeAsyncIterableToWritable } from "@remix-run/node";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface IUploadImageProps {
  data: AsyncIterable<Uint8Array>;
  userId: string;
  publicId: string;
}

export async function uploadImage({
  data,
  userId,
  publicId,
}: IUploadImageProps) {
  const uploadPromise = new Promise(async (resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      { folder: `${userId}`, public_id: `${publicId}` },
      (error, result) => {
        if (error) {
          console.log(`Cloudinary Error: ${JSON.stringify(error)}`);
          reject(error);
          return;
        }
        resolve(result);
      }
    );
    await writeAsyncIterableToWritable(data, uploadStream);
  });
  return uploadPromise;
}

export const generateCode = (length: number): string => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export interface CustomFormData {
  redisId: string;
  name: string;
  type: string;
  distiller: string;
  bottler: string;
  producer: string;
  country: string;
  region: string;
  price: string;
  age: string;
  year: string;
  batch: string;
  alcoholPercent: string;
  proof: string;
  size: string;
  color: string;
  finishing: string;
  imageId?: string;

  date?: string;
  setting?: string;
  glassware?: string;
  restTime?: string;
  nose?: string;
  palate?: string;
  finish?: string;
  thoughts?: string;

  cherry?: number;
  strawberry?: number;
  raspberry?: number;
  blackberry?: number;
  blueberry?: number;
  apple?: number;
  banana?: number;
  grape?: number;
  stone?: number;
  citrus?: number;
  tropical?: number;
  pepper?: number;
  bakingSpice?: number;
  cinnamon?: number;
  herbal?: number;
  mint?: number;
  coffee?: number;
  tobacco?: number;
  leather?: number;
  oak?: number;
  toasted?: number;
  smokey?: number;
  peanut?: number;
  almond?: number;
  pecan?: number;
  walnut?: number;
  oily?: number;
  floral?: number;
  corn?: number;
  rye?: number;
  wheat?: number;
  malt?: number;
  dough?: number;
  vanilla?: number;
  caramel?: number;
  molasses?: number;
  butterscotch?: number;
  honey?: number;
  chocolate?: number;
  toffee?: number;
  sugar?: number;
  overallRating?: number;
  value?: number;
}
