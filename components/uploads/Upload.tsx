'use client'

import cn from 'classnames';
import SvgCollection from '@/components/svgs/SvgCollection';
import { ChangeEvent, useRef } from 'react';
import imageCompression, { Options } from "browser-image-compression";

type UploadProps = {
  name: string;
  multiple?: boolean;
  alt?: string;
  type?: "post" | "avatar";
}

export default function Upload({name, multiple, alt, type="post"}: UploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const acceptType = {
    'post': ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
    'avatar': ['image/png', 'image/jpeg', 'image/webp', 'image/avif'],
  }

  const fileUpload = () => fileRef.current?.click();
  const imageCompression = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = event.target.files;
    if (imageFiles?.length) {
      fileImageCompress(imageFiles, "avatar");
    }
  }

  return (
    <section onClick={fileUpload} className="flex justify-center items-center w-[255px] h-[255px] rounded-full bg-baseLight cursor-pointer">
      <SvgCollection svgShapes='upload' size={112} customStyle='-translate-y-3'/>
      <label className="sr-only" htmlFor={name}>{alt ? alt : '선택한 이미지를 업로드하는 부분 입니다.'}</label>
      <input ref={fileRef} className="sr-only" type="file" id={name} name={name} multiple={multiple} accept={acceptType[`${type}`].toString()} onChange={imageCompression}/>
    </section>
  )
}

async function fileImageCompress(files: FileList, useType: "avatar" | "post") {
  const arrayFiles = Array.from(files);
  const fileOption = {
    "avatar": {
      maxSizeMB: 0.7,
      maxWidthOrHeight: 320,
      useWebWorker: true,
    },
    "post": {
      maxSizeMB: 0.7,
      maxWidthOrHeight: 100,
      useWebWorker: true,
    }
  }
  try {
    const compressImages = await Promise.all(arrayFiles.map((file) =>  imageCompression(file, {
      ...fileOption[`${useType}`],
      fileType: file.type
    })))
    return compressImages;
  } catch(error) {
    console.error(error);
  }
}