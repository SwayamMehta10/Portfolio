import {
	RiJavaFill,
	FaPython,
	RiJavascriptFill,
	SiNextdotjs,
	RiReactjsLine,
	SiKotlin,
	FaHtml5,
	FaCss3Alt,
	SiFlask,
	TbSql,
	SiCplusplus,
	FcLinux,
	FaGitAlt,
	SiPrometheus,
	SiGrafana,
	SiKubernetes,
	SiFalco,
} from "react-icons/ri";
import Icon from "./Icon";
import { motion } from "framer-motion";

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
				<Icon icon={FaHtml5} duration={5.5} color="text-red-600" />
				<Icon icon={FaCss3Alt} duration={1.5} color="text-blue-600" />
				<Icon
					icon={RiJavascriptFill}
					duration={3}
					color="text-yellow-400"
				/>
				<Icon icon={RiReactjsLine} duration={1} color="text-cyan-400" />
				<Icon icon={SiNextdotjs} duration={4} />
				<Icon icon={RiJavaFill} duration={2} color="text-red-600" />
				<Icon icon={SiKotlin} duration={3} color="text-purple-600" />
				<Icon icon={FaPython} duration={6} color="text-blue-400" />
				<Icon icon={SiFlask} duration={3.5} />
				<Icon icon={TbSql} duration={5.5} color="text-orange-600" />
				<Icon
					icon={SiCplusplus}
					duration={1.5}
					color="text-indigo-600"
				/>
				<Icon icon={FcLinux} duration={5} />
				<Icon icon={FaGitAlt} duration={2.5} color="text-red-600" />
				<Icon icon={SiKubernetes} duration={6} color="text-blue-600" />
				<Icon icon={SiPrometheus} duration={1.5} color="text-red-600" />
				<Icon icon={SiGrafana} duration={4} color="text-orange-600" />
				<Icon icon={SiFalco} duration={2.5} color="text-sky-400" />
			</motion.div>
		</div>
	);
};
export default Skills;
