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
          <source media="(min-width: 640)" srcSet={imageUrl} />
          <img src="" alt="" />
        </picture>
      </figure>
    </div>
  );
}
