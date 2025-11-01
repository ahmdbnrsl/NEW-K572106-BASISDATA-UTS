import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const nilai = await prisma.nilai.create({
			data: {
				id_nilai: body.id_nilai,
				nilai: body.nilai,
				nim: body.nim,
				kode_mk: body.kode_mk,
			},
		});

		return NextResponse.json(nilai, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menambahkan nilai' },
			{ status: 500 }
		);
	}
}
