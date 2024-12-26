'use client'

import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { iPagination } from './types'

export const PaginationProvider = ({ pages, page }: iPagination) => {
	const router = useRouter()

	const getPagination = useMemo(() => {
		if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1)

		const result = []

		result.push(1)

		if (page >= 4) result.push('...')

		const start = Math.max(2, page - 1)
		const end = Math.min(pages - 1, page < 4 ? 5 : page + 1)

		for (let i = start; i <= end; i++) {
			result.push(i)
		}

		if (page < pages - 3) result.push('...')

		result.push(pages)

		return result
	}, [pages, page])

	const handlePageClick = (pageNumber: number | string) => {
		router.push(`${pageNumber}`)
	}

	return (
		<div>
			<ul
				style={{
					listStyle: 'none',
					padding: 0,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{getPagination.map((item, index) => (
					<li key={index} style={{ display: 'inline-block', margin: '0 5px' }}>
						{item === '...' ? (
							<span>...</span>
						) : (
							<button
								onClick={e => {
									e.preventDefault()
									handlePageClick(item)
								}}
								style={{
									padding: '5px 10px',
									background: item === page ? 'lightblue' : 'white',
									border: '1px solid gray',
									cursor: 'pointer',
								}}
							>
								{item}
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
