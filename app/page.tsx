import CardCompanion from "@/components/CardCompanion"
import CompletedLessons from "@/components/CompletedLessons"
import dataCompanions  from "@/data/companions.json"

export default function Home() {
  return <div className="min-h-screen flex flex-col   p-12 max-sm:px-4  gap-6">
    <h1 className="text-3xl font-bold">Popular Companions</h1>
    <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
      {dataCompanions
      .filter((item) => item.id <= 3)
      .map((item) => (
        <CardCompanion key={item.id} topic={item.topic} name={item.name} subject={item.subject} duration={item.duration} style={item.style} />
      ))}
    </div>
    <CompletedLessons />
  </div>
}
