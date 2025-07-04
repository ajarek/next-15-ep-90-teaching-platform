import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TypeCompanion } from "@/type/typeCompanion"
import { Bookmark, Clock8 } from "lucide-react"
import { Button } from "./ui/button"

const CardCompanion = ({topic, name, subject, duration, style}: TypeCompanion) => {
  return (
   <Card className={` rounded-xl border-2 `} style={{backgroundColor: style}}>
  <CardHeader>
    <div className='flex items-center justify-between'>
      <div>{topic}</div>
      <Bookmark />
    </div>
    <CardTitle>{name}</CardTitle>
    <CardDescription>{subject}</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="flex items-center gap-2"><Clock8 /> {duration} minutes</p>
  </CardContent>
  <CardFooter>
   <Button>Launch Lesson</Button>
  </CardFooter>
</Card>
  )
}

export default CardCompanion