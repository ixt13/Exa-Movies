import { CSSProperties, FC } from 'react'

interface iImdbIcon {
	style?: CSSProperties | undefined
	className?: string
}

export const ImdbIcon: FC<iImdbIcon> = ({ className }) => {
	return (
		<svg className={className} viewBox='0 0 114 103' fill='none'>
			<path
				d='M85 54.4338C85.0062 51.9341 85.851 49.5388 87.3499 47.7712C88.8489 46.0035 90.8801 45.0073 92.9999 45C95.1197 45.0072 97.151 46.0034 98.65 47.771C100.149 49.5386 100.994 51.934 101 54.4338V60.5658C100.994 63.0657 100.149 65.4611 98.65 67.2287C97.151 68.9964 95.1197 69.9927 92.9999 70C90.88 69.9927 88.8488 68.9964 87.3498 67.2287C85.8509 65.461 85.0061 63.0657 85 60.5658'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M85 70V33'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M58 70V33H62.9057C66.9054 33.0143 70.7379 34.968 73.5661 38.4342C76.3943 41.9005 77.9883 46.5976 78 51.4997C77.9883 56.4017 76.3943 61.0988 73.5661 64.5651C70.7379 68.0314 66.9054 69.985 62.9057 69.9993L58 70Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M20 70V33L35 70L50 33V70'
				stroke='currentColor'
				strokeWidth='4'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13 33V70'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M112 94.6129V8.3871C112 6.69313 111.406 5.06855 110.348 3.87074C109.29 2.67293 107.855 2 106.359 2H7.64103C6.14493 2 4.71012 2.67293 3.65222 3.87074C2.59432 5.06855 2 6.69313 2 8.3871V94.6129C2 96.3069 2.59432 97.9315 3.65222 99.1293C4.71012 100.327 6.14493 101 7.64103 101H106.359C107.855 101 109.29 100.327 110.348 99.1293C111.406 97.9315 112 96.3069 112 94.6129Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
