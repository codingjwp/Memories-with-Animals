import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/instance/prismaClient';

type GetBreedsType = {
  data : {
    id: number;
    speciesId: string;
    breed: string;
    krBreed: string;
  }[] | null;
  error: string | null;
};

export async function GET(req: NextRequest): Promise<NextResponse<GetBreedsType>> {
  try {
    const { searchParams } = new URL(req.url);
    const species = searchParams.get('species');
    if (!species)
      return NextResponse.json({ data: null, error: '반려동물을 선택을 해주세요.' }, { status: 400 });
    const breeds = await prisma.breeds.findMany({
      where: {
        speciesId: `${species}`
      }
    });
    return NextResponse.json({data: breeds, error: null}, {status: 204});
  }catch(error: unknown) {
    return NextResponse.json({ data: null, error: (error as Error).message ?? 'Unable to fetch breeds data' }, { status: 500 });
  }
}