import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const mahasiswa = await prisma.mahasiswa.findMany({
			orderBy: { nama: 'asc' },
		});

		return NextResponse.json(mahasiswa, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengambil data mahasiswa' },
			{ status: 500 }
		);
	}
}
