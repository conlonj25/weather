import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const lat = searchParams.get('lat');
	const lon = searchParams.get('lon');
	const units = searchParams.get('units');

	const key = process.env.OPENWEATHERMAP_API_KEY;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;
	const res = await fetch(url);
	const data = await res.json();

	return Response.json({ data });
}
