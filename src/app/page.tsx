import { Weather } from './components/Weather';

export default function Home() {
	return (
		<>
			<header className="bg-teal-500">
				<h1>Header</h1>
			</header>
			<section className="bg-pink-50">
				<Weather />
			</section>
			<footer className="bg-yellow-200">
				<h1>Footer</h1>
			</footer>
		</>
	);
}
