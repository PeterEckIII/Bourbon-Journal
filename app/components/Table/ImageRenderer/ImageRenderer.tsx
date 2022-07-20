export default function ImageRenderer(props: any) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <div className="hidden h-[50px] w-[50px] sm:block">
          <img
            src={props.value.imageId}
            alt={`Bottle of ${props.value.name}`}
            height={50}
            width={50}
          />
        </div>
        <div className="break-words md:ml-4">
          <p className="break-words">{props.value.name}</p>
        </div>
      </div>
    </div>
  );
}
