import ThemeProvider from '@/providers/ThemeProvider'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar/SideBar'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'User Dashboard',
	description: 'A simple User Dashboard'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={open_sans.className}>
				<ThemeProvider><SideBar />{children}</ThemeProvider>
			</body>
		</html>
	)
}
