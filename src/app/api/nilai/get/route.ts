import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const nilai = await prisma.nilai.findMany();

		return NextResponse.json(nilai, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengambil data nilai' },
			{ status: 500 }
		);
	}
}
