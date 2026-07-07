import { motion } from "framer-motion";

// Shared section wrapper: mono eyebrow + heading, consistent vertical rhythm,
// and a scroll-in fade. Keeps every section visually aligned.
const Section = ({ id, eyebrow, title, children }) => {
	return (
		<section id={id} className="scroll-mt-24 border-t border-white/10 py-14 md:py-20">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5 }}
				className="mb-8"
			>
				<p className="eyebrow text-accent">{eyebrow}</p>
				<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
					{title}
				</h2>
			</motion.div>
			{children}
		</section>
	);
};

export default Section;
