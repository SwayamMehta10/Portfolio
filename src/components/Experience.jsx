import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants";
import Section from "./Section";

const Experience = () => {
	return (
		<Section id="experience" eyebrow="Where I've worked" title="Experience">
			<div className="relative">
				{/* timeline spine */}
				<div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-white/10 md:block" />

				<div className="space-y-12">
					{EXPERIENCE.map((exp, i) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.5, delay: i * 0.05 }}
							className="relative md:pl-10"
						>
							{/* node */}
							<span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink-950 md:block" />

							<div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
								<h3 className="text-lg font-semibold text-white">
									{exp.role}
									<span className="text-accent"> · {exp.company}</span>
								</h3>
								<p className="font-mono text-xs text-neutral-400">
									{exp.year}
								</p>
							</div>

							<ul className="mt-4 space-y-2.5">
								{exp.points.map((point, pi) => (
									<li
										key={pi}
										className="flex gap-3 text-sm leading-relaxed text-neutral-300"
									>
										<span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
										{point}
									</li>
								))}
							</ul>

							<div className="mt-4 flex flex-wrap gap-2">
								{exp.technologies.map((tech) => (
									<span
										key={tech}
										className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-neutral-300"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Experience;
