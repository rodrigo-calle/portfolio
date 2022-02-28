const proyects = [
    {   
        id: 1,
        name: "Kusqi",
        category: "Web Aplication",
        description: "Aplicación tipo red social que permite registrar y gestionar negocios a los dueños de los mismos, publicar promociones y ser contactados por clientes quienes tienen acceso a la plataforma",       
        technologies: ["React", "NodeJS", "MongoDB", "Express","SASS", "Styled Components", "Redux", "JWT"],
        url: "https://kusqi.netlify.app/",
        image: "/images/kusqi-project.png"
    },
    {   
        id: 2,
        name: "Repeco",
        category: "Web Aplication",
        description: "·Aplicación web con dos tipos de usuarios (client, hotel) que permite al usuario “hotel” registrar hoteles y hacer gestión de cuartos. Por otro lado, permite al usuario client buscar cuartos a través de filtros y resérvalos además de gestionar su perfil, habitaciones y pagos description ",
        technologies: ["React", "NodeJS", "MongoDB", "Express", "EPAYCO API"],
        url: "https://repeco.netlify.app/",
        image: "/images/repeco-project.png"
    },
    {   
        id: 3,
        name: "Rosamel Group Web",
        category: "Web Pages",
        description: "Sitio web informativo multi página para constructora incluye formularios, botones de contacto directo y previsualizaciones de documentos ",
        technologies: ["HTML", "SCSS", "Java Script"],
        url: "https://grupo-rosamel.web.app/",
        image: "/images/rosamel-project.png"
    },
    {   
        id: 4,
        name: "Promociones",
        category: "Web Pages",
        description: "Sitio web que consume una API de promociones de productos, incluye react router en su última versión (v6) y uso de context",
        technologies: ["React"],
        url: "https://promotionsshop.netlify.app/",
        image: "/images/promotion-project.png"
    },
    {   
        id: 5,
        name: "Stars Wards Characters",
        category: "Web Pages",
        technologies: ["React", "react-router-dom v6"],
        description: "Sitio web hecho en React que muestra información de personajes de la película Star Wars, incluye paginación",
        url: "https://star-wars-characters-consume.netlify.app",
        image: "/images/star-wars-project.png"
    },
    {   
        id: 6,
        name: "Clinica Web",
        category: "Web Aplication",
        technologies: ["HTML", "CSS", "Java Script", "PHP", "MySQL"],
        description: "Aplicación web informativa de varias páginas que cuenta con un formulario para usuarios invitados conectado a una base de datos hecha en MySQL",
        url: "https://clinic-test-web.herokuapp.com/index.html",
        image: "/images/clinic-proyect.png"
    },
    
]

export default proyects;
export const getAllProjects = () => {
    return proyects;
}