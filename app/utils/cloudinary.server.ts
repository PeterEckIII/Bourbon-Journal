import "dotenv/config";
import cloudinary from "cloudinary";
import type { Stream } from "stream";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(
  fileStream: Stream,
  userId: string,
  publicId: string
) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      { folder: `${userId}`, public_id: publicId },
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
    fileStream.pipe(uploadStream);
  });
}

async function transformImage(imageId: string) {
  return new Promise((resolve, reject) => {
    try {
      const image = cloudinary.v2
        .url(imageId, {
          secure: true,
          transformation: [
            { width: 200, height: 500 },
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
