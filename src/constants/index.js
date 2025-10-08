import einthovenPulseImage from "../assets/EinthovenPulse.png";
import knowledgeGraphGenerator from "../assets/Knowledge Graph Generator.jpg";
import seoRankTrackerImage from "../assets/SEO Rank Tracker.png";
import cmdPlay from "../assets/cmd Play.png";
import ticTacToe from "../assets/TicTacToe.png";
import llm from "../assets/llm-assisted-fmea.png";
import quizzi from "../assets/quizzi.png";

export const HERO_CONTENT =
	"Welcome to my digital playground! I’m a software developer who thrives on transforming complex problems into elegant solutions. Whether I’m weaving together stunning web applications, crafting seamless mobile experiences, or diving into the fascinating world of AI and machine learning, my mission is to create technology that delights and empowers. With a knack for problem-solving and an insatiable curiosity, I approach each project as a new adventure, blending creativity and logic to build innovative solutions. When I’m not knee-deep in code, you can catch me kicking around a football, shooting hoops, or battling it out in FIFA. I’ve also dabbled in Shotokan Karate (I’ve got some shiny medals to prove it!) and led a dance crew to victory at a national competition. Basically, I’m all about balancing brainpower with some serious fun.";

export const EXPERIENCE = [
	{
		year: "Jan 2024 - May 2024",
		role: "Research Intern",
		company: "Vellore Institute of Technology",
		description:
			"Enhanced stock price prediction accuracy by optimizing GAN-based models with additional market indices and technical indicators, lowering RMSE values by 40% compared to previous research. Developed a web application integrating real-time stock data, sentiment analysis, with Gemini-powered forecasting & chatbot, enabling users to make informed investment decisions with a user-friendly interface. Analyzed the impact of external events like COVID-19 on predictive models, demonstrating that traditional deep learning models (LSTM, GRU) outperformed GANs in highly volatile market conditions.",
		technologies: ["Flask", "JavaScript", "Python", "GoogleGenerativeAI"],
	},
	{
		year: "Jan 2023 - June 2023",
		role: "CTY Intern",
		company: "Hewlett Packard Enterprise",
		description:
			"Integrated 5 modular Kubernetes security tools to perform static code analysis, identify compliance issues, detect threats and vulnerabilities and ensure runtime security for Kubernetes clusters. Deployed Falco pods to capture event metrics, combining Falco Exporter with Prometheus, ensuring robust threat detection by simulating and mitigating 6 malicious system call scenarios. Configured a Falco dashboard in Grafana, featuring custom visualizations for most frequently violated rules, high-priority alerts, metadata and occurrence rates of 150+ events, thus improving real-time incident response.",
		technologies: ["Kubernetes", "Falco", "Grafana", "Prometheus", "Linux"],
	},
];

