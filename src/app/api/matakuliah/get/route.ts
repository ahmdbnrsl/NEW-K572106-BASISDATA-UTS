import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const matakuliah = await prisma.mataKuliah.findMany({
			orderBy: { nama_mk: 'asc' },
		});

		return NextResponse.json(matakuliah, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengambil data matakuliah' },
			{ status: 500 }
		);
	}
}
