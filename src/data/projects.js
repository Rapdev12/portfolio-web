import logoPelisweb from "../../public/Screenshot 2026-08-22 at 20-33-51 pelisweb.png"
import logoOpusClassicWeb from "../../public/OpusClassicWeb.png"
import logoBubbleweb from "../../public/Captura desde 2026-11-23 11-54-39.png"
import logoPortfolio from "../../public/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg"

export const projects = [

  {
    title: "Pelisweb",
    image: logoPelisweb,
    description: "React SPA for managing, searching, and organizing a personal movie catalog with local storage.",
    details: "DDesarrollada como parte de un máster práctico en React, esta aplicación implementa un sistema modular de componentes funcionales y hooks personalizados. Permite añadir nuevas películas con títulos, descripciones e imágenes, realizar búsquedas en tiempo real sobre el listado almacenado, y editar o eliminar registros de forma persistente utilizando el LocalStorage del navegador. Cuenta con un diseño moderno en modo oscuro adaptado con CSS Grid y Flexbox.",
    tech: "React, Vite, JavaScript (ES6+), LocalStorage, CSS3, HTML5",
    link: "https://github.com/Rapdev12/Master-en-React/tree/main/06-proyecto-Pelisweb/PelisWeb",
  },
  {
    title: "Opus Classic",
    image: logoOpusClassicWeb,
    description: "Interactive web platform dedicated to classical music, exploring symphonic works, sheet music, and the history of historical composers like Ludwig van Beethoven.",
    details: "Developed as a full-stack web application featuring a modern, fluid front-end interface connected to a robust RESTful API back-end for data management",
    tech: "React, Vite, Node.js, TypeScript, REST API, CSS3",
    link: "https://github.com/Rapdev12/Master-en-React/tree/main/15-Proyecto%203",
  },
  {
    title: "Bubble Web",
    image: logoBubbleweb,
    description: "Interactive social media platform blending visual storytelling with microblogging, allowing users to share photo updates, publish real-time thoughts, and engage in dynamic community feeds.",
    details: "Developed as a full-stack web application featuring a modern, fluid front-end interface connected to a robust RESTful API back-end for data management",
    tech: "React, Vite, Node.js, TypeScript, REST API, CSS3,MongoDB",
    link: "https://github.com/Rapdev12/Master-en-React/tree/main/16-Proyecto-SocialMedia",
  },
  {
    title: "Portfolio",
    image: logoPortfolio,
    description: "Personal and professional website developed as part of the Master's in React.",
    details: "Interactive application built with reusable components, focused on efficient state management, optimized performance, and responsive design",
    tech: "React, Vite, JavaScript, CSS",
    link: "https://github.com/Rapdev12/Master-en-React/tree/main/08-proyecto-Portfolio",
  },
];