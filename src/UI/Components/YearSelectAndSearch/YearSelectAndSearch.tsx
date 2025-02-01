import { getMoviesUniversal } from '@/ApiReq/getMoviesUniversal/getMoviesUniversal'
import countStore from '@/zustand/countStore'
import { useState } from 'react'
import { ArrowIcon } from '../Svg/ArrowIcon/ArrowIcon'
import { SearchIconInput } from '../Svg/SearchIconInput/SearchIconInput'
import styles from './YearSelectAndSearch.module.scss'

interface iYearSelectAndSearchProps {
	setYear: (year: number) => void
}

interface funcProps {
	genre: string | null
	movieType: number | null
	year: number | null
}

export const YearSelectAndSearch = ({ setYear }: iYearSelectAndSearchProps) => {
	const [handleYear, handleSetYear] = useState<string | number>('Выберите год')
	const [isPopup, setIsPopup] = useState<boolean>(false)
	const currentYear = new Date().getFullYear()

	const years = Array.from({ length: 50 }, (_, index) => {
		return (currentYear - index).toString()
	})

	const HandleToggleYearsPupup = () => {
		setIsPopup(prevState => !prevState)
	}

	const { data } = countStore()

	const handleGetMovies = async (colectedData: funcProps) => {
		try {
			const response = await getMoviesUniversal({
				queryParamsProps: {
					year: [colectedData.year?.toString() || ''],
					type: colectedData.movieType?.toString() || '',
					'genres.name': [colectedData.genre || ''],
				},
			})
			return response
		} catch (error) {
			return error
		}
	}
	return (
		<div className={`${styles.yearSelectAndSearch} `}>
			<div className={styles.selectYear}>
				<div
					onClick={HandleToggleYearsPupup}
					className={`${styles.selectYearStatic} ${
						isPopup && styles.selectYearStaticSelected
					}`}
				>
					<p>{handleYear}</p>
					<ArrowIcon className={styles.arrowIcon} />
				</div>
				<div
					className={`${styles.selectYearPopup} ${
						isPopup
							? styles.selectYearPopupVisible
							: styles.selectYearPopupHidden
					}`}
				>
					{years.map((el, index) => (
						<p
							onClick={() => {
								handleSetYear(el)
								setYear(parseInt(el))
								HandleToggleYearsPupup()
							}}
							className={styles.yearsTextContent}
							key={index}
						>
							{el}
						</p>
					))}
				</div>
			</div>
			<button
				onClick={() => {
					console.log(handleGetMovies(data))
				}}
				className={styles.search}
			>
				<SearchIconInput style={{ height: '55%', width: '55%' }} />
			</button>
		</div>
	)
}
