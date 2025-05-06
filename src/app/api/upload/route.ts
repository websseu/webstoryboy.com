import { NextResponse } from 'next/server'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: '파일이 없습니다.' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResult: UploadApiResponse = await new Promise(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: 'profile',
              resource_type: 'image',
              quality: 'auto',
              fetch_format: 'auto',
              transformation: [
                { width: 300, height: 300, crop: 'fill', gravity: 'face' },
              ],
            },
            (error, result) => {
              if (error || !result)
                return reject(error || new Error('No result'))
              resolve(result)
            }
          )
          .end(buffer)
      }
    )

    return NextResponse.json({ url: uploadResult.secure_url })
  } catch (error) {
    console.error('[UPLOAD_ERROR]', error)
    return NextResponse.json(
      { error: '이미지 업로드에 실패했습니다.' },
      { status: 500 }
    )
  }
}
