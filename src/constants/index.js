import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chat,
  synbolW,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  word,
  pdf,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  email,
  telegram,
  twitter,
  yourlogo,
  penal,
  businessChart,
  construction,
  contract,
  family,
  immigacion,
  legalDocs,
  mercantil,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
  { id: 1, title: "Inicio", url: "/" },
  { id: 8, title: "Contacto", url: "/contacto" },
    // Otros enlaces que no se eliminarán
  { id: 2, title: "Automatización de Documentos", url: "/automatizacion-documentos#hero" },
  { id: 3, title: "Análisis de Sentencias", url: "/analisis-sentencias#hero" },
  { id: 4, title: "Reducción de Tareas", url: "/reduccion-tareas#hero" },
  { id: 5, title: "Precisión y Eficiencia", url: "/precision-eficiencia#hero" },
  { id: 6, title: "Información Actualizada", url: "/informacion-actualizada#hero" },
  { id: 7, title: "Soporte en Litigios", url: "/soporte-litigios#hero" },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const lexbotServices = [
  "Vacíos Legales",
  "Errores a favor y en contra",
  "Fundamentos y Argumentos",
];

export const lexbotServicesIcons = [
  pdf,
  word,
  synbolW,
  chat,
  email,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
 ];

export const collabText =
  "Nuestros bots están entrenados para redactar todo tipo de documentos legales.";

export const collabContent = [
  {
    id: "0",
    title: "Creación de Documentos",
    text: collabText,
  },
  {
    id: "1",
    title: "Análisis de Sentencias",
    text: "Sube tus sentencias y recibe un análisis detallado para fundamentar tu caso. (En desarrollo)"
  },
  {
    id: "2",
    title: "Asesoría en Litigios",
    text: "Obten asistencia especializada para la preparación y manejo de litigios complejos. (En desarrollo)"
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Penal",
    icon: penal,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Empresarial",
    icon: businessChart,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Ley Laboral",
    icon: construction,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Contratos",
    icon: contract,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Dercho de Familia",
    icon: family,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Ley de Immigracion",
    icon: immigacion,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Documentos Legales",
    icon: legalDocs,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Dercho Mercantil",
    icon: mercantil,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Básico",
    parameters: "/product?basico",
    description: "AI chatbot, personalized recommendations",
    price: "19.99",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
    ],
  },
  {
    id: "1",
    title: "Profesional",
    parameters: "/product?profesional",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "39.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Premium",
    parameters: "/product?premium",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "79.99",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "3",
    title: "Empresarial",
    parameters: "/product?empresarial",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Automatización de Documentos",
    text: "Ahorra tiempo y reduce errores con la generación automática de documentos legales.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    link: '/automatizacion-documentos',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Análisis de Sentencias",
    text: "Accede a análisis detallados y precisos de sentencias para fundamentar tus casos.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    link: '/analisis-sentencias',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Reducción de Tareas Repetitivas",
    text: "Delega tareas repetitivas a LexBot y enfócate en lo que realmente importa.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    link: '/reduccion-tareas',
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Precisión y Eficiencia",
    text: "Mejora la precisión y eficiencia de tus trabajos legales con herramientas avanzadas.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    link: '/precision-eficiencia',
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Acceso a Información Actualizada",
    text: "Mantente al día con la normativa y jurisprudencia actualizada al instante..",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    link: '/informacion-actualizada',
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Soporte en Litigios",
    text: "Recibe asistencia especializada en la preparación y gestión de litigios complejos.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    link: '/soporte-litigios',
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
