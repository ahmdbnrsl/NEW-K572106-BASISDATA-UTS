import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const dosen = await prisma.dosen.create({
			data: {
				nidn: body.nidn,
				nama: body.nama,
				bidang_keahlian: body.bidang_keahlian,
				email: body.email,
			},
		});

		return NextResponse.json(dosen, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menambahkan dosen' },
			{ status: 500 }
		);
	}
}
