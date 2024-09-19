import Header from "@/components/header";

export default function SetupLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// TODO: Set up the Authentication of Clerk here
	return (
		<>
			<Header />
			<main className="container p-5 md:p-0">
				{children}
			</main>
		</>
	);
}
