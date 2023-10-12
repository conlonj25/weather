'use client'

export const Weather = () => {
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>City Name: </label>
			<input type="text" />
			<input type="submit" value="Search" />
		</form>
	)
}
