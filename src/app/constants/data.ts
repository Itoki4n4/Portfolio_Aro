// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================
// Almost everything on the site is driven from the constants below.
// Replace the placeholder values with your own details.

const DOMAIN = "aro_randria.dev";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Aro Itokiana RANDRIANARISOA",
  title: {
    en: "Full Stack Developer",
    fr: "Développeur Full Stack",
  },
  location: {
    en: "Antananarivo, Madagascar",
    fr: "Antananarivo, Madagascar",
  },
  email: "arorandria1@gmail.com",
  phone: "+261 34 09 00 852",
  description: {
    en: [
      "Highly skilled and dedicated Full-stack Developer with extensive experience in building robust, scalable, and high-performance digital solutions.",
      "Proficient in a wide range of frontend and backend technologies, including React, Next.js, Laravel, and Spring Boot.",
      "Passionate about clean code, efficient logic, and delivering exceptional user experiences.",
    ],
    fr: [
      "Développeur Full-stack passionné et hautement qualifié, possédant une solide expérience dans la création de solutions numériques robustes, évolutives et performantes.",
      "Maîtrisant un large éventail de technologies frontend et backend, notamment React, Next.js, Laravel et Spring Boot.",
      "Passionné par le code propre, la logique efficace et la livraison d'expériences utilisateur d'exception.",
    ],
  },
  profileImage: "/pro.jpg",
  profileGif: "/profil.jpg",
};

