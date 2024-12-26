'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { iPagination } from './types'

import styles from './Pagination.module.scss'

export const PaginationProvider = ({ pages, page, size }: iPagination) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const router = useRouter()

	const getPagination = useMemo(() => {
		if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1)

		const result = []

		result.push(1)

		if (page >= 4) result.push('...')

		const start = Math.max(2, page - 2)
		const end = Math.min(pages - 1, page < 4 ? 5 : page + 2)

		for (let i = start; i <= end; i++) {
			result.push(i)
		}

		if (page < pages - 3) result.push('...')

		result.push(pages)

		return result
	}, [pages, page])

	const handlePageClick = (pageNumber: number | string) => {
		if (isClicked) return
		setIsClicked(true)
		router.push(`${pageNumber}`)
	}

	return (
		<ul
			style={{
				listStyle: 'none',
				paddingTop: '24px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<li>
				<button
					className={`${styles.button}    ${
						page === 1 && styles.buttonDisabled
					}`}
					onClick={() => {
						if (isClicked) return
						setIsClicked(true)
						handlePageClick(page - 1)
					}}
				>{`<`}</button>
			</li>
			{getPagination.map((item, index) => (
				<li key={index} style={{ display: 'inline-block', margin: '0px 8px' }}>
					{item === '...' ? (
						<span className={styles.dots}>...</span>
					) : (
						<button
							className={`${styles.button}  ${
								item === page && styles.buttonCurrent
							}  `}
							onClick={e => {
								e.preventDefault()
								handlePageClick(item)
							}}
						>
							{item}
						</button>
					)}
				</li>
			))}
			<li>
				<button
					className={`${styles.button}   ${
						page === pages && styles.buttonDisabled
					}`}
					onClick={e => {
						if (isClicked) return
						setIsClicked(true)
						handlePageClick(page + 1)
					}}
				>{`>`}</button>
			</li>
		</ul>
	)
}
