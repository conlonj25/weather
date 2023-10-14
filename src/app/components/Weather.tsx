'use client';

import { GeocodingData } from '@/types';
import { ChangeEvent, useState } from 'react';

export const Weather = () => {
	const [city, setCity] = useState('london');
	const [limit, setLimit] = useState('1');
	const [geocodingData, setGeocodingData] = useState<Array<GeocodingData>>([]);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const url = `/api/v1/geo?q=${city}&limit=${limit}`;
		const res = await fetch(url);
		const json = await res.json();

		if (json.data) {
			setGeocodingData(json.data);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>City Name: </label>
				<input
					type="text"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
			<p>{JSON.stringify(geocodingData)}</p>
		</>
	);
};
