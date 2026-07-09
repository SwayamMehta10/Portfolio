export const HERO = {
	name: "Swayam Mehta",
	roles: ["Software Engineer", "AI/ML Engineer"],
	tagline: "I build software systems, and the AI that runs inside them.",
	bio: 'I work across the stack — resilient backends, real-time pipelines, and applied ML — most recently as an ML Engineer at JobTalk AI, with earlier work at Hewlett Packard Enterprise. I like the part where a system goes from "working in theory" to actually holding up under real traffic and real edge cases, that\'s usually where I end up spending my nights. Currently on OPT and open to full-time Software and AI/ML Engineering roles.',
	resumeHref: "/Swayam Mehta_SWE_Resume.pdf",
	altResumeHref: "/Swayam Mehta_MLE_Resume.pdf",
	location: "United States · Open to relocation",
};

export const EXPERIENCE = [
	{
		year: "Mar 2026 — May 2026",
		role: "Machine Learning Engineering Intern",
		company: "JobTalk AI",
		points: [
			"Built an async multi-format resume ingestion service (FastAPI, Celery, MinIO/S3) with a 3-tier parallel extraction pipeline, AES-128 PII-at-rest encryption, and row-level tenant isolation for a multi-client SaaS deployment.",
			"Diagnosed and fixed a Celery/asyncpg connection-pool exhaustion bug failing resumes under load, lifting end-to-end success to 99%+; shipped Prometheus + Grafana monitoring across 19 panels tracking throughput and p50/p95/p99 latency.",
			"Cut LLM inference cost by 73% and eliminated extraction timeouts by consolidating 5 prompts into a single schema call and self-hosting a quantized Qwen3-8B via vLLM, keeping candidate PII off third-party APIs.",
		],
		technologies: [
			"FastAPI",
			"Celery",
			"asyncpg",
			"vLLM",
			"spaCy",
			"Prometheus",
		],
	},
	{
		year: "Jan 2024 — May 2024",
		role: "Research Assistant",
		company: "Vellore Institute of Technology",
		points: [
			"Improved a stock-price forecasting pipeline (Bi-LSTM, GRU, GAN) by incorporating market indices and technical indicators, reducing RMSE by 40% over prior research baselines.",
			"Delivered forecasts and VADER sentiment scores through a Flask REST API with a Gemini Vision chart-analysis chatbot.",
		],
		technologies: ["PyTorch", "GANs", "Flask", "Python", "Gemini"],
	},
	{
		year: "Jan 2023 — Jun 2023",
		role: "CTY Intern — High Performance Computing",
		company: "Hewlett Packard Enterprise",
		points: [
			"Engineered Kubernetes runtime security using Falco with eBPF probes to detect container escapes, privilege escalation, and filesystem tampering; streamed alerts via Falco Exporter over gRPC into Prometheus/Grafana with Slack/Discord notifications.",
			"Increased security coverage ~30% and cut incident detection latency ~40% in attack simulations by replacing manual log review with automated rule-based behavioral alerts.",
		],
		technologies: [
			"Kubernetes",
			"Falco",
			"eBPF",
			"gRPC",
			"Grafana",
			"Prometheus",
		],
	},
];

// Projects — ordered strongest/most-recent first. No images by design;
// the `metric` field is the visual hook per card.
export const PROJECTS = [
	{
		title: "ClickLess AI",
		period: "Spring 2026",
		metric: "NDCG@5 0.58 → 0.77",
		summary:
			"A grocery-shopping agent that turns a natural-language request into a ranked, dietary-aware cart. A Mistral 7B extraction pipeline over Open Food Facts builds a Neo4j knowledge graph (8,146 products, 43,216 edges); a weighted ensemble ranker combines Apriori co-purchase rules with KG constraint scoring.",
		technologies: [
			"Python",
			"LangGraph",
			"Mistral 7B",
			"Neo4j",
			"GraphRAG",
			"Ollama",
		],
		github: "",
	},
	{
		title: "Donna",
		period: "Sunhacks '25",
		metric: "Real-time voice · built in 24h",
		summary:
			"A multilingual AI voice agent that handles live phone calls — accessing Gmail, Calendar, Slack, and Zoom to manage schedules and place calls on the user's behalf. Full real-time pipeline: SIP telephony over Twilio, WebRTC audio via LiveKit, and a LangGraph agent holding low-latency conversations.",
		technologies: ["FastAPI", "LangGraph", "Twilio", "LiveKit", "Groq"],
		github: "",
	},
	{
		title: "Industrial Ops Monitor",
		period: "Spring 2026",
		metric: "Predicted failure 35 days early",
		summary:
			"A full-stack equipment-intelligence platform over 3M real sensor readings across 96 assets. A 3-pass anomaly engine (median deviation, threshold breach, linear-regression trend projection) drives SSE-streamed Gemini briefings and an automated work-order lifecycle — validated on a real bearing failure 35 days before it occurred.",
		technologies: [
			"Python",
			"FastAPI",
			"React",
			"TypeScript",
			"Gemini",
			"SSE",
		],
		github: "",
	},
	{
		title: "Quizzi",
		period: "Summer 2025",
		metric: "76% less DB egress · 10–100× queries",
		summary:
			"A full-stack multiplayer trivia platform. Reworked an indexed PostgreSQL schema with row-level security to cut policy evaluation from O(N) to O(1), and decomposed heavy LATERAL JOINs into primary-key queries with TTL caching and debounced batching to collapse N+1 fetches.",
		technologies: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Supabase",
			"Redis",
			"D3.js",
		],
		github: "",
	},
	{
		title: "CXR Disease Localization",
		period: "Fall 2025",
		metric: "+3–8 AP over benchmarks",
		summary:
			"Adapted a transformer-based object detector (DINO, ResNet-50 backbone) to localize tuberculosis lesions in chest X-rays on the TBX11K dataset. Loss reweighting, multi-scale training, and hyperparameter tuning on A100 GPUs yielded 3–8 point AP gains across active, latent, and agnostic TB categories.",
		technologies: ["Python", "PyTorch", "DINO", "CUDA"],
		github: "",
	},
	{
		title: "LLM-Assisted FMEA in SMT",
		period: "Spring 2025",
		metric: "0.78–0.93 similarity · 80% less effort",
		summary:
			"A RAG pipeline over semiconductor (SMT) manufacturing data that auto-generates FMEA quality-control tables. Hybrid retrieval (BM25 + bge-small-en embeddings) grounds outputs in IPC/JEDEC standards, lifting BLEU/ROUGE 15–20% over baseline LLMs with full context attribution.",
		technologies: [
			"Python",
			"LangChain",
			"HuggingFace",
			"ChromaDB",
			"BM25",
		],
		github: "",
	},
];

