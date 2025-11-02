'use client';
import { Button } from '@/components/ui/button';
import { Pen, Plus, Trash } from 'lucide-react';
import { ReasponsiveTable } from '@/components/ui/responsive_table';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Link from 'next/link';

const headers = ['ID Nilai', 'Nama Mahasiswa', 'Mata Kuliah', 'Nilai', 'Aksi'];

export default function Dosen() {
	const [data, setData] = useState<any>([]);
	const pathname = usePathname();

	const router = useRouter();
	const trigger = React.useRef<number>(0);

	useEffect(() => {
		fetch('/api/nilai/get', { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				const result = data.map((obj: any) => Object.values(obj));
				setData(result);
			});
	}, [pathname, trigger.current]);

	const fetchDeleteData = async (id_nilai: string) => {
		const response = await fetch(`/api/nilai/delete/`, {
			method: 'DELETE',
			body: JSON.stringify({ id_nilai }),
		});
		if (response.ok) {
			alert('Data berhasil dihapus');
			trigger.current += 1;
			document.getElementById('close_btn')?.click();
			router.refresh();
		} else {
			alert('Terjadi kesalahan saat menghapus data');
			console.error('Terjadi kesalahan saat menghapus data');
			document.getElementById('close_btn')?.click();
		}
	};

	const handleDelete = (
		e: React.MouseEvent<HTMLButtonElement>,
		items: any
	) => {
		e.preventDefault();
		fetchDeleteData(items[0]);
	};

	return (
		<div className="w-full flex p-5 flex-col overflow-auto max-h-screen">
			<div className="mt-8 w-full flex-col flex md:flex-row md:justify-between">
				<h1 className="text-3xl font-semibold text-zinc-800">
					Daftar Nilai Mahasiswa
				</h1>
				<Link
					href="/dashboard/nilaimahasiswa/tambah"
					className="justify-center rounded-md text-zinc-100 py-2 mt-5 md:mt-0 flex items-center gap-2 px-12 text-base font-normal cursor-pointer bg-sky-800 hover:bg-sky-900 active:bg-sky-900 focus:bg-sky-800"
				>
					<Plus /> Tambah Nilai
				</Link>
			</div>
			<ReasponsiveTable
				handleDelete={handleDelete}
				headers={headers}
				data={data}
			></ReasponsiveTable>
		</div>
	);
}
