import React from 'react';

export default function Layout({
	children,
	modals,
}: {
	children: React.ReactNode;
	modals: React.ReactNode;
}) {
	return (
		<div className="min-h-screen relative w-full flex justify-center overflow-hidden">
			{children}
			{modals}
		</div>
	);
}
