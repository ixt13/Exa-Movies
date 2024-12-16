import { CSSProperties, FC } from 'react'

interface iMovieIcon {
	style?: CSSProperties | undefined
}

export const MovieIcon: FC<iMovieIcon> = ({ style }) => {
	return (
		<svg
			style={style}
			viewBox='0 0 36 36'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0 0V36H36V0H0ZM16.0312 3.46154H19.9688V6.23077H16.0312V3.46154ZM6.46875 32.5385H2.53125V29.7692H6.46875V32.5385ZM6.46875 6.23077H2.53125V3.46154H6.46875V6.23077ZM13.2188 32.5385H9.28125V29.7692H13.2188V32.5385ZM13.2188 6.23077H9.28125V3.46154H13.2188V6.23077ZM19.9688 32.5385H16.0312V29.7692H19.9688V32.5385ZM21.8804 18.1609L15.4007 22.9219C15.3534 22.9557 15.2952 22.957 15.248 22.9233C15.2007 22.8895 15.171 22.8286 15.171 22.7596V18V13.2404C15.171 13.1728 15.2007 13.1106 15.248 13.0781C15.2952 13.0443 15.3534 13.0457 15.4007 13.0795L21.8804 17.8405C21.9265 17.873 21.954 17.9352 21.954 18.0001C21.954 18.0663 21.9265 18.1271 21.8804 18.1609ZM26.7188 32.5385H22.7812V29.7692H26.7188V32.5385ZM26.7188 6.23077H22.7812V3.46154H26.7188V6.23077ZM33.4688 32.5385H29.5312V29.7692H33.4688V32.5385ZM33.4688 6.23077H29.5312V3.46154H33.4688V6.23077Z'
				fill='currentColor'
			/>
		</svg>
	)
}
