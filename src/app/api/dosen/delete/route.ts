import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
	try {
		const body = await req.json();

		const dosen = await prisma.dosen.delete({
			where: { nidn: body.nidn },
		});

		return NextResponse.json(dosen, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal menghapus data dosen' },
			{ status: 500 }
		);
	}
}
