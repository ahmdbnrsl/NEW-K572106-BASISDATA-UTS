'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	ChevronsUpDown,
	GripVertical,
	Pen,
	SquareArrowDown,
	Trash,
} from 'lucide-react';

export const ReasponsiveTable = ({
	headers,
	data,
	children,
}: {
	headers: string[];
	data: any;
	children: React.ReactNode;
}) => (
	<div className="overflow-x-auto mt-8 bg-zinc-100 rounded-md p-5 border border-zinc-300">
		<table className="rounded-md min-w-full divide-y divide-zinc-200 bg-zinc-100">
			<thead className="bg-zinc-100">
				<tr>
					{headers.map((header) => (
						<th
							key={header}
							className="px-4 py-3 text-left font-semibold text-zinc-200 bg-sky-800 text-base"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>

			<tbody className="divide-y divide-zinc-100">
				{data &&
					data.map((items: any, index: number) => (
						<tr key={index} className="hover:bg-sky-100">
							{items.map((item: any, idx: number) => (
								<td
									key={idx}
									className="px-4 py-3 text-base font-semibold"
								>
									{item}
								</td>
							))}
							<td className="px-4 py-3 text-base font-semibold">
								<DropdownMenu>
									<DropdownMenuTrigger className="cursor-pointer bg-zinc-200 p-0.5 rounded-md">
										<ChevronsUpDown
											className="text-sky-800"
											width={20}
											height={20}
										/>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel className="w-full text-center font-semibold text-base">
											Aksi
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem className="flex items-center gap-2 w-full justify-center">
											<Pen width={20} height={20} /> Edit
										</DropdownMenuItem>
										<DropdownMenuItem className="flex items-center gap-2 text-red-500 w-full justify-center">
											<Trash
												className="text-red-500"
												width={20}
												height={20}
											/>{' '}
											Hapus
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</td>
						</tr>
					))}
				{data.length === 0 && (
					<tr>
						<td className="px-4 py-3 text-base font-semibold text-zinc-500">
							Tidak ada data
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</div>
);
