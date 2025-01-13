import styles from './SkeletonBackground.module.scss'
interface iSkeletonBackground {
	height?: number
	width?: number
	opacity?: number
}

export const SkeletonBackground = ({
	height,
	width,
	opacity,
}: iSkeletonBackground) => {
	return (
		<div
			style={{
				height: `${height}px`,
				width: `${width}px`,
				opacity: `${opacity}%`,
			}}
			className={styles.skeleton}
		></div>
	)
}
