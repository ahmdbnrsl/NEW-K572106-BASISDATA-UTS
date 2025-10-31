import { Book, IdCard, Users } from 'lucide-react';

export default function Dashboard() {
	return (
		<div className="w-full flex p-5 flex-col overflow-auto">
			<h1 className="mt-8 text-3xl font-semibold text-zinc-800">
				Dashboard
			</h1>
			<div className="mt-6 grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<div className="w-full flex px-6 py-8 items-center gap-3 bg-zinc-100 rounded-md shadow-xl shadow-zinc-200 border border-zinc-300">
					<div className="p-5 bg-amber-300/40 rounded-full">
						<Users
							className="text-amber-600"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<h1 className="text-lg font-medium text-zinc-500">
							Total Mahasiswa
						</h1>
						<p className="text-zinc-800 font-bold text-2xl">100</p>
					</div>
				</div>
				<div className="w-full flex px-6 py-8 items-center gap-3 bg-zinc-100 rounded-md shadow-xl shadow-zinc-200 border border-zinc-300">
					<div className="p-5 bg-teal-300/40 rounded-full">
						<IdCard
							className="text-teal-600"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<h1 className="text-lg font-medium text-zinc-500">
							Total Dosen
						</h1>
						<p className="text-zinc-800 font-bold text-2xl">100</p>
					</div>
				</div>
				<div className="w-full flex px-6 py-8 items-center gap-3 bg-zinc-100 rounded-md shadow-xl shadow-zinc-200 border border-zinc-300">
					<div className="p-5 bg-purple-300/40 rounded-full">
						<Book
							className="text-purple-600"
							width={40}
							height={40}
						/>
					</div>
					<div>
						<h1 className="text-lg font-medium text-zinc-500">
							Total Mata Kuliah
						</h1>
						<p className="text-zinc-800 font-bold text-2xl">100</p>
					</div>
				</div>
			</div>
		</div>
	);
}
