import TierList from "../components/TierList";

export default function Home() {
  const items = new Array(10).fill(0).map((_, i) => i);

  return (
    <div>
      <h1 className="text-7xl">Home</h1>
      <TierList name="S" items={items} />
      <TierList name="A" items={items} />
      <TierList name="B" items={items} />
    </div>
  );
}
