import TierList from "../components/TierList";

export default function Home() {
  const items = new Array(10).fill(0).map((_, i) => i);

  return (
    <div>
      <h1 className="text-7xl">Home</h1>
      <TierList name="S" items={items} color="red" />
      <TierList name="A" items={items} color="yellow" />
      <TierList name="B" items={items} color="green" />
      <TierList name="C" items={items} color="blue" />
    </div>
  );
}
