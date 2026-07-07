import logo from "../assets/SM_Logo.png";
import { SOCIALS } from "../constants";
import { ResolvedIcon } from "./icons";

const NAV_LINKS = [
	{ label: "Skills", href: "#skills" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

const Navbar = () => {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
				<a href="#home" aria-label="Home" className="flex items-center">
					<img className="w-9" src={logo} alt="Swayam Mehta logo" />
				</a>

				<div className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-neutral-300 transition hover:text-accent"
						>
							{link.label}
						</a>
					))}
				</div>

				<div className="flex items-center gap-4 text-lg text-neutral-300">
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
			</nav>
		</header>
	);
};

export default Navbar;
