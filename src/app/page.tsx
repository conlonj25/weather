import { Weather } from './components/Weather';
import { Lorem } from './components/Lorem';
import { Joke } from './components/Joke';

export default function Home() {
	return (
		<>
			<header className="bg-teal-500">
				<h1>Header</h1>
			</header>
			<section className="bg-pink-50">
				<Joke />
			</section>
			<footer className="bg-yellow-200">
				<h1>Footer</h1>
			</footer>
		</>
	);
}
