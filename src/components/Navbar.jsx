import logo from "../assets/SM_Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

// rafce shortcut from ES7 extension
const Navbar = () => {
	return (
		<nav className="flex items-center justify-between">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2 w-10" src={logo} alt="logo" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/swayammehta10/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
				<a href="https://github.com/SwayamMehta10" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
				<a href="https://www.instagram.com/swayam_mehta_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
				<a href="https://x.com/haveYouMetSam_" target="_blank" rel="noopener noreferrer" aria-label="X (Formerly Twitter)"><FaSquareXTwitter /></a>
			</div>
		</nav>
	);
};
export default Navbar;