// "Also built" — lighter, shippable side projects shown in a compact strip
// below the featured grid. Each has real live/published links. `accolade` (optional)
// renders as a highlighted badge; `links` may hold live / github / store.
export const SIDE_PROJECTS = [
	{
		name: "cmd Play",
		accolade: "1st place · Innovation Hacks '25 (ASU)",
		blurb: "A gamified platform teaching middle-schoolers programming, cybersecurity, and SQL — built in 24 hours.",
		tags: ["React", "Vite", "TypeScript"],
		links: { live: "https://cmd-play-fo13.vercel.app/" },
	},
	{
		name: "Palmap",
		blurb: "An interactive memory map — pin photos and stories on a world map, with real-time collaborative editing and shareable public views.",
		tags: ["React", "Firebase", "MapLibre"],
		links: { live: "https://palmap.netlify.app" },
	},
	{
		name: "AuthRecall",
		blurb: "A Chrome extension that remembers which Google account you used to sign in on each site. Published on the Chrome Web Store.",
		tags: ["Chrome Extension", "JavaScript"],
		links: {
			github: "https://github.com/SwayamMehta10/AuthRecall",
			store: "https://chromewebstore.google.com/detail/gelhlmfcildaoallccooccadnmahfbnd?utm_source=item-share-cb",
		},
	},
	{
		name: "MockAdBlock",
		blurb: "A playful Chrome extension that replaces ads with jokes and GIFs across five snark modes.",
		tags: ["Chrome Extension", "JavaScript"],
		links: { github: "https://github.com/SwayamMehta10/MockAdBlock" },
	},
];

// Skills grouped by category to reflect the real stack (not frontend-heavy).
// `icon` is a react-icons key resolved in Skills.jsx.
export const SKILL_GROUPS = [
	{
		label: "Languages",
		items: [
			{ name: "Python", icon: "python" },
			{ name: "TypeScript", icon: "typescript" },
			{ name: "JavaScript", icon: "javascript" },
			{ name: "Java", icon: "java" },
			{ name: "SQL", icon: "sql" },
			{ name: "C++", icon: "cpp" },
		],
	},
	{
		label: "AI / ML",
		items: [
			{ name: "PyTorch", icon: "pytorch" },
			{ name: "LangGraph", icon: "langgraph" },
			{ name: "LangChain", icon: "langchain" },
			{ name: "Transformers", icon: "huggingface" },
			{ name: "vLLM", icon: "ai" },
			{ name: "RAG", icon: "rag" },
		],
	},
	{
		label: "Data & Infra",
		items: [
			{ name: "PostgreSQL", icon: "postgres" },
			{ name: "Neo4j", icon: "neo4j" },
			{ name: "Redis", icon: "redis" },
			{ name: "Kubernetes", icon: "kubernetes" },
			{ name: "Docker", icon: "docker" },
			{ name: "AWS", icon: "aws" },
		],
	},
	{
		label: "Web & Tools",
		items: [
			{ name: "FastAPI", icon: "fastapi" },
			{ name: "Next.js", icon: "nextjs" },
			{ name: "React", icon: "react" },
			{ name: "Flask", icon: "flask" },
			{ name: "Git", icon: "git" },
			{ name: "Linux", icon: "linux" },
		],
	},
];

export const SOCIALS = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/swayammehta10/",
		icon: "linkedin",
	},
	{
		label: "GitHub",
		href: "https://github.com/SwayamMehta10",
		icon: "github",
	},
	{ 	
		label: "X (Twitter)", 
		href: "https://x.com/haveYouMetSam_", 
		icon: "x"
	},
];

export const CONTACT = {
	email: "swayam10.mht@gmail.com",
	web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
};
