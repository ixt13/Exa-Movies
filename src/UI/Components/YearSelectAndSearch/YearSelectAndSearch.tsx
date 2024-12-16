'use client'

import { useState } from 'react'
import { ArrowIcon } from '../Svg/ArrowIcon/ArrowIcon'
import { SearchIconInput } from '../Svg/SearchIconInput/SearchIconInput'
import styles from './YearSelectAndSearch.module.scss'

export const YearSelectAndSearch = () => {
	const [year, setYear] = useState<string | number>('Выберите год')
	const [isPopup, setIsPopup] = useState<boolean>(false)
	const currentYear = new Date().getFullYear()

	const years = Array.from({ length: 50 }, (_, index) => {
		return (currentYear - index).toString()
	})

	const HandleToggleYearsPupup = () => {
		setIsPopup(prevState => !prevState)
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
					<p>{year}</p>
					<ArrowIcon style={{ width: '20px', height: '20px' }} />
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
								setYear(el)
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
			<div className={styles.search}>
				<SearchIconInput style={{ height: '55%', width: '55%' }} />
			</div>
		</div>
	)
}
