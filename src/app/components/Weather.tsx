'use client';

import { CityData, WeatherData } from '@/types';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export const Weather = () => {
	const [query, setQuery] = useState('');
	const [city, setCity] = useState<CityData>();
	const [weather, setWeather] = useState<WeatherData>();

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const c = await getCityData(query, 1);
		setCity(c);

		if (city) {
			const w = await getWeatherData(city.lat, city.lon, 'metric');
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

	const weatherIconUrl = weather
		? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
		: '';

	return (
		<div className="flex flex-col gap-4">
			<Card className="bg-gradient-to-r from-orange-400 via-oramge-500 to-orange-400 shadow-md">
				<CardContent className="flex justify-center items-center p-6">
					<div className="flex w-full max-w-sm items-center space-x-3">
						<Input
							type="text"
							placeholder="search city"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button
							className="bg-orange-400 hover:bg-orange-500 border-2"
							onClick={handleSubmit}
						>
							<Search />
						</Button>
					</div>
				</CardContent>
			</Card>
			{weather && (
				<Card className="bg-secondary">
					<div className="flex justify-around m-2">
						<div className="flex flex-col justify-center">
							<Image
								src={weatherIconUrl}
								alt={'weather icon'}
								width={100}
								height={100}
							/>
							<h1 className="text-center">{weather.weather[0].main}</h1>
						</div>
						<div className="flex flex-col justify-center">
							<h1 className="text-center text-5xl">
								{`${Math.round(weather.main.temp)}°C`}
							</h1>
						</div>
						<div className="flex flex-col justify-center gap-1 text-xs text-muted-foreground">
							<p>{`Min: ${Math.round(weather.main.temp_min)}°C`}</p>
							<p>{`Max: ${Math.round(weather.main.temp_max)}°C`}</p>
							<p>{`Humidity: ${weather.main.humidity}%`}</p>
							<p>{`Wind: ${weather.wind.speed} km/h`}</p>
						</div>
					</div>
				</Card>
			)}
		</div>
	);
};
