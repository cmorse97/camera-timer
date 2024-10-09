import { useState, useEffect } from 'react'
import Timer from './components/Timers'

const App = () => {
	const [timerT6, setTimerT6] = useState(6)
	const [timerT8, setTimerT8] = useState(8)
	const [timerT12, setTimerT12] = useState(12)
	const [isRunning, setIsRunning] = useState(false)

	const startTimers = () => setIsRunning(true)
	const stopTimers = () => {
		setIsRunning(false)
		setTimerT6(6)
		setTimerT8(8)
		setTimerT12(12)
	}

	useEffect(() => {
		if (!isRunning) return

		const intervalT6 = setInterval(() => {
			setTimerT6(prev => (prev > 0 ? prev - 1 : 6))
		}, 1000)
		const intervalT8 = setInterval(() => {
			setTimerT8(prev => (prev > 0 ? prev - 1 : 8))
		}, 1000)
		const intervalT12 = setInterval(() => {
			setTimerT12(prev => (prev > 0 ? prev - 1 : 12))
		}, 1000)

		return () => {
			clearInterval(intervalT6)
			clearInterval(intervalT8)
			clearInterval(intervalT12)
		}
	}, [isRunning])

	return (
		<div className='flex flex-col items-center justify-center min-h-screen gap-12 text-white bg-gray-900 min-w-screen'>
			<div className='mb-4 text-4xl sm:text-6xl'>Camera Timers</div>
			<div className='flex flex-col items-center justify-center gap-12 sm:flex-row'>
				<Timer duration={timerT6} />
				<Timer duration={timerT8} />
				<Timer duration={timerT12} />
			</div>
			<div className='mt-4'>
				<button
					onClick={startTimers}
					className='h-16 px-4 py-2 mr-4 bg-blue-600 rounded w-36'
				>
					Start
				</button>
				<button
					onClick={stopTimers}
					className='h-16 px-4 py-2 ml-2 bg-red-600 rounded w-36'
				>
					Stop
				</button>
			</div>
		</div>
	)
}

export default App
