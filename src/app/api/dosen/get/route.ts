import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const dosen = await prisma.dosen.findMany({
			orderBy: { nama: 'asc' },
		});

		return NextResponse.json(dosen, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengambil data dosen' },
			{ status: 500 }
		);
	}
}
