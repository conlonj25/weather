import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const q = searchParams.get('q');
	const limit = searchParams.get('limit');

	const key = process.env.OPENWEATHERMAP_API_KEY;

	const url = `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${limit}&appId=${key}`;
	const res = await fetch(url);
	const data = await res.json();

	return Response.json({ data });
}
