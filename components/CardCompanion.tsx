import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TypeCompanion } from "@/type/typeCompanion"
import { Button } from "./ui/button"
import Image from "next/image"


const CardCompanion = ({topic, name, subject, duration, style, completed = false}: TypeCompanion) => {

  return (
   <Card className={` rounded-xl border-2 `} style={{backgroundColor: style}}>
  <CardHeader>
    <div className='flex items-center justify-between'>
      <div className='w-fit px-4 h-8 flex justify-center items-center bg-primary text-background rounded-sm'>{topic}</div>
      <div className='w-8 h-8 flex justify-center items-center bg-primary rounded-sm'>


        <Image 
                        src={completed ? '/icons/bookmark-filled.svg' : '/icons/bookmark.svg'}
                        alt='icon'
                        width={14}
                        height={14}
                      />


      </div>
    </div>
    <CardTitle>{name}</CardTitle>
    <CardDescription>{subject}</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-2">
      <Image
                        src={'/icons/clock.svg'}
                        alt='icon'
                        width={20}
                        height={20}
                      />
      <p>{duration} minutes</p>
       
       </div>
  </CardContent>
  <CardFooter>
   <Button variant='destructive' className="w-full">Launch Lesson</Button>
  </CardFooter>
</Card>
  )
}

export default CardCompanion