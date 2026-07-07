import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../constants";
import { ResolvedIcon } from "./icons";
import Section from "./Section";

const Skills = () => {
	return (
		<Section id="skills" eyebrow="What I work with" title="Skills">
			<div className="grid gap-6 sm:grid-cols-2">
				{SKILL_GROUPS.map((group, gi) => (
					<motion.div
						key={group.label}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.5, delay: gi * 0.08 }}
						className="rounded-2xl border border-white/10 bg-ink-900/60 p-6"
					>
						<p className="eyebrow mb-4 text-neutral-400">{group.label}</p>
						<ul className="flex flex-wrap gap-2.5">
							{group.items.map((item) => (
								<li
									key={item.name}
									className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-neutral-100 transition hover:border-accent/40 hover:text-white"
								>
									<ResolvedIcon
										name={item.icon}
										className="text-base text-accent"
									/>
									{item.name}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</Section>
	);
};

export default Skills;
