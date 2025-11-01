import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
	try {
		const body = await req.json();

		const dosen = await prisma.dosen.update({
			where: { nidn: body.nidn },
			data: {
				nama: body.nama,
				bidang_keahlian: body.bidang_keahlian,
				email: body.email,
			},
		});

		return NextResponse.json(dosen, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengedit data dosen' },
			{ status: 500 }
		);
	}
}
