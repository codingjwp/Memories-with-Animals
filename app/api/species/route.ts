import { NextResponse } from 'next/server';
import prisma from '@/lib/instance/prismaClient';

export async function GET(request: Request) {
  try {
    const species = await prisma.species.findMany();
  }catch(error) {
    return;
  }
}