'use client'
import countStore from '@/zustand/countStore'

export const SearchPage = () => {
	const { count, increaseCount } = countStore()

	console.log(count)
	return (
		<div
			onClick={() => {
				increaseCount()
			}}
		>
			SearchPage
		</div>
	)
}
