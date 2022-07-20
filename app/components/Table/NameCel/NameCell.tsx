interface INameCellProps {
  name: string;
  imageSrc: string;
}

export default function NameCell({ name, imageSrc }: INameCellProps) {
  return (
    <div className="flex">
      <div>
        <img
          src={imageSrc}
          alt={`Bottle of ${name}`}
          height="50px"
          width="50px"
          className="block object-cover"
        />
      </div>
      <div className="text-xs sm:text-base">{name}</div>
    </div>
  );
}
