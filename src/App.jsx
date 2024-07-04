import { useState } from 'react'
import Timer from './components/Timers'

const App = () => {
	const [isRunning, setIsRunning] = useState(false)

	const startTimers = () => setIsRunning(true)
	const stopTimers = () => setIsRunning(false)

	return (
		<div className='min-h-screen min-w-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-12'>
			<div className='text-6xl mb-4'>Camera Timers</div>
			<div className='flex flex-col justify-center items-center gap-12 sm:flex-row'>
				<Timer duration={6} isRunning={isRunning} />
				<Timer duration={8} isRunning={isRunning} />
				<Timer duration={12} isRunning={isRunning} />
			</div>
			<div className='mt-4'>
				<button
					onClick={startTimers}
					className='px-4 py-2 mr-4 bg-blue-600 rounded'
				>
					Start
				</button>
				<button
					onClick={stopTimers}
					className='px-4 py-2 bg-red-600 rounded ml-2'
				>
					Stop
				</button>
			</div>
		</div>
	)
}

export default App
