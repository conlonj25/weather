'use client';

import { useState } from 'react';

export const Joke = () => {
	const [joke, setJoke] = useState<object>({});

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const url = '/api/v1/geo';
		const res = await fetch(url);
		const data = await res.json();

		if (data) {
			setJoke(data);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="submit" value="Get Joke" />
			</form>
			<p>{JSON.stringify(joke)}</p>
		</>
	);
};
