import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const mahasiswa = await prisma.mahasiswa.create({
			data: {
				nim: body.nim,
				nama: body.nama,
				prodi: body.prodi,
				angkatan: body.angkatan,
			},
		});

		return NextResponse.json(mahasiswa, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menambahkan mahasiswa' },
			{ status: 500 }
		);
	}
}
