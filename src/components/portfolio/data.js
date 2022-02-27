const proyects = [
    {   
        id: 1,
        name: "Kusqi",
        category: "Web Aplication",
        description: "Aplicación web con dos tipos de usuarios (client, hotel) que permite al usuario hotel registrar hoteles y hacer gestión de cuartos. Por otro lado, permite al usuario client buscar cuartos a través de filtros y resérvalos además de gestionar su perfil,habitaciones y pagos,",
        technologies: ["React", "NodeJS", "MongoDB", "Express"],
        url: "https://kusqi.netlify.app/",
        image: "/images/banner-image.jpeg"
    },
    {   
        id: 2,
        name: "Repeco",
        category: "Web Aplication",
        description: "",
        technologies: ["React", "NodeJS", "MongoDB", "Express"],
        url: "https://kusqi.netlify.app/",
        image: "/images/banner-image.jpeg"
    },
    {   
        id: 3,
        name: "Clinica Web",
        category: "Web Pages",
        description: "",
        technologies: ["React", "NodeJS", "MongoDB", "Express"],
        url: "https://kusqi.netlify.app/",
        image: "/images/banner-image.jpeg"
    },
    {   
        id: 4,
        name: "Kusqi",
        category: "Web Pages",
        description: "",
        technologies: ["React", "NodeJS", "MongoDB", "Express"],
        url: "https://kusqi.netlify.app/",
        image: "/images/banner-image.jpeg"
    },
    {   
        id: 5,
        name: "Kusqi",
        category: "Web Pages",
        description: "",
        technologies: ["React", "NodeJS", "MongoDB", "Express"],
        url: "https://kusqi.netlify.app/",
        image: "/images/banner-image.jpeg"
    },
    {   
        id: 6,
        name: "Kusqi",
        category: "Web Pages",
        description: "",
        technologies: ["React", "NodeJS", "MongoDB", "Express"],
        url: "https://kusqi.netlify.app/",
        image: "/images/banner-image.jpeg"
    }
]

export default proyects;
export const getAllProjects = () => {
    return proyects;
}