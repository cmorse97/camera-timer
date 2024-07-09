const Timer = ({ duration }) => {
	return (
		<div
			className={`w-36 h-36 flex items-center justify-center bg-gray-800 rounded-full sm:w-48 sm:h-48 ${
				duration === 0 ? 'bg-red-600' : 'bg-gray-800'
			}`}
		>
			<span className='text-4xl sm:text-6xl'>{duration}</span>
		</div>
	)
}

export default Timer
