import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
	try {
		const body = await req.json();

		const mahasiswa = await prisma.mahasiswa.delete({
			where: { nim: body.nim },
		});

		return NextResponse.json(mahasiswa, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menghapus data mahasiswa' },
			{ status: 500 }
		);
	}
}
