interface ReviewImageProps {
  imageUrl: string;
  bottleName: string;
}

export default function ReviewImage({
  imageUrl,
  bottleName,
}: ReviewImageProps) {
  return (
    <div>
      <figure>
        <picture>
          <source media="(min-width: 640px)" srcSet={imageUrl} />
          <img src={imageUrl} alt={`Bottle of ${bottleName}`} />
          {/* Consider adding object-fit: cover to image to maintain aspect ratio */}
        </picture>
      </figure>
    </div>
  );
}
