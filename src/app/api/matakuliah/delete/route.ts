import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
	try {
		const body = await req.json();

		const matakuliah = await prisma.mataKuliah.delete({
			where: { kode_mk: body.kode_mk },
		});

		return NextResponse.json(matakuliah, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menghapus data matakuliah' },
			{ status: 500 }
		);
	}
}
