'use client'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/navigation'
import { iPagination } from './types'

export const PaginationProvider = ({ pages, page }: iPagination) => {
	const router = useRouter()

	return (
		<>
			<Pagination
				sx={{ marginTop: '24px' }}
				page={page}
				count={pages}
				onChange={(_, page) => {
					router.push(`/${page}`)
					console.log(page)
				}}
				variant='outlined'
			/>
		</>
	)
}
