import CardCompanion from "@/components/CardCompanion"
import dataCompanions  from "@/data/companions.json"
export default function Home() {
  return <div className="min-h-screen flex flex-col gap-4  p-12 ">
    <h1 className="text-3xl font-bold">Popular Companions</h1>
    <div className="w-full grid grid-cols-3 gap-4">
      {dataCompanions
      .filter((item) => item.id <= 3)
      .map((item) => (
        <CardCompanion key={item.id} type={item.type} title={item.title} description={item.description} time={item.time} color={item.color} />
      ))}
    </div>
  </div>
}
