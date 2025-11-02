'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function ModalTambah() {
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	const handleTambah = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = e.target as HTMLFormElement;

		const payload = {
			nim: data.nim.value,
			nama: data.nama.value,
			prodi: data.prodi.value,
			angkatan: Number(data.angkatan.value),
		};

		for (const key in payload) {
			if (payload[key as keyof typeof payload] === '') {
				return;
			}
		}
		setError('');
		setLoading(true);
		fetch('/api/mahasiswa/add', {
			method: 'POST',
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				router.refresh();
				router.back();
			})
			.catch((err) => {
				setLoading(false);
				setError('Terjadi Kesalahan : ' + err.message);
				console.log(err);
			});
	};
	return (
		<div className="absolute inset-0 bg-zinc-500/30 flex justify-center items-center">
			<div className="bg-zinc-100 w-full h-full md:h-auto md:max-w-md flex flex-col items-center px-4 py-12 md:rounded-lg md:border md:border-zinc-200 md:shadow-2xl md:shadow-zinc-400">
				<h1 className="flex items-center gap-2 w-full mt-4 px-3 text-xl font-semibold">
					Tambah Mahasiswa
				</h1>
				<p className="px-3 mt-1 text-base font-normal w-full text-zinc-500">
					Masukan Infomasi yang Diminta.
				</p>
				{error && (
					<p className="px-3 mt-1 text-base font-normal w-full text-red-500">
						{error}
					</p>
				)}
				<form
					onSubmit={handleTambah}
					className="mt-3 w-full p-2 flex flex-col gap-3"
				>
					<Input
						id="nim"
						name="nim"
						placeholder="Nomor Induk Mahasiswa"
					/>
					<Input id="nama" name="nama" placeholder="Nama Mahasiswa" />
					<Input id="prodi" name="prodi" placeholder="Prodi" />
					<Input
						id="angkatan"
						name="angkatan"
						placeholder="Angkatan"
					/>
					<div className="flex justify-end gap-2">
						<Button
							onClick={() => router.back()}
							type="button"
							className="text-zinc-800 cursor-pointer flex items-center gap-2 bg-zinc-300 hover:bg-zinc-300 active:bg-zinc-300 focus:bg-zinc-300 px-4 py-2"
						>
							Batal
						</Button>
						<Button
							type="submit"
							className="cursor-pointer flex items-center gap-2 bg-sky-800 hover:bg-sky-900 active:bg-sky-900 focus:bg-sky-800 text-zinc-50 px-4 py-2"
						>
							{loading ? (
								'Loading...'
							) : (
								<>
									<Plus /> Tambahkan
								</>
							)}
						</Button>
					</div>
				</form>
				<footer className="mt-3 text-sm text-zinc-500">
					&#169; 2025 | Universitas Komputama
				</footer>
			</div>
		</div>
	);
}
