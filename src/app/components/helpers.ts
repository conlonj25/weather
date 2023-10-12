import { GeocodingData } from '@/types';

export const getGeocodedData = async (): Promise<Array<GeocodingData>> => {
	const key = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appId=${key}`;
	const res = await fetch(url);
	const data = await res.json();

	return data ? data : [];
};
