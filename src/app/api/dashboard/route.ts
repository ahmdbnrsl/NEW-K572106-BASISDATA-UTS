import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
	try {
		const totalMahasiswa = await prisma.mahasiswa.count();
		const totalDosen = await prisma.dosen.count();
		const totalMataKuliah = await prisma.mataKuliah.count();

		return NextResponse.json({
			totalMahasiswa,
			totalDosen,
			totalMataKuliah,
		});
	} catch (error) {
		console.error('Error fetching counts:', error);
		return NextResponse.json(
			{ error: 'Gagal mengambil data' },
			{ status: 500 }
		);
	}
}
