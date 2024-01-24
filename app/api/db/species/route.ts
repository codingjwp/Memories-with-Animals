import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/instance/prismaClient';


type GetSpeciesType = {
  data : {
    species: string;
    krSpecies: string;
  }[] | null;
  error: string | null;
};

export async function GET(): Promise<NextResponse<GetSpeciesType>> {  
  try {
    const species = await prisma.species.findMany();
    return NextResponse.json({data: species, error: null}, {status: 204})
  }catch(error: unknown) {
    return NextResponse.json({data:null, error: (error as Error).message ?? 'Unable to fetch species data' }, { status: 500 })
  }
}