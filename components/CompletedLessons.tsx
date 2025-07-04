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
    <div>
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
                    <Image
                      src={'/icons/coding.svg'}
                      alt='icon'
                      width={50}
                      height={50}
                    />
                    <div className='flex flex-col items-start gap-1 '>
                      <h2 className='text-xl font-semibold'>{item.name}</h2>
                      <p>{item.subject}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.topic}</TableCell>
                <TableCell>{item.duration}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CompletedLessons
