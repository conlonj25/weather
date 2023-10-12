'use client';

import { GeocodingData } from '@/types';
import { useState } from 'react';
import { getGeocodedData } from './helpers';

export const Weather = () => {
	const [geocodingData, setGeocodingData] = useState<Array<GeocodingData>>([]);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const d = await getGeocodedData();

		console.log(d);

		setGeocodingData(d);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>City Name: </label>
				<input type="text" />
				<input type="submit" value="Search" />
			</form>
			{geocodingData.map((el, i) => {
				return (
					<ul key={i}>
						<li>{el.name}</li>
						<li>{el.lat}</li>
						<li>{el.lon}</li>
						<li>{el.country}</li>
					</ul>
				);
			})}
		</>
	);
};
