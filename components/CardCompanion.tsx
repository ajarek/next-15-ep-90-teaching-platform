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

const CardCompanion = ({type, title, description, time, color}: TypeCompanion) => {
  return (
   <Card className={` rounded-xl border-2 `} style={{backgroundColor: color}}>
  <CardHeader>
    <div className='flex items-center justify-between'>
      <div>{type}</div>
      <Bookmark />
    </div>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="flex items-center gap-2"><Clock8 /> {time}</p>
  </CardContent>
  <CardFooter>
   <Button>Launch Lesson</Button>
  </CardFooter>
</Card>
  )
}

export default CardCompanion