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
						<tr key={index} className="hover:bg-zinc-300">
							{items.map((item: any, idx: number) => (
								<td
									key={idx}
									className="px-4 py-3 text-base font-semibold"
								>
									{item}
								</td>
							))}
							<td className="px-4 py-3 text-base font-semibold">
								{children}
							</td>
						</tr>
					))}
				{data.length === 0 && (
					<tr className="hover:bg-zinc-300">
						<td className="px-4 py-3 text-base font-semibold text-zinc-500">
							Tidak ada data
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</div>
);
