import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-ink-950 text-neutral-300 antialiased selection:bg-accent/30 selection:text-white">
			{/* ambient background glow */}
			<div className="pointer-events-none fixed inset-0 -z-10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgb(var(--accent)/0.12),transparent)]" />
			</div>

			<SpeedInsights />
			<Navbar />

			<main className="mx-auto max-w-5xl px-6">
				<Hero />
				<Skills />
				<Experience />
				<Projects />
				<Footer />
			</main>
			<Analytics />
		</div>
	);
};

export default App;
