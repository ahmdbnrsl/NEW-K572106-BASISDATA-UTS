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
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
	ChevronsUpDown,
	GripVertical,
	Pen,
	SquareArrowDown,
	Trash,
} from 'lucide-react';
import { Button } from './button';
import React from 'react';

export const ReasponsiveTable = ({
	headers,
	data,
	handleDelete,
}: // handleEdit,
{
	headers: string[];
	data: any;
	handleDelete: any;
	// handleEdit: any;
}) => {
	return (
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
								<td className="px-4 py-3 text-base font-semibold flex items-center gap-1">
									<Button className="bg-sky-800 w-fit h-fit rounded-md hover:bg-sky-700 active:bg-sky-700 focus:bg-sky-700 cursor-pointer">
										<Pen />
									</Button>

									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-sky-800 w-fit h-fit rounded-md hover:bg-sky-700 active:bg-sky-700 focus:bg-sky-700 cursor-pointer">
												<Trash />
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogHeader>
												<AlertDialogTitle>
													Apakah Anda yakin akan
													menghapus data ini
												</AlertDialogTitle>
												<AlertDialogDescription>
													Tindakan yang Anda lakukan
													tidak dapat dikembalikan
												</AlertDialogDescription>
											</AlertDialogHeader>
											<AlertDialogFooter>
												<AlertDialogCancel id="close_btn">
													Batal
												</AlertDialogCancel>
												<AlertDialogAction
													onClick={(
														e: React.MouseEvent<HTMLButtonElement>
													) => handleDelete(e, items)}
													className="bg-red-500 text-zinc-100 hover:bg-red-500/70 active:bg-red-500 focus:bg-red-500"
												>
													Ya, Saya Yakin
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
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
};
