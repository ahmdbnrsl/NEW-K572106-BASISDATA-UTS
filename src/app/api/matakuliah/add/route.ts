import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const matakuliah = await prisma.mataKuliah.create({
			data: {
				kode_mk: body.kode_mk,
				nama_mk: body.nama_mk,
				sks: body.sks,
				semester: body.semester,
			},
		});

		return NextResponse.json(matakuliah, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menambahkan matakuliah' },
			{ status: 500 }
		);
	}
}
