import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import dataCompanions from '@/data/companions.json'
import Image from 'next/image'

const CompletedLessons = () => {
  return (
    <div className='w-full border-2 rounded-2xl p-4'>
      <h1 className='text-3xl font-bold'>Recently completed lessons</h1>
      <Table className='w-full'>
        <TableHeader>
          <TableRow>
            <TableHead>Lessons</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataCompanions
            .filter((item) => item.completed === true)
            .map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className='flex items-center gap-4'>
                    <div className=' w-12 h-12 rounded-sm flex items-center justify-center ' style={{backgroundColor:item.style}}>
                      <Image
                        src={item.icon}
                        alt='icon'
                        width={30}
                        height={30}
                      />
                    </div>
                    
                    <div className='flex flex-col items-start gap-1 '>
                      <h2 className='text-xl font-semibold'>{item.name}</h2>
                      <p>{item.subject}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell > <p className='w-fit bg-primary text-background  px-4 py-2 rounded-full' >{item.topic}</p></TableCell>
                <TableCell className='font-semibold'>{item.duration}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CompletedLessons
