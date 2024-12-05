import { CSSProperties, FC } from 'react'

interface iSerialsIcon {
	style?: CSSProperties | undefined
}

export const SerialsIcon: FC<iSerialsIcon> = ({ style }) => {
	return (
		<svg
			style={style}
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0 0H36V36H0V0ZM4 4V8H8V4H4ZM12 4V16H24V4H12ZM28 4V8H32V4H28ZM32 12H28V16H32V12ZM32 20H28V24H32V20ZM32 28H28V32H32V28ZM24 32V20H12V32H24ZM8 32V28H4V32H8ZM4 24H8V20H4V24ZM4 16H8V12H4V16Z'
				fill='black'
			/>
		</svg>
	)
}
