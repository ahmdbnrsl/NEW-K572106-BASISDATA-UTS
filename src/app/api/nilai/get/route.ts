import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const nilai = await prisma.nilai.findMany({
			include: {
				mahasiswa: {
					select: { nama: true },
				},
				mataKuliah: {
					select: { nama_mk: true },
				},
			},
		});

		const hasil = nilai.map((n) => ({
			id_nilai: n.id_nilai,
			nama: n.mahasiswa.nama,
			mata_kuliah: n.mataKuliah.nama_mk,
			nilai: n.nilai,
		}));

		return NextResponse.json(hasil, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Gagal mengambil data nilai' },
			{ status: 500 }
		);
	}
}
