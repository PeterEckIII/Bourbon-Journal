import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import type { Stream } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type UploadImageProps = {
  fileStream: Stream;
  userId: string;
  publicId: string;
};

async function uploadImage(
  fileStream: Stream,
  userId: string,
  publicId: string
) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: `${userId}`, public_id: `${publicId}` },
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
    fileStream.pipe(uploadStream);
  });
}

async function transformImage(imageId: string) {
  return new Promise((resolve, reject) => {
    try {
      const image = cloudinary
        .url(imageId, {
          secure: true,
          transformation: [
            { width: 20, height: 500 },
            { format: "auto" },
            { quality: "auto" },
            { crop: "fill" },
          ],
        })
        .toString();
      resolve(image);
    } catch (e) {
      reject(e);
    }
  });
}

export { uploadImage, transformImage };
