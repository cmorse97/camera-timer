import { useState, useEffect } from 'react'
import Timer from './components/Timers'

const App = () => {
	const initialDurations = { t6: 6, t8: 8, t12: 12 }
	const [timers, setTimers] = useState(initialDurations)
	const [isRunning, setIsRunning] = useState(false)

	const startTimers = () => setIsRunning(true)
	const stopTimers = () => {
		setIsRunning(false)
		setTimers(initialDurations)
	}

	useEffect(() => {
		if (!isRunning) return

		const interval = setInterval(() => {
			setTimers(prevTimers => {
				const { t6, t8, t12 } = prevTimers
				if (t12 > 0) {
					return {
						t6: t6 > 0 ? t6 - 1 : 0,
						t8: t8 > 0 ? t8 - 1 : 0,
						t12: t12 - 1
					}
				} else {
					return initialDurations
				}
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [isRunning])

	return (
		<div className='min-h-screen min-w-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-12'>
			<div className='text-4xl mb-4 sm:text-6xl'>Camera Timers</div>
			<div className='flex flex-col justify-center items-center gap-12 sm:flex-row'>
				<Timer duration={timers.t6} />
				<Timer duration={timers.t8} />
				<Timer duration={timers.t12} />
			</div>
			<div className='mt-4'>
				<button
					onClick={startTimers}
					className='w-36 h-16 px-4 py-2 mr-4 bg-blue-600 rounded'
				>
					Start
				</button>
				<button
					onClick={stopTimers}
					className='w-36 h-16 px-4 py-2 bg-red-600 rounded ml-2'
				>
					Stop
				</button>
			</div>
		</div>
	)
}

export default App
