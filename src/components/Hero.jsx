import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import { HERO } from "../constants";
import profilePic from "../assets/Profile_Pic.jpg";

const fadeUp = (delay = 0) => ({
	hidden: { opacity: 0, y: 18 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const Hero = () => {
	return (
		<section id="home" className="pt-28 md:pt-36">
			<div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
				{/* Left: identity */}
				<div>
					<motion.p
						variants={fadeUp(0)}
						initial="hidden"
						animate="visible"
						className="eyebrow text-accent"
					>
						{HERO.roles.join("  ·  ")}
					</motion.p>

					<motion.h1
						variants={fadeUp(0.08)}
						initial="hidden"
						animate="visible"
						className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl"
					>
						{HERO.name}
					</motion.h1>

					<motion.p
						variants={fadeUp(0.16)}
						initial="hidden"
						animate="visible"
						className="mt-5 max-w-xl text-lg text-neutral-300 md:text-xl"
					>
						{HERO.tagline}
					</motion.p>

					<motion.p
						variants={fadeUp(0.24)}
						initial="hidden"
						animate="visible"
						className="mt-6 max-w-xl leading-relaxed text-neutral-300"
					>
						{HERO.bio}
					</motion.p>

					<motion.div
						variants={fadeUp(0.32)}
						initial="hidden"
						animate="visible"
						className="mt-9 flex flex-wrap items-center gap-4"
					>
						<a
							href={HERO.resumeHref}
							download
							className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink-950 transition hover:shadow-glow"
						>
							Download résumé
							<FiArrowDownRight className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
						</a>
						<a
							href="#projects"
							className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:border-accent hover:text-accent"
						>
							View work
							<FiArrowRight className="transition group-hover:translate-x-0.5" />
						</a>
					</motion.div>

					<motion.p
						variants={fadeUp(0.4)}
						initial="hidden"
						animate="visible"
						className="mt-6 font-mono text-xs text-neutral-400"
					>
						{HERO.location}
					</motion.p>
				</div>

				{/* Right: portrait */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="mx-auto w-full max-w-xs md:max-w-sm"
				>
					<div className="relative">
						<div className="absolute -inset-4 -z-10 rounded-full bg-accent/10 blur-2xl" />
						<img
							src={profilePic}
							alt="Swayam Mehta"
							className="aspect-square w-full rounded-full border border-white/10 object-cover"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
