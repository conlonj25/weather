export async function GET() {
	const res = await fetch('https://official-joke-api.appspot.com/random_joke');
	const data = await res.json();

	return Response.json({ data });
}
