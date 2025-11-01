import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
	try {
		const body = await req.json();

		const nilai = await prisma.nilai.update({
			where: { id_nilai: body.id_nilai },
			data: {
				nilai: body.nilai,
				nim: body.nim,
				kode_mk: body.kode_mk,
			},
		});

		return NextResponse.json(nilai, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengedit data nilai' },
			{ status: 500 }
		);
	}
}
