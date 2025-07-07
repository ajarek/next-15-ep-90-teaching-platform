'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Trash2, Plus, User } from 'lucide-react'

// Zod schema for form validation
const companionSchema = z.object({
  mainCompanion: z.object({
    name: z.string().min(1, 'Companion name is required'),
    subject: z.string().min(1, 'Subject is required'),
  }),
  additionalCompanions: z.array(
    z.object({
      name: z.string().min(1, 'Companion name is required'),
    })
  ),
})

type CompanionFormData = z.infer<typeof companionSchema>

const CompanionBuilder = () => {
  const form = useForm<CompanionFormData>({
    resolver: zodResolver(companionSchema),
    defaultValues: {
      mainCompanion: {
        name: '',
        subject: '',
      },
      additionalCompanions: [
        { name: '' },
        { name: '' },
        { name: '' },
        { name: '' },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'additionalCompanions',
  })

  const onSubmit = (data: CompanionFormData) => {
    console.log('Form submitted:', data)
    // Handle form submission here
    alert('Companion created successfully!')
  }

  const subjects = [
    'System',
    'Art & Design',
    'Business',
    'Education',
    'Health & Fitness',
    'Language Learning',
    'Programming',
    'Science',
    'Travel',
    'Other',
  ]

  return (
    
      <div className='w-full max-w-2xl mx-auto'>
       
        

        {/* Main Content */}
        <Card className='shadow-none border-0 bg-white/80 backdrop-blur-sm'>
          <CardHeader className='pb-6'>
            <CardTitle className='text-2xl font-bold text-gray-900 flex items-center gap-2'>
              <User className='w-6 h-6 text-blue-600' />
              Companion Builder
            </CardTitle>
            <CardDescription className='text-gray-600'>
              Create and customize your AI companions with unique personalities
              and expertise
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <div className='space-y-8'>
                {/* Main Companion Section */}
                <div className='space-y-6'>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                      <span className='text-blue-600 font-semibold text-sm'>
                        1
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Primary Companion
                    </h3>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='mainCompanion.name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-gray-700'>
                            Companion Name{' '}
                            <span className='text-red-500'>*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Enter the companion name'
                              {...field}
                              className='h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            />
                          </FormControl>
                          <FormMessage className='text-red-500 text-sm' />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='mainCompanion.subject'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-gray-700'>
                            Subject <span className='text-red-500'>*</span>
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className='h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500'>
                                <SelectValue placeholder='Select a subject' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjects.map((subject) => (
                                <SelectItem
                                  key={subject}
                                  value={subject}
                                >
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className='text-red-500 text-sm' />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Companions Section */}
                <div className='space-y-6'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                        <span className='text-green-600 font-semibold text-sm'>
                          2
                        </span>
                      </div>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        Additional Companions
                      </h3>
                    </div>
                    <Button
                      type='button'
                      variant='outline'
                      size='sm'
                      onClick={() => append({ name: '' })}
                      className='flex items-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50'
                    >
                      <Plus className='w-4 h-4' />
                      Add Companion
                    </Button>
                  </div>

                  <div className='grid gap-4'>
                    {fields.map((field, index) => (
                      <div
                        key={field.id}
                        className='flex gap-3 items-start'
                      >
                        <div className='flex-1'>
                          <FormField
                            control={form.control}
                            name={`additionalCompanions.${index}.name`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className='text-sm font-medium text-gray-700'>
                                  Companion Name {index + 1}{' '}
                                  <span className='text-red-500'>*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder='Enter the companion name'
                                    {...field}
                                    className='h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                                  />
                                </FormControl>
                                <FormMessage className='text-red-500 text-sm' />
                              </FormItem>
                            )}
                          />
                        </div>
                        {fields.length > 1 && (
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            onClick={() => remove(index)}
                            className='mt-8 text-red-500 hover:text-red-700 hover:bg-red-50'
                          >
                            <Trash2 className='w-4 h-4' />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center pt-6'>
                  <Button
                    type='button'
                    onClick={form.handleSubmit(onSubmit)}
                    className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
                  >
                    Create Companions
                  </Button>
                </div>
              </div>
            </Form>
          </CardContent>
        </Card>
      </div>
    
  )
}

export default CompanionBuilder
