import type { Metadata } from 'next'

import { Header } from '@/UI/Components/Header/Header'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Exa Movies',
	description: 'View movies with Exa',
}

const font = Kumbh_Sans({
	weight: '400',
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={font.className}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
