interface IdotIcon {
	className?: string
	onClick?: () => void
}

export const DotIcon = ({ className, onClick }: IdotIcon) => {
	return (
		<svg
			onClick={onClick}
			className={className}
			viewBox='0 0 16 16'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M8 3a5 5 0 100 10A5 5 0 008 3z' />
		</svg>
	)
}
