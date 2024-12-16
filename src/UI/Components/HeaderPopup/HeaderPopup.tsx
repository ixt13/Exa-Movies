'use client'

import { categories } from '@/consts'
import { FC, useState } from 'react'
import { YearSelectAndSearch } from '../YearSelectAndSearch/YearSelectAndSearch'
import styles from './HeaderPopup.module.scss'

interface iHeaderPopup {
	className?: string
	setIsOverflow: (e: boolean) => void
	isPopup: boolean
}
export const HeaderPopup: FC<iHeaderPopup> = ({
	className,
	setIsOverflow,
	isPopup,
}) => {
	const [textContent, setTextContent] = useState<string | null>(null)

	return (
		<div
			className={`${className}  `}
			onTransitionEnd={() => {
				if (isPopup) {
					setIsOverflow(true)
				} else {
					setIsOverflow(false)
				}
			}}
		>
			<div className={styles.container}>
				<div className={styles.categories}>
					{categories.map((el, index) => (
						<div
							key={index}
							className={`${styles.element} ${
								textContent === el && styles.elementActive
							}`}
							onClick={() => {
								setTextContent(el)
							}}
						>
							{el}
						</div>
					))}
					<YearSelectAndSearch />
				</div>
			</div>
		</div>
	)
}
