// Central icon registry — maps string keys used in constants to react-icons
// components, keeping the data files free of import noise.
import {
	SiPython,
	SiTypescript,
	SiJavascript,
	SiCplusplus,
	SiPytorch,
	SiLangchain,
	SiHuggingface,
	SiRedis,
	SiKubernetes,
	SiDocker,
	SiFastapi,
	SiNextdotjs,
	SiFlask,
	SiPostgresql,
	SiGit,
	SiLinux,
	SiAmazon,
} from "react-icons/si";
import { FaJava, FaBrain, FaDatabase } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCircleNodes, FaXTwitter } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";

export const ICONS = {
	// languages
	python: SiPython,
	typescript: SiTypescript,
	javascript: SiJavascript,
	java: FaJava,
	sql: TbSql,
	cpp: SiCplusplus,
	// ai / ml
	pytorch: SiPytorch,
	langgraph: FaCircleNodes,
	langchain: SiLangchain,
	huggingface: SiHuggingface,
	ai: FaBrain,
	rag: FaDatabase,
	// data & infra
	postgres: SiPostgresql,
	neo4j: FaCircleNodes,
	redis: SiRedis,
	kubernetes: SiKubernetes,
	docker: SiDocker,
	aws: SiAmazon,
	// web & tools
	fastapi: SiFastapi,
	nextjs: SiNextdotjs,
	react: RiReactjsLine,
	flask: SiFlask,
	git: SiGit,
	linux: SiLinux,
	// socials
	linkedin: FaLinkedin,
	github: FaGithub,
	x: FaXTwitter,
};

export function ResolvedIcon({ name, className }) {
	const Cmp = ICONS[name];
	if (!Cmp) return null;
	return <Cmp className={className} aria-hidden="true" />;
}
