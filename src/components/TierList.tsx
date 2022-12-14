export type colors =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

interface props {
  items: number[];
  color: colors;
  name: string;
}

export default function TierList({ items, name, color }: props) {
  return (
    <div className="borer border-2 p-2 flex h-32 space-x-2">
      <div
        className={`border-2 w-32 text-center bg-${color}-800 font-bold text-2xl flex justify-center align-middle flex-col`}
      >
        {name}
      </div>
      {items.map((item) => (
        <div className="border-2 w-24 text-center">{item}</div>
      ))}
    </div>
  );
}
