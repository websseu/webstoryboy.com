'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { IPostInput } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostInputSchema } from '@/lib/validator'
import { createPost } from '@/lib/actions/post.actions'
import { toast } from 'sonner'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import MdEditor from 'react-markdown-editor-lite'
import ReactMarkdown from 'react-markdown'
import 'react-markdown-editor-lite/lib/index.css'
import PostTag from './post-tag'
import PostTooltip from './post-tooltip'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const postDefaultValues: IPostInput =
  process.env.NODE_ENV === 'development'
    ? {
        title: '웹디자인개발기능사 레이아웃 유형(A-1)',
        slug: 'webdesign2025 A1',
        category: '',
        subCategory: '',
        components: '',
        description: '',
        isPublished: true,
        author: '',
        images: '',
        youtubeId: '',
        tags: [],
        reviews: [],
        numReviews: 0,
        numViews: 0,
        numLikes: 0,
      }
    : {
        title: '',
        slug: '',
        category: '',
        subCategory: '',
        components: '',
        description: '',
        isPublished: true,
        author: '',
        images: '',
        youtubeId: '',
        tags: [],
        reviews: [],
        numReviews: 0,
        numViews: 0,
        numLikes: 0,
      }

export default function PostCreate() {
  const router = useRouter()

  const form = useForm<IPostInput>({
    resolver: zodResolver(PostInputSchema),
    defaultValues: postDefaultValues,
  })

  const onSubmit = async (data: IPostInput) => {
    try {
      const res = await createPost(data)

      if (res.success) {
        toast.success(res.message)
        router.push(`/admin/posts`)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('글 작성 중 오류가 발생했습니다.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>타이틀 *</FormLabel>
                <FormControl>
                  <Input placeholder='제목을 적어주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='slug'
            render={({ field }) => (
              <FormItem className='w-full relative'>
                <FormLabel>
                  슬러그 *
                  <PostTooltip text='슬러그는 페이지 영문 주소를 나타냅니다.' />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='영문 페이지 주소를 적어주세요!'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>카테고리</FormLabel>
                <FormControl>
                  <Input placeholder='카테고리를 선텍하세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subCategory'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>서브 카테고리</FormLabel>
                <FormControl>
                  <Input placeholder='서브 카테고리를 선텍하세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='youtubeId'
            render={({ field }) => (
              <FormItem className='w-full relative'>
                <FormLabel>
                  유투브ID
                  <PostTooltip text='유튜브ID가 있으면 유튜브로 연결할 수 있습니다.' />
                </FormLabel>
                <FormControl>
                  <Input placeholder='youtubeID를 작성하세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>작성자</FormLabel>
                <FormControl>
                  <Input placeholder='작성자를 작성하세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>태그</FormLabel>
                <FormControl>
                  <PostTag tags={field.value || []} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='relative'>
          <Tabs defaultValue='description' className='w-full'>
            <TabsList>
              <TabsTrigger value='description'>설명</TabsTrigger>
              <TabsTrigger value='components'>컴퍼넌트</TabsTrigger>
            </TabsList>
            <TabsContent value='description'>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <MdEditor
                        // value={markdown}
                        {...field}
                        style={{ height: '500px' }}
                        renderHTML={(text) => (
                          <ReactMarkdown>{text}</ReactMarkdown>
                        )}
                        onChange={({ text }) =>
                          form.setValue('description', text)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent value='components'>
              <FormField
                control={form.control}
                name='components'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input placeholder='컴퍼넌트를 작성하세요!' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
          </Tabs>
          <div className='absolute right-0 top-3'>
            <PostTooltip text='설명 또는 컴포넌트를 선택해서 적용할 수 있습니다. 컴포넌트는 코드 작성을 의미합니다.' />
          </div>
        </div>

        <div>
          <FormField
            control={form.control}
            name='isPublished'
            render={({ field }) => (
              <FormItem className='flex gap-2 justify-center items-center'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className='h-5 w-5 mt-[6px]'
                  />
                </FormControl>
                <FormLabel>공개</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className='mt-6'>
          <Button
            type='submit'
            variant='black'
            size='lg'
            disabled={form.formState.isSubmitting}
            className='w-full py-6'
          >
            {form.formState.isSubmitting ? '작성중...' : '작성하기'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
