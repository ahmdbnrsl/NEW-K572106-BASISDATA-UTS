import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
	try {
		const body = await req.json();

		const nilai = await prisma.nilai.delete({
			where: { id_nilai: body.id_nilai },
		});

		return NextResponse.json(nilai, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menghapus data nilai' },
			{ status: 500 }
		);
	}
}
