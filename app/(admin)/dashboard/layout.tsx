import DashboardNav from "./components/dashboard-nav";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// TODO: Set up the Authentication of Clerk here
	return (
		<>
			<DashboardNav />
			<main className="container p-5 md:p-5">
				{children}
			</main>
		</>
	);
}