export const USER_NAMES = {
  githubUsername: "Itoki4n4",
  linkedinUsername: "aro-itokiana-randrianarisoa-9487b1408",
  twitterUsername: "your-twitter",
  peerlistUsername: "your-peerlist",
  instagramUsername: "your-instagram",
  // cal.com username + event slug used by the "schedule a meeting" button
  calUsername: "your-cal-username",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  phone: "tel:+261340900852",
  resume: "/CV_Itokiana.pdf",
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

// Contact form submission endpoint (used by the "send a message" form).
// Create a free form at https://formspree.io/forms and paste your URL here.
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

export const SKILLS_CATEGORIES = [
  {
    category: {
      en: "Languages",
      fr: "Langages",
    },
    skills: ["c", "php", "java", "py", "js", "ts", "html", "css"],
  },
  {
    category: {
      en: "Frontend",
      fr: "Frontend",
    },
    skills: ["react", "nextjs", "vue", "nuxtjs", "tailwind", "angular", "jquery", "bootstrap"],
  },
  {
    category: {
      en: "Backend",
      fr: "Backend",
    },
    skills: ["nodejs", "express", "graphql", "laravel", "spring", "fastapi"],
  },
  {
    category: {
      en: "Databases",
      fr: "Bases de données",
    },
    skills: ["mongodb", "mysql", "postgresql", "firebase", "supabase"],
  },
  {
    category: {
      en: "Tools & DevOps",
      fr: "Outils & DevOps",
    },
    skills: ["git", "github", "vscode", "postman", "npm", "figma", "docker"],
  },
  {
    category: {
      en: "Cloud & Deployment",
      fr: "Cloud & Déploiement",
    },
    skills: ["vercel", "githubactions"],
  },
];

// Flat skills array for quick references
export const SKILLS = SKILLS_CATEGORIES.flatMap((c) => c.skills);

export const EXPERIENCE = [
  {
    company: "Evadia (client)",
    logo: "/PlayStore.png",
    role: {
      en: "Freelance Full Stack Developer",
      fr: "Développeur Full Stack Freelance",
    },
    period: "feb 2026- Present",
    location: {
      en: "Remote",
      fr: "À distance",
    },
    description: {
      en: "Requirements analysis and technical architecture design for the platform's data model. Development of the Laravel back-office for managing bookings, offers, and accommodation content, along with the cross-platform mobile application using React Native and REST API integration.",
      fr: "Analyse des besoins, conception de l'architecture technique et du modèle de données de la plateforme. Développement du back-office Laravel pour la gestion des réservations, des offres et des contenus d'hébergement, ainsi que de l'application mobile multiplateforme avec React Native et intégration des API REST.",
    },
    skills: ["Next.js", "React", "Laravel", "Redis", "PostgreSQL", "React Native", "TypeScript"],
  },
  {
    company: "ARMP Madagascar",
    companyLink: "http://www.armp.mg/",
    logo: "/logo_armp.png",
    role: {
      en: "Intern in HR Software Development",
      fr: "Stagiaire en Développement de Logiciel RH",
    },
    period: "Sept 2025 - Jan 2026",
    location: {
      en: "Anosy, Antananarivo, Madagascar",
      fr: "Anosy, Antananarivo, Madagascar",
    },
    description: {
      en: "Developed an internal HR application for managing employee profiles, Leave, Absences, Sanctions, Training, and Disciplinary files. Standalone management previously dependent on the central ministry's ROHY system.",
      fr: "Développement d'une application RH interne pour la gestion des profils employés, Congés, Absences, Sanctions, Formations et dossiers Disciplinaires. Autonomisation de la gestion auparavant dépendante du système ROHY du ministère central.",
    },
    skills: ["PHP", "CodeIgniter", "PostgreSQL", "JavaScript", "HTML/CSS", "Bootstrap"],
  },
];

export const EDUCATION = [
  {
    degree: {
      en: "Bachelor's degree in Computer Science",
      fr: "Licence en Informatique",
    },
    institution: "IT University (ITU).",
    institutionLink: "https://www.ituniversity-mg.com/page/",
    period: "2022 - 2025",
    score: {
      en: "WEB & Design",
      fr: "WEB & Design",
    },
  },
];

export const TESTIMONIALS = [
  {
    name: "Sedera RABARIVELO",
    role: {
      en: "CIO (DSI) @ ARMP Madagascar",
      fr: "DSI @ ARMP Madagascar",
    },
    content: {
      en: "Aro's work has been an immense help for our institution. His application modernised and streamlined the administrative management of our employees, who were previously entirely dependent on the central ministry's ROHY system.",
      fr: "Le travail d'Aro a été d'une grande aide pour notre institution. Son application a modernisé la gestion administrative de nos employés, qui dépendaient autrefois du système ROHY pour le ministère global.",
    },
  },
  {
    name: "Dyno Perry",
    role: {
      en: "Senior Software Developer @ ARMP Madagascar",
      fr: "Développeur Senior @ ARMP Madagascar",
    },
    content: {
      en: "Working alongside Aro is a real pleasure. He demonstrates excellent development methodology, strong logic, clean code habits, and a great capacity to build reliable software solutions.",
      fr: "Travailler aux côtés d'Aro est un réel plaisir. Il fait preuve d'une excellente rigueur de travail, d'une logique de développement propre et d'une grande capacité à concevoir des architectures applicatives solides.",
    },
  },
];

export const UI_TEXT = {
  nav: {
    skills: { en: "skills", fr: "compétences" },
    projects: { en: "projects", fr: "projets" },
    contact: { en: "contact", fr: "contact" },
  },
  sections: {
    experience: { en: "work experience.", fr: "expérience professionnelle." },
    education: { en: "education.", fr: "formation." },
    projects: { en: "featured projects.", fr: "projets à la une." },
    skills: { en: "technical skills.", fr: "compétences techniques." },
    testimonials: { en: "testimonials.", fr: "témoignages." },
    connect: { en: "let's connect.", fr: "discutons ensemble." },
    sendMessage: { en: "send a message.", fr: "envoyer un message." },
    dropMessageSub: {
      en: "Drop a message below to discuss projects or just say hi.",
      fr: "Laissez un message ci-dessous pour discuter de vos projets ou échanger.",
    },
    scheduleMeeting: { en: "get in touch & discuss.", fr: "me contacter & discuter." },
    bookMeetSub: {
      en: "Reach out directly via WhatsApp or Email.",
      fr: "Contactez-moi directement via WhatsApp ou Email.",
    },
    discoveryCall: {
      en: "WhatsApp & Email Direct Contact",
      fr: "Contact Direct WhatsApp & Email",
    },
    discoverySub: {
      en: "Connect instantly via WhatsApp chat or direct email.",
      fr: "Échangez instantanément via WhatsApp ou email direct.",
    },
    followConnect: { en: "follow & connect.", fr: "suivre & se connecter." },
    followSub: {
      en: "Stay updated with my latest thoughts.",
      fr: "Restez informé de mes dernières publications.",
    },
    sending: { en: "Sending...", fr: "Envoi en cours..." },
    sendMessageBtn: { en: "Send Message", fr: "Envoyer le message" },
    successMsg: {
      en: "Got your message! I'll get back to you soon.",
      fr: "Message bien reçu ! Je vous répondrai rapidement.",
    },
    nameLabel: { en: "Name", fr: "Nom" },
    namePlaceholder: { en: "Your name", fr: "Votre nom" },
    emailLabel: { en: "Email", fr: "Email" },
    emailPlaceholder: { en: "your.email@example.com", fr: "votre.email@exemple.com" },
    messageLabel: { en: "Message", fr: "Message" },
    messagePlaceholder: {
      en: "What would you like to discuss?",
      fr: "De quoi souhaitez-vous discuter ?",
    },
    footerCopyright: { en: "All rights reserved.", fr: "Tous droits réservés." },
    footerStillScrolling: { en: "Still scrolling?", fr: "Vous défilez encore ?" },
    footerGithubLink: {
      en: "Check out my work on GitHub",
      fr: "Découvrez mes projets sur GitHub",
    },
    verifiedTooltip: {
      en: "npm verified: human@latest",
      fr: "vérifié par npm: humain@dernier",
    },
    liveDemo: { en: "Live Demo", fr: "Démo en direct" },
    sourceCode: { en: "Source Code", fr: "Code source" },
    overviewHeader: { en: "overview.", fr: "présentation." },
    techHeader: { en: "technical implementation.", fr: "implémentation technique." },
    demoHeader: { en: "project demo.", fr: "démo vidéo." },
    featuresHeader: { en: "key features.", fr: "fonctionnalités clés." },
    screenshotsHeader: { en: "screenshots.", fr: "captures d'écran." },
    challengesHeader: { en: "challenges & solutions.", fr: "défis & solutions." },
    impactHeader: { en: "project impact.", fr: "impact du projet." },
    challengeLabel: { en: "Challenge: ", fr: "Défi : " },
    solutionLabel: { en: "Solution: ", fr: "Solution : " },
    scoreLabel: { en: "Option: ", fr: "Option : " },
    resumeLabel: { en: "Resume", fr: "CV" },
    phoneLabel: { en: "Phone", fr: "Téléphone" },
  },
};
