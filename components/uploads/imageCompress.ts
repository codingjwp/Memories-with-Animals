import imageCompression, { Options } from "browser-image-compression";

export type ErrorComperssion = {
  status: number;
  message: string;
}

export async function fileImageCompress(files: FileList, options: Options): Promise<File[] | ErrorComperssion> {
  const arrayFiles = Array.from(files);
  try {
    const compressImages = await Promise.all(
        arrayFiles.map((file) =>  imageCompression(file, options))
      )
    return compressImages;
  } catch(error) {
    return {
      status: 500, message: "이미지 업로드 중 문제가 발생하였습니다."
    }
  }
}