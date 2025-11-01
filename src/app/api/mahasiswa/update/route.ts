import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
	try {
		const body = await req.json();

		const mahasiswa = await prisma.mahasiswa.update({
			where: { nim: body.nim },
			data: {
				nama: body.nama,
				prodi: body.prodi,
				angkatan: body.angkatan,
			},
		});

		return NextResponse.json(mahasiswa, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengedit data mahasiswa' },
			{ status: 500 }
		);
	}
}
