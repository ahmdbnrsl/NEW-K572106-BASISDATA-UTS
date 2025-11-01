import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
	try {
		const body = await req.json();

		const matakuliah = await prisma.mataKuliah.update({
			where: { kode_mk: body.kode_mk },
			data: {
				nama_mk: body.nama_mk,
				sks: body.sks,
				semester: body.semester,
			},
		});

		return NextResponse.json(matakuliah, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengedit data matakuliah' },
			{ status: 500 }
		);
	}
}
