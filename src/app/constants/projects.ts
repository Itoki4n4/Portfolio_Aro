// =============================================
// YOUR PROJECTS
// =============================================
// Each entry renders as a collapsible item on the home page and gets its own
// detail page at /projects/<slug>. Every field except name/tagline/description/
// tech/github is optional — delete what you don't need.

export const PROJECTS = [
  // =============================================
  // Project One (Professional - Evadia)
  // =============================================
  {
    name: "Evadia",
    type: "pro", // "pro" | "academic"
    tagline: {
      en: "Digital SaaS platform for booking tourist accommodations (Freelance: Jan 2026 - Aug 2026).",
      fr: "Plateforme numérique SaaS de réservation de logements touristiques (Freelance : Jan 2026 - Août 2026).",
    },
    overview: {
      en: "Comprehensive digital SaaS platform for tourist accommodation bookings developed as a freelance project (Jan 2026 - Aug 2026). Requirements analysis, technical architecture design, and data modeling. Built the Laravel admin back-office for managing bookings, offers, and content, the cross-platform React Native mobile app with REST APIs, Socket.io real-time chatbox integration between front-office and back-office, and Google OAuth authentication.",
      fr: "Plateforme numérique SaaS complète de réservation de logements touristiques développée en freelance (Jan 2026 - Août 2026). Analyse des besoins, conception de l'architecture technique et du modèle de données de la plateforme. Développement du back-office (Laravel) de gestion des réservations, offres et contenus des hébergements, de l'application mobile multiplateforme (React Native) avec API REST, de la chatbox en temps réel avec Socket.io entre front-office et back-office, et de l'authentification Google OAuth.",
    },
    description: {
      en: "Evadia is a modern SaaS digital solution designed for booking tourist accommodations. The platform encompasses full system architecture and data modeling, a responsive Laravel administration back-office for managing offers and content, high-performance REST APIs optimized with Redis caching, an interactive real-time Socket.io chatbox connecting front-office guests with back-office managers, secure Google OAuth authentication, and an intuitive React Native mobile application for guests on the go.",
      fr: "Evadia est une solution numérique SaaS moderne de réservation de logements touristiques. La plateforme englobe l'analyse des besoins, la conception de l'architecture technique et du modèle de données, un back-office d'administration réactif développé sous Laravel, des API REST hautes performances optimisées par Redis, une chatbox interactive en temps réel propulsée par Socket.io entre le front-office et le back-office, une authentification sécurisée Google OAuth, ainsi qu'une application mobile React Native intuitive.",
    },
    tech: [
      "Next.js",
      "Laravel",
      "React Native",
      "Redis",
      "Socket.io",
      "Google Auth",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST APIs",
    ],
    // Confidential client project currently in production - no public repo/link
    images: {
      hero: "/evadiabo.jpeg",
      gallery: [
        {
          src: "/Hebergement de destination.png",
          alt: "Front-office Web Evadia - Hébergements de destination",
          caption: {
            en: "Web Front-Office - Search and booking of destination accommodations",
            fr: "Front-office Web - Recherche et réservation d'hébergements de destination",
          },
        },
        {
          src: "/Proprietes.png",
          alt: "Application Mobile Evadia - Propriétés et réservations",
          caption: {
            en: "React Native Mobile App - Property management and bookings",
            fr: "Application Mobile React Native - Gestion des propriétés et réservations",
          },
        },
      ],
    },
    features: {
      en: [
        "Requirements analysis, technical architecture design, and data modeling for the SaaS platform",
        "Comprehensive Laravel back-office for managing bookings, offers, and accommodation content",
        "Cross-platform mobile application developed with React Native & REST API integration",
        "Real-time chatbox between web/mobile front-office and admin back-office powered by Socket.io",
        "Seamless Google OAuth authentication & high-performance Redis session/caching layer",
        "Automated administrative management and accommodation availability tracking",
      ],
      fr: [
        "Analyse des besoins, conception de l'architecture technique et du modèle de données de la plateforme SaaS",
        "Développement du back-office (Laravel) de gestion des réservations, offres et contenus des hébergements",
        "Développement de l'application mobile multiplateforme avec React Native et intégration des API REST",
        "Chatbox en temps réel entre le front-office (web & mobile) et le back-office via Socket.io",
        "Authentification sécurisée avec Google OAuth et gestion optimisée des sessions / cache via Redis",
        "Automatisation de la gestion administrative et suivi de la disponibilité des hébergements",
      ],
    },
    technicalDetails: [
      {
        title: {
          en: "System Architecture & Laravel Back-Office",
          fr: "Architecture Système & Back-Office Laravel",
        },
        description: {
          en: "Designed the technical architecture and data model for the accommodation platform. Developed the Laravel admin back-office for managing properties, offers, bookings, and content.",
          fr: "Analyse des besoins et conception du modèle de données et de l'architecture technique. Développement du back-office Laravel d'administration pour la gestion des réservations, offres et contenus des hébergements.",
        },
      },
      {
        title: {
          en: "Real-Time Socket.io Chatbox & Redis Caching",
          fr: "Chatbox Temps Réel Socket.io & Cache Redis",
        },
        description: {
          en: "Implemented an instant messaging chatbox connecting front-office guests with back-office admin staff using Socket.io, backed by Redis for fast session storage and API caching.",
          fr: "Implémentation d'une chatbox en temps réel connectant les clients du front-office et l'équipe back-office via Socket.io, adossée à Redis pour le stockage rapide des sessions et le cache API.",
        },
      },
      {
        title: {
          en: "Cross-Platform React Native App & REST APIs",
          fr: "Application Mobile React Native & API REST",
        },
        description: {
          en: "Built a cross-platform mobile application using React Native, fully integrated with Laravel REST APIs for seamless property discovery and mobile bookings.",
          fr: "Développement de l'application mobile multiplateforme sous React Native, intégrée aux API REST du back-office Laravel pour la recherche et la réservation d'hébergements sur mobile.",
        },
      },
    ],
    challenges: [
      {
        problem: {
          en: "Ensuring low-latency real-time chat communication and data synchronization between web front-office, mobile app, and Laravel back-office.",
          fr: "Assurer la communication chat en temps réel et la synchronisation fluide des réservations entre le front-office web, l'application mobile et le back-office Laravel.",
        },
        solution: {
          en: "Engineered a Socket.io WebSocket service backed by Redis pub/sub channels to instantly push messages across web and mobile clients without database latency.",
          fr: "Mise en place d'un service WebSocket sous Socket.io combiné aux canaux Pub/Sub de Redis pour diffuser instantanément les messages entre le web et le mobile sans ralentir la base de données.",
        },
      },
    ],
  },

  // =============================================
  // Project Two (Professional - ARMP GRH)
  // =============================================
  {
    name: "Système d'Information de Gestion RH (ARMP)",
    type: "pro", // "pro" | "academic"
    tagline: {
      en: "HR & Career Management Information System for ARMP Madagascar (Internship: Sept 2025 - Dec 2025).",
      fr: "Système d'information de gestion administrative et des carrières pour l'ARMP Madagascar (Stage : Sept 2025 - Déc 2025).",
    },
    overview: {
      en: "Internal HR web application developed during an internship at ARMP Madagascar (Sept 2025 - Dec 2025). Developed a full-stack back-office using CodeIgniter 4 and Angular for tracking employee careers, administrative data, assignments, internships, and positions (active, vacant, terminated). Automated the generation of official administrative documents (certificates, attestations, agreements), providing standalone management independent from the central ministry's ROHY system.",
      fr: "Application web RH interne développée lors d'un stage à l'ARMP Madagascar (Sept 2025 - Déc 2025). Développement d'un back-office complet sous CodeIgniter 4 et Angular pour le suivi des carrières, données administratives, affectations, stages et postes (actifs, vacants, en cessation). Automatisation de la génération de documents administratifs officiels (certificats, attestations, conventions), autonomisant l'institution autrefois dépendante du système ROHY du ministère.",
    },
    description: {
      en: "Developed for ARMP Madagascar, this HR Information System centralizes employee data management, career progression, position allocation, and administrative document generation. Built with an Angular frontend and a CodeIgniter 4 REST API backend, the platform streamlined internal HR operations and eliminated dependency on the central ministry's external ROHY system.",
      fr: "Conçu pour l'ARMP Madagascar, ce système d'information RH centralise la gestion des profils d'employés, le suivi des carrières, la gestion des postes et l'automatisation de la génération de documents administratifs. Développé avec un frontend Angular et un backend API REST sous CodeIgniter 4, il a permis de moderniser les processus RH internes et d'autonomiser l'institution vis-à-vis du système ROHY du ministère.",
    },
    tech: [
      "Angular",
      "CodeIgniter 4",
      "PHP",
      "TypeScript",
      "PostgreSQL",
      "Bootstrap",
      "REST APIs",
    ],
    statusBadge: {
      fr: "Serveur local Intranet (ARMP)",
      en: "Deployed on ARMP Intranet Server",
    },
    // Intranet application deployed on ARMP local server - no external live link
    github: "https://github.com/Itoki4n4/ARMP-GRH.git",
    images: {
      hero: "/armp1.png",
      gallery: [
        {
          src: "/liste poste.png",
          alt: "ARMP GRH - Liste et gestion des postes et affectations",
          caption: {
            en: "ARMP HR System - Position allocation, career tracking, and status management",
            fr: "Système RH ARMP - Gestion des postes, affectations et suivi de carrière",
          },
        },
        {
          src: "/demandedocument.png",
          alt: "ARMP GRH - Module de demande et génération de documents",
          caption: {
            en: "ARMP HR System - Automated administrative document generation module",
            fr: "Système RH ARMP - Module d'automatisation et génération de documents administratifs",
          },
        },
      ],
    },
    features: {
      en: [
        "Full administrative data management and career tracking for employees and interns",
        "Comprehensive position management (active, vacant, and terminated positions)",
        "Automated PDF document generation (certificates, attestations, conventions)",
        "Assignment and internship management module with lifecycle tracking",
        "Secure role-based access control and internal audit logging",
        "Autonomous HR management eliminating dependency on the central ministry's ROHY system",
      ],
      fr: [
        "Gestion complète des données administratives et suivi des carrières des employés et stagiaires",
        "Gestion globale des postes et affectations (postes actifs, vacants et en cessation)",
        "Génération automatisée de documents administratifs (certificats, attestations, conventions)",
        "Module de suivi des affectations et des conventions de stage",
        "Contrôle d'accès sécurisé par rôles et traçabilité des opérations",
        "Autonomisation complète de la gestion RH libérée du système central ROHY du ministère",
      ],
    },
    technicalDetails: [
      {
        title: {
          en: "CodeIgniter 4 REST API & PostgreSQL Database Architecture",
          fr: "API REST CodeIgniter 4 & Architecture Base de Données PostgreSQL",
        },
        description: {
          en: "Structured a robust relational PostgreSQL database for complex HR entities. Built lightweight, secure REST API endpoints with CodeIgniter 4 for fast data querying.",
          fr: "Conception d'une base de données relationnelle PostgreSQL adaptée aux entités RH complexes. Développement d'API REST performantes et sécurisées avec CodeIgniter 4.",
        },
      },
      {
        title: {
          en: "Angular Single Page Application & Document Generation",
          fr: "Application Angular SPA & Génération Automatisée de Documents",
        },
        description: {
          en: "Created an intuitive Angular dashboard for HR managers with reactive forms, real-time filtering, and one-click automated PDF document generation.",
          fr: "Création d'un tableau de bord Angular dynamique pour les responsables RH avec formulaires réactifs, filtres instantanés et génération en un clic de documents administratifs au format PDF.",
        },
      },
    ],
    challenges: [
      {
        problem: {
          en: "Replacing a legacy manual document process and migrating away from the central ministry's restrictive ROHY system.",
          fr: "Remplacer la rédaction manuelle des documents administratifs et s'affranchir des contraintes du système ROHY du ministère.",
        },
        solution: {
          en: "Engineered automated template engines and structured entity relationships to generate accurate, pre-filled administrative certificates in seconds.",
          fr: "Conception d'un moteur de modèles de documents et structuration des entités pour générer des attestations et certificats pré-remplis de manière quasi instantanée.",
        },
      },
    ],
  },

  // =============================================
  // Project Three (Academic - Intégration ERPNext Spring Boot)
  // =============================================
  {
    name: "Intégration d'ERPNext via API (Spring Boot)",
    type: "academic", // "pro" | "academic"
    tagline: {
      en: "Spring Boot web application integrated with ERPNext API for managing suppliers, quotes, orders, payments, and data imports.",
      fr: "Application web Spring Boot intégrée avec l'API ERPNext pour la gestion des fournisseurs, devis, commandes, paiements et l'importation automatique de données.",
    },
    overview: {
      en: "Academic project focused on integrating ERPNext via REST API using a Spring Boot architecture. Key features include authenticating with ERPNext user credentials, consulting supplier quotes, updating prices dynamically, managing purchase orders, invoices, and online payments, as well as an automated data import module for suppliers, quotes, and billing data.",
      fr: "Projet académique axé sur l'intégration complète d'ERPNext via API REST avec une application Spring Boot. Les fonctionnalités principales comprennent la connexion sécurisée avec un compte ERPNext, la consultation et mise à jour des devis fournisseurs, la gestion des commandes d'achat, factures et paiements en ligne, ainsi qu'un module d'importation automatique de données (devis, fournisseurs et règlements).",
    },
    description: {
      en: "This project showcases the integration of an enterprise ERP system (ERPNext) with a custom Spring Boot web application via REST APIs. Users can authenticate using their ERPNext credentials, manage supplier relationships, inspect and adjust quotation prices, track purchase orders and invoices, and execute online payments directly. Additionally, it features an advanced data import engine for batch importing supplier catalog and financial records.",
      fr: "Ce projet présente l'interconnexion entre un système ERP d'entreprise (ERPNext) et une application web sur mesure développée en Spring Boot via des API REST. Les utilisateurs peuvent se connecter avec leurs identifiants ERPNext, gérer le répertoire des fournisseurs, consulter et ajuster les prix des devis, suivre le cycle des commandes et factures, et effectuer des règlements en ligne. L'application intègre également un moteur avancé d'importation automatique de données pour le traitement en lot des devis, factures et fichiers fournisseurs.",
    },
    tech: [
      "Spring Boot",
      "Java",
      "ERPNext REST API",
      "MySQL",
      "Thymeleaf",
      "Bootstrap",
      "REST APIs",
    ],
    statusBadge: {
      fr: "Projet Académique (Intégration ERPNext)",
      en: "Academic Project (ERPNext Integration)",
    },
    // Academic project - no external live link or public GitHub repo
    images: {
      hero: "/erp.png",
      gallery: [
        {
          src: "/import.png",
          alt: "Module d'importation automatique des données ERPNext",
          caption: {
            en: "Automated Data Import Module - Batch import for suppliers, quotes, orders, and billing records",
            fr: "Module d'importation automatique de données - Traitement en lot des fournisseurs, devis, commandes et factures",
          },
        },
      ],
    },
    features: {
      en: [
        "Secure authentication integrated directly with ERPNext user accounts",
        "Supplier directory consultation and quotation price management",
        "Comprehensive tracking of purchase orders, invoices, and payment statuses",
        "Online payment execution module integrated into the workflow",
        "Automated batch data import engine for suppliers, quotes, and financial records",
        "Robust REST API integration layer connecting Spring Boot backend to ERPNext",
      ],
      fr: [
        "Connexion sécurisée intégrée directement aux comptes utilisateurs ERPNext",
        "Consultation de la liste des fournisseurs et gestion dynamique des devis et prix",
        "Suivi complet du cycle des commandes d'achat, des factures et des états de paiement",
        "Possibilité d'effectuer des paiements et règlements en ligne directement",
        "Module d'importation automatique de données en lot (fournisseurs, devis, factures et paiements)",
        "Couche d'intégration d'API REST robuste reliant le backend Spring Boot à l'ERP ERPNext",
      ],
    },
    technicalDetails: [
      {
        title: {
          en: "ERPNext REST API Integration & Spring Boot Architecture",
          fr: "Intégration API REST ERPNext & Architecture Spring Boot",
        },
        description: {
          en: "Engineered a Spring Boot client service using RestTemplate/WebClient to handle authentication cookies, session headers, and JSON DTO mappings with ERPNext API endpoints.",
          fr: "Développement d'un service client Spring Boot (RestTemplate / WebClient) pour la gestion des sessions, en-têtes d'authentification et du mapping DTO avec les endpoints API d'ERPNext.",
        },
      },
      {
        title: {
          en: "Automated Data Import & Payment Workflow Engine",
          fr: "Moteur d'Importation de Données & Workflow de Paiement",
        },
        description: {
          en: "Implemented an automated batch import service capable of parsing supplier CSV/JSON files, validating data schemas, and pushing records to ERPNext, alongside a payment processing interface.",
          fr: "Conception d'un service d'importation automatique en lot capable d'analyser les fichiers fournisseurs, de valider les schémas de données et de synchroniser les enregistrements dans ERPNext, couplé à une interface de règlement des factures.",
        },
      },
    ],
    challenges: [
      {
        problem: {
          en: "Mapping complex ERPNext Document types (Doctypes) and handling API authentication state across user requests.",
          fr: "Gérer le cartographiage complexe des types de documents ERPNext (Doctypes) et maintenir la session d'authentification API.",
        },
        solution: {
          en: "Built custom Spring Security session handlers and ERPNext API wrappers to seamlessly manage API key tokens and session cookies.",
          fr: "Implémentation de wrappers d'API ERPNext et de gestionnaires de session sous Spring Security pour transmettre de manière transparente les clés d'API et cookies de session.",
        },
      },
    ],
  },

  // =============================================
  // Project Four (Academic / Personal - Sage 100c Integration)
  // =============================================
  {
    name: "Module de Gestion Commerciale Sage 100c",
    type: "academic", // "pro" | "academic"
    tagline: {
      en: "Full-stack commercial management module (Quotes, Orders, Invoices) combining React / Redux Toolkit with a FastAPI backend connected to Sage 100c via COM Automation.",
      fr: "Module full-stack de gestion commerciale (Devis, Commandes, Factures) combinant React / Redux Toolkit et une API FastAPI connectée à Sage 100c via Automation COM.",
    },
    overview: {
      en: "Full-stack personal project & technical assessment. Features a modern React frontend (Feature-based architecture, Redux Toolkit, strict generic hooks `<T, F>`, zero `any` types) consuming a strict Python 3.11+ FastAPI backend (SQLAlchemy 2.0, asyncpg, Alembic) that writes live business objects directly to Sage 100c ERP via win32com COM Automation.",
      fr: "Projet personnel & test technique full-stack. Conçoit une interface web moderne sous React (architecture par fonctionnalités, Redux Toolkit, hooks génériques réutilisables `<T, F>`, zéro type `any`) consommant une API FastAPI en Python 3.11+ (typé strict avec mypy/Pylance, SQLAlchemy 2.0, asyncpg, Alembic) écrivant directement les objets métiers dans l'ERP Sage 100c via Automation COM (win32com).",
    },
    description: {
      en: "This application handles the complete commercial cycle (Quotations, Purchase Orders, and Invoices) interacting live with Sage 100c's business object layer. On the frontend, a clean Feature-based Clean Architecture is powered by Redux Toolkit (slices, selectors, createAsyncThunk) and a custom generic hook (`<T, F>`) sharing mechanics (pagination, search, filtering, sorting, KPIs) across Quotation and Order views. On the backend, Python 3.11+ (strict typing via mypy/Pylance) and FastAPI orchestrate asyncpg persistence under SQLAlchemy 2.0 and live document creation in Sage 100c via win32com COM Automation while preserving commercial terms and lifecycle rules.",
      fr: "Ce module complet assure la gestion intégrale du cycle commercial (Devis, Commandes d'achat et Factures) en interagissant en direct avec le modèle d'objets métiers de Sage 100c. Côté frontend, une Clean Architecture par fonctionnalités s'appuie sur Redux Toolkit (slices, selectors, createAsyncThunk) et un hook générique réutilisable (`<T, F>`) partageant la même mécanique (pagination, recherche, filtres, tri, KPIs) entre les pages Devis et Commandes. Côté backend, FastAPI sous Python 3.11+ (mode typé strict avec mypy/Pylance) orchestre la persistance asyncpg avec SQLAlchemy 2.0 et l'écriture réelle dans Sage 100c via Automation COM (win32com), en respectant scrupuleusement la conservation des conditions commerciales et du cycle de vie des documents.",
    },
    tech: [
      "React",
      "TypeScript Strict",
      "Redux Toolkit",
      "FastAPI",
      "Python 3.11",
      "Sage 100c COM",
      "SQLAlchemy 2.0",
      "Asyncpg",
      "Tailwind CSS",
      "Alembic",
    ],
    statusBadge: {
      fr: "Projet Personnel (Intégration Sage 100c)",
      en: "Personal Project (Sage 100c Integration)",
    },
    github: "https://github.com/Itoki4n4/Dataven-Test-.git",
    images: {
      hero: "/sage100png.png",
      gallery: [
        {
          src: "/sage.png",
          alt: "Interface Frontend React / Redux Toolkit - Gestion des devis et commandes",
          caption: {
            en: "React / Redux Toolkit Frontend - Quotation and Purchase Order management dashboard",
            fr: "Interface Frontend React / Redux Toolkit - Consultation et édition des devis et commandes",
          },
        },
        {
          src: "/fastapi.png",
          alt: "Backend API FastAPI Python 3.11 - Integration COM win32com Sage 100c",
          caption: {
            en: "FastAPI Python 3.11 Backend - win32com COM Automation & SQLAlchemy 2.0 asyncpg persistence",
            fr: "Backend FastAPI Python 3.11 - Automation COM win32com & persistance SQLAlchemy 2.0",
          },
        },
      ],
    },
    features: {
      en: [
        "Complete commercial document lifecycle management (Quotes, Purchase Orders, Invoices)",
        "Feature-Based Clean Architecture on React with zero `any` types (strict TypeScript configuration)",
        "Redux Toolkit state management using slices, selectors, and createAsyncThunk",
        "Generic reusable custom hook `<T, F>` powering shared pagination, search, filter, and KPI logic",
        "FastAPI REST API written in strict Python 3.11+ (mypy / Pylance strict mode)",
        "Live write operations to Sage 100c ERP via win32com COM Automation preserving commercial conditions",
        "Async SQL persistence via SQLAlchemy 2.0 (Mapped[T] style, asyncpg) and Alembic migrations",
      ],
      fr: [
        "Gestion intégrale du cycle de vie des documents commerciaux (Devis, Commandes, Factures)",
        "Clean Architecture par fonctionnalités sur React avec typage TypeScript strict (type `any` proscrit)",
        "Gestion d'état Redux Toolkit complète (slices, selectors, createAsyncThunk)",
        "Hook générique réutilisable `<T, F>` partageant la logique de pagination, recherche, filtres et KPIs",
        "API REST FastAPI développée sous Python 3.11+ en mode typé strict (mypy / Pylance)",
        "Écriture réelle des documents métiers dans Sage 100c via Automation COM (win32com)",
        "Persistance async avec SQLAlchemy 2.0 (style Mapped[T], asyncpg) et migrations Alembic",
      ],
    },
    technicalDetails: [
      {
        title: {
          en: "Generic Typed Custom Hooks & Redux Toolkit Architecture",
          fr: "Hooks Génériques Typés & Architecture Redux Toolkit",
        },
        description: {
          en: "Designed a configurable generic hook accepting injected thunks and selectors to reuse identical pagination, filtering, searching, and KPI mechanics across Quote and Order feature modules.",
          fr: "Conception d'un hook générique typé configurable recevant des thunks et sélecteurs injectés pour partager à l'identique la pagination, le filtrage, la recherche et les KPIs entre les devis et les commandes.",
        },
      },
      {
        title: {
          en: "FastAPI, SQLAlchemy 2.0 & Sage 100c COM Automation Engine",
          fr: "API FastAPI, SQLAlchemy 2.0 & Moteur Automation COM Sage 100c",
        },
        description: {
          en: "Engineered a strict Python 3.11+ FastAPI backend with SQLAlchemy 2.0 Mapped[T] asyncpg persistence and win32com COM Automation wrappers to reliably write business objects into Sage 100c ERP.",
          fr: "Développement d'un backend FastAPI en Python 3.11+ avec persistance asyncpg sous SQLAlchemy 2.0 et wrappers win32com pour exécuter l'écriture réelle des objets métiers dans l'ERP Sage 100c.",
        },
      },
    ],
    challenges: [
      {
        problem: {
          en: "Ensuring strict type safety across complex commercial pricing models while executing synchronous win32com COM automation calls inside an asynchronous FastAPI event loop.",
          fr: "Garantir un typage strict sur des modèles tarifaires commerciaux complexes tout en exécutant des appels d'automation COM win32com synchrones au sein d'une boucle async FastAPI.",
        },
        solution: {
          en: "Isolated win32com COM dispatch calls within dedicated worker thread pools while enforcing strict Pydantic v2 data contracts and SQLAlchemy 2.0 Mapped types.",
          fr: "Isolation des appels win32com COM dans des pools de threads dédiés avec validation stricte des contrats de données Pydantic v2 et types Mapped SQLAlchemy 2.0.",
        },
      },
    ],
  },
];
