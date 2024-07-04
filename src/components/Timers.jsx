import { useState, useEffect } from 'react'

const Timer = ({ duration, isRunning }) => {
	const [timeLeft, setTimeLeft] = useState(duration)

	useEffect(() => {
		if (!isRunning) return

		const interval = setInterval(() => {
			setTimeLeft(prev => {
				if (prev === 1) return duration
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [isRunning])

	useEffect(() => {
		if (!isRunning) {
			setTimeLeft(duration)
		}
	}, [isRunning, duration])

	return (
		<div className='w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full'>
			<span className='text-2xl'>{timeLeft}</span>
		</div>
	)
}

export default Timer
