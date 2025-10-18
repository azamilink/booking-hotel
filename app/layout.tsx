import { Raleway } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { auth } from '../auth';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Booking Hotel',
	description: 'Online Boking app',
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<html lang='en'>
			<body className={`${raleway.variable}  antialiased`}>
				<SessionProvider session={session}>
					<Navbar />
					<main className='bg-gray-50 min-h-screen'>{children}</main>
					<Footer />
				</SessionProvider>
			</body>
		</html>
	);
}
