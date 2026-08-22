import logoPortfolio from "../../public/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg"
import logoPelisweb from "../../public/Screenshot 2026-08-22 at 20-33-51 pelisweb.png"

export const projects = [
  {
    title: "Portfolio",
    image: logoPortfolio,
    description: "Personal and professional website developed as part of the Master's in React.",
    details: "Interactive application built with reusable components, focused on efficient state management, optimized performance, and responsive design",
    tech: "React, Vite, JavaScript, CSS",
    link: "https://github.com/Rapdev12/Master-en-React/tree/main/08-proyecto-Portfolio",
  },
  {
    title: "Pelisweb",
    image: logoPelisweb,
    description: "Aplicación web SPA desarrollada en React para gestionar, buscar y organizar un catálogo personal de películas con almacenamiento local.",
    details: "DDesarrollada como parte de un máster práctico en React, esta aplicación implementa un sistema modular de componentes funcionales y hooks personalizados. Permite añadir nuevas películas con títulos, descripciones e imágenes, realizar búsquedas en tiempo real sobre el listado almacenado, y editar o eliminar registros de forma persistente utilizando el LocalStorage del navegador. Cuenta con un diseño moderno en modo oscuro adaptado con CSS Grid y Flexbox.",
    tech: "React, Vite, JavaScript (ES6+), LocalStorage, CSS3, HTML5",
    link: "https://github.com/Rapdev12/Master-en-React/tree/main/06-proyecto-Pelisweb/PelisWeb",
  },
  {
    title: "Project Three",
    image: "/project-three.png",
    description: "Descripción resumida para el Home.",
    details: "Descripción extendida y detalle técnico para el Portfolio.",
    tech: "React, Node.js, Database",
    link: "https://github.com/your-username/project-one",
  },

];