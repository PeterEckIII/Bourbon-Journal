interface ReviewImageProps {
  imageUrl: string;
  bottleName: string;
}

export default function ReviewImage({
  imageUrl,
  bottleName,
}: ReviewImageProps) {
  return (
    <div className="align-center flex flex-col justify-center">
      <img src={imageUrl} alt={`Picture of ${bottleName}`} />
    </div>
  );
}
