'use client';

import { CityData, WeatherData } from '@/types';
import { ChangeEvent, useState } from 'react';

export const Weather = () => {
	const [query, setQuery] = useState('london');
	const [city, setCity] = useState<CityData>();
	const [weather, setWeather] = useState<WeatherData>();

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const c = await getCityData(query, 1);
		setCity(c);

		if (city) {
			const w = await getWeatherData(city.lat, city.lon);
			setWeather(w);
		}
	};

	const getCityData = async (
		city: string,
		limit: number
	): Promise<CityData | undefined> => {
		const url = `/api/v1/geo?q=${city}&limit=${limit}`;
		const res = await fetch(url);
		const json = await res.json();

		return json.data[0];
	};

	const getWeatherData = async (
		lat: number,
		lon: number,
		units?: string
	): Promise<WeatherData> => {
		const url = `/api/v1/weather?lat=${lat}&lon=${lon}&units=${units}`;
		const res = await fetch(url);
		const json = await res.json();

		return json.data;
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>City Name: </label>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
			<p>{JSON.stringify(weather)}</p>
		</>
	);
};
