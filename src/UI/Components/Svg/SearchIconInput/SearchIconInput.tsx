import { CSSProperties, FC } from 'react'
import styles from './SearchIconInput.module.scss'
interface iSearchIconInput {
	style?: CSSProperties | undefined
}

export const SearchIconInput: FC<iSearchIconInput> = ({ style }) => {
	return (
		<svg className={styles.image} style={style} viewBox='0 0 48 48' fill='none'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M21.8745 0C9.79357 0 0 9.7934 0 21.874C0 33.9552 9.79357 43.7486 21.8745 43.7486C26.152 43.7486 30.1428 42.5208 33.5133 40.3986L39.689 46.5738C41.5902 48.4754 44.673 48.4754 46.5741 46.5738C48.4753 44.6726 48.4753 41.5899 46.5741 39.6888L40.3989 33.5136C42.5211 30.1426 43.7489 26.1519 43.7489 21.874C43.7489 9.7934 33.9553 0 21.8745 0ZM9.73709 21.874C9.73709 15.1711 15.171 9.73697 21.8745 9.73697C28.578 9.73697 34.0118 15.1711 34.0118 21.874C34.0118 28.5774 28.578 34.0116 21.8745 34.0116C15.171 34.0116 9.73709 28.5774 9.73709 21.874Z'
				fill='currentColor'
			/>
		</svg>
	)
}