export const PROJECTS = [
	{
		title: "Donna",
		image: null,
		description: "Built a multilingual AI voice agent capable of accessing Gmail, Calendar, Slack and Zoom to autonomously manage schedules, deliver reminders via phone calls, and place calls on users’ behalf using real-time speech synthesis and Twilio APIs; developed in 24 hours at Sunhacks’25.",
		technologies: ["FastAPI", "LangGraph", "Twilio", "Livekit", "Groq"],
	},
	{
		title: "Quizzi",
		image: quizzi,
		description: "Developed a full-stack multiplayer trivia platform with social features, optimized for performance, security, and scalability. Reduced database egress by 70% and eliminated 228s of query latency by implementing Redis-style caching, request batching, and client-side data assembly. Hardened API infrastructure with server-side validation, rate limiting, and middleware-based request handling. Reduced session-based authentication calls from 6,187 to 50 via caching and access control mechanisms.",
		technologies: ["NextJS", "TypeScript", "Supabase", "D3.js", "TailwindCSS"],
	},
	{
		title: "LLM-Assisted FMEA in SMT",
		image: llm,
		description: "Built a Retrieval-Augmented Generation (RAG) pipeline using Gemini 2.0 Flash and real semiconductor manufacturing (Surface Mount Technology, SMT) data to auto-generate Failure Mode and Effects Analysis (FMEA) tables, achieving 0.78–0.93 semantic similarity and 90%+ field coverage, exceeding GPT-4 academic benchmarks, and reducing manual effort by 80%+. Integrated dense retrieval (bge-small-en embeddings) with BM25 hybrid search to ground LLM outputs in IPC/JEDEC standards, boosting BLEU/ROUGE scores by 15–20% vs baseline LLMs and enabling production-ready FMEA generation with context attribution and minimal expert edits.",
		technologies: ["Python", "Langchain", "HuggingFace", "ChromaDB"],
	},
	// {
	// 	title: "RepoMatcher",
	// 	image: null,
	// 	description: "Architected a knowledge graph-enhanced recommendation system for GitHub repositories, integrating TransE/ RotatE embeddings with neural collaborative filtering to deliver explainable, diverse suggestions; achieved HR@10 of 34%, NDCG@10 of 21%, and MRR of 26%, on par with leading KG recommender benchmarks. Designed and implemented a scalable end-to-end pipeline in PyTorch and PyKEEN, processing 41+ GitHub metadata features (GHTorrent) into relational triples and training a KG-augmented model that outperformed traditional collaborative filtering baselines by over 20% in top-10 ranking accuracy.",
	// 	technologies: ["Python", "Google BigQuery"],
	// },
	{
		title: "cmd Play",
		image: cmdPlay,
		description: "Engineered and deployed a gamified educational platform within 24 hours to enhance middle-schoolers' understanding of basic programming, cybersecurity and SQL; awarded 1st place at Innovation Hacks'25. Scaled game logic and difficulty dynamically using custom state machines and AI-driven content generation (via Gemini); optimized cross-browser UX with <1s load time and implemented port-based parallel game hosting.",
		technologies: ["ReactJS", "Vite", "TypeScript", "Shell"],
	},
	{
		title: "Knowledge Graph Generator",
		image: knowledgeGraphGenerator,
		description:
			"Developed a tool that extracts and visualizes relationships from articles, newspapers, and research papers using Google Generative AI and NetworkX, enhancing text comprehension through interactive graphs. Built a web application and browser extension, enabling users to generate and download knowledge graphs directly from webpages for seamless real-time analysis.",
		technologies: ["Streamlit", "Flask", "JavaScript"],
	},
	{
		title: "SEO Rank Tracker",
		image: seoRankTrackerImage,
		description:
			"A web app that enabled users to monitor Google search rankings for domains and keywords using SerpAPI, with interactive graphs displaying rank trends over time, enhancing SEO performance tracking. Implemented Google Auth for secure access and automated rank updates with a weekly cron job ensuring consistent and up-to-date insights with minimal manual effort.",
		technologies: ["NextJS", "MongoDB", "TailwindCSS"],
	},
	{
		title: "Tic Tac Toe",
		image: ticTacToe,
		description: "Implemented a Tic-Tac-Toe AI using the Minimax algorithm with alpha-beta pruning, achieving efficient decision-making and enhanced user engagement with adaptable difficulty levels (Easy, Medium, Hard). Developed a real-time multiplayer mode utilizing Bluetooth connectivity with JSON-based state synchronization, ensuring low-latency gameplay and robust connection management for a competitive experience.",
		technologies: ["Kotlin", "Python", "Jetpack Compose", "RealmDB"],
	},
	{
		title: "EinthovenPulse",
		image: einthovenPulseImage,
		description:
			"Developed a context-aware app to monitor heart rate through video analysis (CameraX), respiratory rate via accelerometer data, and symptom severity, facilitating real-time health tracking within 45 seconds. Optimized app functionality with coroutines for asynchronous processing, boosting UI responsiveness and reducing risk of ANRs by keeping main thread unblocked. Implemented back handling and dynamic runtime permission requests, enhancing user trust and engagement by requesting permissions contextually.",
		technologies: ["Kotlin", "Jetpack Compose", "RoomDB"],
	},
];

export const CONTACT = {
	address: "Tempe, AZ",
	email: "swayam10.mht@gmail.com",
	contact: "+1 (602)596-3147",
};
