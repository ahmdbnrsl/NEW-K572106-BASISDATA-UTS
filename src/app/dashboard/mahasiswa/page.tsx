'use client';
import { Button } from '@/components/ui/button';
import { Pen, Plus, Trash } from 'lucide-react';
import { ReasponsiveTable } from '@/components/ui/responsive_table';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
const headers = ['NIM', 'Nama', 'Prodi', 'Angkatan', 'Aksi'];

export default function Mahasiswa() {
	const [data, setData] = useState<any>([]);
	const pathname = usePathname();

	useEffect(() => {
		fetch('/api/mahasiswa/get', { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				const result = data.map((obj: any) => Object.values(obj));
				setData(result);
			});
	}, [pathname]);

	return (
		<div className="w-full flex p-5 flex-col overflow-auto">
			<div className="mt-8 w-full flex justify-between">
				<h1 className="text-3xl font-semibold text-zinc-800">
					Daftar Mahasiswa
				</h1>
				<Button className="flex items-center gap-2 px-12 py-4 text-base font-normal cursor-pointer bg-sky-800 hover:bg-sky-900 active:bg-sky-900 focus:bg-sky-800">
					<Plus /> Tambah Mahasiswa
				</Button>
			</div>
			<ReasponsiveTable headers={headers} data={data}>
				<Button
					type="button"
					className="bg-transparent border-0 focus:bg-transparent active:bg-transparent hover:bg-transparent w-auto z-3 text-sky-800 cursor-pointer"
				>
					<Pen width={60} height={60} />
				</Button>
				<Button
					type="button"
					className="bg-transparent border-0 focus:bg-transparent active:bg-transparent hover:bg-transparent w-auto z-3 text-red-500 cursor-pointer"
				>
					<Trash width={60} height={60} />
				</Button>
			</ReasponsiveTable>
		</div>
	);
}
