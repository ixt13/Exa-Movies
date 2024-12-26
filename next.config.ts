import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		domains: [
			'image.openmoviedb.com',
			'exa-movies.vercel.app',
			'https://api.kinopoisk.dev',
		],
	},
}

export default nextConfig
