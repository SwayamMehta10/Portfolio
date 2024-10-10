import { RiJavaFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";
import { SiPrometheus } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiFalco } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Skills = () => {
	return (
		<div className="border-b border-neutral-800 pb-12">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-center text-4xl"
			>
				Skills
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="flex flex-wrap items-center justify-center gap-6 mx-10"
			>
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<RiJavaFill className="text-6xl text-red-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<FaPython className="text-6xl text-blue-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(3.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiFlask className="text-6xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(1)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<RiReactjsLine className="text-6xl text-cyan-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiKotlin className="text-6xl text-purple-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(5.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<FaHtml5 className="text-6xl text-red-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(1.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<FaCss3Alt className="text-6xl text-blue-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<RiJavascriptFill className="text-6xl text-yellow-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(5.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<TbSql className="text-6xl text-orange-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(1.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiCplusplus className="text-6xl text-indigo-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<FcLinux className="text-6xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<FaGitAlt className="text-6xl text-red-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiKubernetes className="text-6xl text-blue-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(1.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiPrometheus className="text-6xl text-red-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiGrafana className="text-6xl text-orange-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-6"
				>
					<SiFalco className="text-6xl text-sky-400" />
				</motion.div>
			</motion.div>
		</div>
	);
};
export default Skills;
