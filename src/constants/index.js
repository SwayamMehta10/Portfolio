import einthovenPulseImage from "../assets/EinthovenPulse.png";
import knowledgeGraphGenerator from "../assets/Knowledge Graph Generator.jpg";
import societyHUBImage from "../assets/SocietyHUB.png";
import dashboardImage from "../assets/Social Media Dashboard.png";
import seoRankTrackerImage from "../assets/SEO Rank Tracker.png";

export const HERO_CONTENT =
	"Welcome to my digital playground! I’m a software developer who thrives on transforming complex problems into elegant solutions. Whether I’m weaving together stunning web applications, crafting seamless mobile experiences, or diving into the fascinating world of AI and machine learning, my mission is to create technology that delights and empowers. With a knack for problem-solving and an insatiable curiosity, I approach each project as a new adventure, blending creativity and logic to build innovative solutions. When I’m not knee-deep in code, you can catch me kicking around a football, shooting hoops, or battling it out in FIFA. I’ve also dabbled in Shotokan Karate (I’ve got some shiny medals to prove it!) and led a dance crew to victory at a national competition. Basically, I’m all about balancing brainpower with some serious fun.";

export const EXPERIENCE = [
	{
		year: "Jan 2024 - May 2024",
		role: "Research Intern",
		company: "Vellore Institute of Technology",
		description:
			"Enhanced stock price prediction accuracy by optimizing GAN-based models with additional market indices and technical indicators, lowering RMSE values by 40.21% compared to previous research. Developed a web application integrating real-time stock data, sentiment analysis, with Gemini-powered forecasting & chatbot, enabling users to make informed investment decisions with a user-friendly interface. Analyzed the impact of external events like COVID-19 on predictive models, demonstrating that traditional deep learning models (LSTM, GRU) outperformed GANs in highly volatile market conditions.",
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
		title: "Knowledge Graph Generator",
		image: knowledgeGraphGenerator,
		description:
			"A comprehensive stock market tool for beginners, providing insights on over 1500 NSE-listed companies. Designed visualizations for 10+ technical indicators and integrated a Gemini-powered chatbot for real-time stock price queries and graph analysis Utilized Prophet, LSTM, GRU, GAN and WGAN-GP to provide accurate price forecasts (RMSE < 2) and generated VADER sentiment scores from latest news, enhancing users’ decision-making capabilities.",
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
		title: "EinthovenPulse",
		image: einthovenPulseImage,
		description:
			"A context-aware mHealth app to monitor heart rate through video analysis (CameraX API), respiratory rate via accelerometer data, and symptom severity, facilitating real-time health tracking within 45 seconds. Optimized app functionality with coroutines for asynchronous processing, boosting UI responsiveness and reducing risk of ANRs by keeping main thread unblocked. Implemented back handling and dynamic runtime permission requests, enhancing user trust and engagement by requesting permissions contextually.",
		technologies: ["Kotlin", "Jetpack Compose", "RoomDB"],
	},
	{
		title: "SocietyHUB",
		image: societyHUBImage,
		description:
			" A management tool for societies to maintain resident lists, register complaints, post notices, and share images. Features distinct interfaces and access levels for users and admins, with implemented security measures to protect against Clickjacking, SQL Injection, and Cross-Site Scripting.",
		technologies: ["PHP", "MySQL"],
	},

	{
		title: "Social Media Dashboard",
		image: dashboardImage,
		description:
			"A responsive social media dashboard with a light/dark theme switcher that displays static data for follower counts, daily changes, and engagement metrics across platforms like Facebook, Twitter, Instagram, and YouTube, with a clean, intuitive user interface. Built as a frontend-only project, it delivers seamless theme transitions and a visually engaging layout.",
		technologies: ["HTML", "CSS", "SCSS", "JavaScript"],
	},
];

export const CONTACT = {
	address: "Tempe, AZ",
	email: "swayam10.mht@gmail.com",
	contact: "+1 (602)596-3147",
};
