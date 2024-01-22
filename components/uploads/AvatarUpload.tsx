'use client'

import cn from 'classnames';
import SvgCollection from '@/components/svgs/SvgCollection';
import { ChangeEvent, useRef, useState, Dispatch, SetStateAction } from 'react';
import { fileImageCompress } from './imageCompress';
import Image from 'next/image';

type UploadProps = {
  name: string;
  setImgData: Dispatch<SetStateAction<File | undefined>>;
}

export default function AvatarUpload({name, setImgData}: UploadProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);
  const acceptType = ['image/png', 'image/jpeg', 'image/webp', 'image/avif']

  const fileUpload = () => fileRef.current?.click();
  const imageCompression = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = event.target.files;
    if (imageFiles?.length) {
      const options = {
        maxSizeMB: 0.7,
        maxWidthOrHeight: 320,
        useWebWorker: true,
      }
      const compressImg =  await fileImageCompress(imageFiles, options);
      if ('status' in compressImg) {
        // toast 부분 생성
        console.error(compressImg.message);
        return;
      }
      const srcUrl = URL.createObjectURL(compressImg[0])
      setImageUrl(srcUrl);
      setImgData(compressImg[0]);
    }
  }

  return (
    <section onClick={fileUpload} className={cn(
      'relative flex justify-center items-center w-[255px] h-[255px] rounded-full cursor-pointer',
      'border-4 border-black dark:border-white',
      {
        'bg-baseLight' : !imageUrl,
        'bg-transparent' : imageUrl
      }
    )}>
      {imageUrl 
        ? <Image className='rounded-full object-cover' fill={true} src={imageUrl} alt="프로필 아바타 업로드" loading='lazy' />
        : <SvgCollection svgShapes='upload' size={112} customStyle='-translate-y-3'/>} 
      <label className="sr-only" htmlFor={name}>{"반려동물 프로필 사진을 설정하실 수 있는 버튼입니다."}</label>
      <input ref={fileRef} className="sr-only" type="file" accept={acceptType.toString()} onChange={imageCompression}/>
    </section>
  )
}

