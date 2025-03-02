'use client'

import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import data from '@/lib/data' // data.ts에서 categories 가져오기
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

export default function PostSelect() {
  const { control, setValue, watch } = useFormContext() // react-hook-form 컨텍스트 사용
  const selectedCategory = watch('category') // 현재 선택된 카테고리 값
  const [subCategories, setSubCategories] = useState<
    { label: string; value: string }[]
  >([])

  useEffect(() => {
    // 선택된 카테고리에서 서브 카테고리 목록 가져오기
    const category = data.categories.find(
      (cat) => cat.value === selectedCategory
    )
    setSubCategories(category ? category.subCategories : [])
    setValue('subCategory', '') // 서브카테고리 초기화
  }, [selectedCategory, setValue])

  return (
    <>
      {/* 카테고리 선택 */}
      <FormField
        control={control}
        name='category'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel>카테고리</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder='카테고리를 선택하세요' />
                </SelectTrigger>
                <SelectContent>
                  {data.categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* 서브 카테고리 선택 */}
      <FormField
        control={control}
        name='subCategory'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel>서브 카테고리</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={subCategories.length === 0}
              >
                <SelectTrigger>
                  <SelectValue placeholder='서브 카테고리를 선택하세요' />
                </SelectTrigger>
                <SelectContent>
                  {subCategories.map((sub) => (
                    <SelectItem key={sub.value} value={sub.value}>
                      {sub.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
