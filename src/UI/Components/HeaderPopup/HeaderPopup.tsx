'use client'

import { categories } from '@/consts'
import { FC, MutableRefObject, useEffect, useState } from 'react'
import { YearSelectAndSearch } from '../YearSelectAndSearch/YearSelectAndSearch'
import styles from './HeaderPopup.module.scss'

interface iHeaderPopup {
	className?: string
	isPopup: boolean
	setGenre: (genre: string) => void
	setYear: (year: number) => void
	isHoverRef: MutableRefObject<{ isHover: boolean }>
	setIsPopup: (value: boolean) => void
}

export const HeaderPopup: FC<iHeaderPopup> = ({
	isPopup,
	setGenre,
	setYear,
	isHoverRef,
	setIsPopup,
}) => {
	const [textContent, setTextContent] = useState<string | null>(null)
	const [isOverflow, setIsOverflow] = useState<boolean>(false)

	useEffect(() => {
		if (!isPopup) {
			setIsOverflow(false)
		}
	}, [isPopup])

	return (
		<div
			className={`${styles.popup} ${
				isPopup ? styles.popupVisible : styles.popupHidden
			} ${isOverflow ? styles.popupOverflowAuto : ''}`}
			onTransitionEnd={() => {
				if (isPopup) {
					setIsOverflow(true)
				}
			}}
		>
			<div
				className={styles.container}
				onMouseEnter={() => {
					isHoverRef.current.isHover = true
					console.log('Mouse entered popup')
				}}
				onMouseLeave={() => {
					isHoverRef.current.isHover = false
					setIsPopup(false)
					console.log('Mouse left popup')
				}}
			>
				<div className={styles.categories}>
					{categories.map((el, index) => (
						<div
							key={index}
							className={`${styles.element} ${
								textContent === el ? styles.elementActive : ''
							}`}
							onClick={() => {
								setTextContent(el)
								setGenre(el)
							}}
						>
							{el}
						</div>
					))}
					<YearSelectAndSearch setYear={setYear} />
				</div>
			</div>
		</div>
	)
}
