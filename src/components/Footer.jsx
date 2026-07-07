import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail } from "react-icons/fi";
import { CONTACT, SOCIALS, HERO } from "../constants";
import { ResolvedIcon } from "./icons";

// Web3Forms key can come from an env var (preferred) or the constants fallback.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || CONTACT.web3formsKey;

const Footer = () => {
	const [status, setStatus] = useState("idle"); // idle | sending | success | error

	const onSubmit = async (event) => {
		event.preventDefault();
		setStatus("sending");

		const formData = new FormData(event.target);
		formData.append("access_key", ACCESS_KEY);
		formData.append("from_name", "Portfolio Contact Form");

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			const data = await res.json();
			if (data.success) {
				setStatus("success");
				event.target.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<footer
			id="contact"
			className="scroll-mt-24 border-t border-white/10 pt-14 pb-14 md:pt-20 md:pb-20"
		>
			<div className="grid gap-12 md:grid-cols-2">
				{/* Left: pitch */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="eyebrow text-accent">Get in touch</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
						Let's build something.
					</h2>
					<p className="mt-4 max-w-md leading-relaxed text-neutral-300">
						Open to full-time Software and AI/ML Engineering roles,
						collaborations, and interesting problems. Drop a note
						and I'll get back to you.
					</p>

					<a
						href={`mailto:${CONTACT.email}`}
						className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-accent"
					>
						<FiMail />
						{CONTACT.email}
					</a>

					<div className="mt-6 flex items-center gap-4 text-lg text-neutral-300">
						{SOCIALS.map((s) => (
							<a
								key={s.href}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={s.label}
								className="transition hover:text-accent"
							>
								<ResolvedIcon name={s.icon} />
							</a>
						))}
					</div>
				</motion.div>

				{/* Right: form */}
				<motion.form
					onSubmit={onSubmit}
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
					className="space-y-4"
				>
					{/* honeypot */}
					<input
						type="checkbox"
						name="botcheck"
						className="hidden"
						tabIndex={-1}
						autoComplete="off"
					/>

					<div className="grid gap-4 sm:grid-cols-2">
						<Field name="name" label="Name" type="text" required />
						<Field
							name="email"
							label="Email"
							type="email"
							required
						/>
					</div>
					<Field
						name="subject"
						label="Subject"
						type="text"
						required
					/>

					<div>
						<label
							htmlFor="message"
							className="mb-1.5 block font-mono text-xs text-neutral-400"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							required
							className="w-full rounded-lg border border-white/10 bg-ink-900/60 px-3.5 py-2.5 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-accent"
							placeholder="Tell me about the opportunity or idea…"
						/>
					</div>

					<button
						type="submit"
						disabled={status === "sending"}
						className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink-950 transition hover:shadow-glow disabled:opacity-60"
					>
						{status === "sending" ? "Sending…" : "Send message"}
						<FiSend />
					</button>

					{status === "success" && (
						<p className="text-sm text-accent">
							Thanks — your message is on its way. I'll be in
							touch.
						</p>
					)}
					{status === "error" && (
						<p className="text-sm text-red-400">
							Something went wrong. Please email me directly at{" "}
							{CONTACT.email}.
						</p>
					)}
				</motion.form>
			</div>

			<p className="mt-16 border-t border-white/10 pt-8 text-center font-mono text-xs text-neutral-500">
				© {new Date().getFullYear()} {HERO.name}. Built with React +
				Vite.
			</p>
		</footer>
	);
};

const Field = ({ name, label, type, required }) => (
	<div>
		<label
			htmlFor={name}
			className="mb-1.5 block font-mono text-xs text-neutral-400"
		>
			{label}
		</label>
		<input
			id={name}
			name={name}
			type={type}
			required={required}
			className="w-full rounded-lg border border-white/10 bg-ink-900/60 px-3.5 py-2.5 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-accent"
		/>
	</div>
);

export default Footer;
