'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, Loader2, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { toast } from 'sonner'

interface ImageUploadProps {
  value?: string | null
  onChange?: (url: string | null) => void
  folder?: string
  multiple?: boolean
  onMultipleChange?: (urls: string[]) => void
  values?: string[]
  className?: string
}

export function ImageUpload({
  value,
  onChange,
  folder = 'flex-it-solutions',
  multiple,
  onMultipleChange,
  values = [],
  className,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const uploadFile = async (file: File) => {
    setUploading(true)
    setProgress(10)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('folder', folder)

    try {
      setProgress(50)
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      setProgress(100)
      return data.url as string
    } finally {
      setUploading(false)
      setProgress(0)
    }
  }

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return
      try {
        if (multiple && onMultipleChange) {
          const urls: string[] = [...values]
          for (const file of acceptedFiles) {
            const url = await uploadFile(file)
            urls.push(url)
          }
          onMultipleChange(urls)
          toast.success(`${acceptedFiles.length} image(s) uploaded`)
        } else {
          const url = await uploadFile(acceptedFiles[0])
          onChange?.(url)
          toast.success('Image uploaded')
        }
      } catch (e) {
        toast.error(e instanceof Error ? e.message : 'Upload failed')
      }
    },
    [multiple, onMultipleChange, values, onChange, folder]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif'] },
    multiple: !!multiple,
    disabled: uploading,
  })

  if (multiple) {
    return (
      <div className={className}>
        <div
          {...getRootProps()}
          className={cn(
            'border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition',
            isDragActive ? 'border-violet-400 bg-violet-50' : 'border-gray-200 hover:border-violet-300',
            uploading && 'opacity-60 pointer-events-none'
          )}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <Loader2 className="w-8 h-8 mx-auto animate-spin text-violet-500" />
          ) : (
            <>
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Drag & drop images or click to upload</p>
            </>
          )}
        </div>
        {values.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {values.map((url, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden border">
                <Image src={url} alt="" fill className="object-cover" />
                <button
                  type="button"
                  onClick={() => onMultipleChange?.(values.filter((_, idx) => idx !== i))}
                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-lg"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {value ? (
        <div className="relative aspect-video max-w-md rounded-2xl overflow-hidden border border-gray-200">
          <Image src={value} alt="Upload preview" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange?.(null)}
            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg shadow"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            'border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition max-w-md',
            isDragActive ? 'border-violet-400 bg-violet-50' : 'border-gray-200 hover:border-violet-300',
            uploading && 'opacity-60'
          )}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <div>
              <Loader2 className="w-8 h-8 mx-auto animate-spin text-violet-500 mb-2" />
              <div className="w-full bg-gray-100 rounded-full h-2 max-w-xs mx-auto">
                <div className="bg-violet-500 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          ) : (
            <>
              <ImageIcon className="w-10 h-10 mx-auto text-gray-300 mb-3" />
              <p className="text-sm font-medium text-gray-700">Drag & drop or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, WebP up to 10MB</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
