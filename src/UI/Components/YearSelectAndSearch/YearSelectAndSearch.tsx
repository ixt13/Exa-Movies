import countStore from '@/zustand/countStore'
import { useState } from 'react'
import { ArrowIcon } from '../Svg/ArrowIcon/ArrowIcon'
import { SearchIconInput } from '../Svg/SearchIconInput/SearchIconInput'
import styles from './YearSelectAndSearch.module.scss'

interface iYearSelectAndSearchProps {
	setYear: (year: number) => void
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

	const handleGetMovies = async () => {
		const queryParams = new URLSearchParams({
			year: data.year?.toString() || '',
			movieType: data.movieType?.toString() || '',
			'genres.name': data.genre?.toString() || '',
		}).toString()

		const response = await fetch(`/api?${queryParams}`)

		const responseData = await response.json()
		console.log(response)
		console.log(responseData)
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
					handleGetMovies()
				}}
				className={styles.search}
			>
				<SearchIconInput style={{ height: '55%', width: '55%' }} />
			</button>
		</div>
	)
}
