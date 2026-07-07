import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiGooglechrome } from "react-icons/si";
import { PROJECTS, SIDE_PROJECTS } from "../constants";
import Section from "./Section";

const ProjectCard = ({ project, index }) => {
	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
			className="group flex flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-6 transition hover:border-accent/30 hover:bg-ink-900"
		>
			<div className="flex items-start justify-between gap-4">
				<div>
					<h3 className="text-lg font-semibold text-white">
						{project.title}
					</h3>
					<p className="mt-1 font-mono text-xs text-neutral-400">
						{project.period}
					</p>
				</div>
				<div className="flex items-center gap-3 text-neutral-400">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.title} on GitHub`}
							className="transition hover:text-accent"
						>
							<FiGithub />
						</a>
					)}
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.title} live`}
							className="transition hover:text-accent"
						>
							<FiExternalLink />
						</a>
					)}
				</div>
			</div>

			{/* metric — the visual hook */}
			<p className="mt-4 inline-flex w-fit rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent">
				{project.metric}
			</p>

			<p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-300">
				{project.summary}
			</p>

			<div className="mt-5 flex flex-wrap gap-2">
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-neutral-300"
					>
						{tech}
					</span>
				))}
			</div>
		</motion.article>
	);
};

const SideProjectRow = ({ project, index }) => {
	const { name, accolade, blurb, tags, links = {} } = project;
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.45, delay: index * 0.05 }}
			className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent/30 sm:flex-row sm:items-start sm:justify-between"
		>
			<div className="min-w-0">
				<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
					<h4 className="font-semibold text-white">{name}</h4>
					{accolade && (
						<span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
							🏆 {accolade}
						</span>
					)}
				</div>
				<p className="mt-2 text-sm leading-relaxed text-neutral-300">
					{blurb}
				</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-neutral-300"
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			<div className="flex items-center gap-3 text-neutral-400 sm:pt-1">
				{links.live && (
					<a
						href={links.live}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${name} live`}
						className="transition hover:text-accent"
					>
						<FiExternalLink />
					</a>
				)}
				{links.store && (
					<a
						href={links.store}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${name} on the Chrome Web Store`}
						className="transition hover:text-accent"
					>
						<SiGooglechrome />
					</a>
				)}
				{links.github && (
					<a
						href={links.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${name} on GitHub`}
						className="transition hover:text-accent"
					>
						<FiGithub />
					</a>
				)}
			</div>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<Section id="projects" eyebrow="Selected work" title="Projects">
			<div className="grid gap-5 md:grid-cols-2">
				{PROJECTS.map((project, index) => (
					<ProjectCard key={project.title} project={project} index={index} />
				))}
			</div>

			{SIDE_PROJECTS.length > 0 && (
				<div className="mt-14">
					<p className="eyebrow mb-6 text-neutral-400">Also built</p>
					<div className="grid gap-4">
						{SIDE_PROJECTS.map((project, index) => (
							<SideProjectRow
								key={project.name}
								project={project}
								index={index}
							/>
						))}
					</div>
				</div>
			)}
		</Section>
	);
};

export default Projects;
