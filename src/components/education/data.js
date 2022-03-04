const education = [
    { 
        id: 1, 
        degree: "Desarrollador FullStack JS",
        institution: "Make It Real BootCamp",
        date: "2021-2022",
        description: "Accedí al Bootcamp a través de una beca brindada por un programa del estado Peruano, aprendía usar el stack MERN(MongoDB, Express, React y NodeJS). De igual modo tecnologías como, GraphQL, Cypress, React Native, entre otros "
    },
    { 
        id: 2, 
        degree: "Ingeniería de Sistemas",
        institution: "Universidad Peruana de Ciencias Aplicadas - UPC",
        date: "2019-2023",
        description: "Actualmente me encuentro cursando el decimo ciclo de la carrera que cuenta con 12 ciclos en total."
    },
    { 
        id: 3, 
        degree: "Idioma Ingles",
        institution: "Centro de Idiomas PUCP",
        date: "2020-2021",
        description: "Actualmente cuento con el modulo intermedio 3 concluido"
    },
    { 
        id: 4, 
        degree: "Redes y Comunicaciones",
        institution: "Instituto Superior Tecnológico CIBERTEC",
        date: "2015-2018",
        description: "Técnico titulado a nombre de la nación en Redes y Comunicaciones, cuento con módulos terminados de CCNA certificados."
    },
]

export const experience =[
    {
        id: 1, 
        date: "2021-2022",
        name: "Desarrollador Full Stack JavaScript",
        company: "Make It Real",
        description: "DESCRIPCIÓN \n -Participé de la planeación, diseño y desarrollo de REPECO, una aplicación web multiusario hecha con MERN (Mongo, Express, React, Node) para la reserva de cuartos de hoteles y administración de los mismos .\n -Diseñé aplicaciones web haciendo uso  del software Figma. -Formé parte del equipo de desarrollo donde se hizo uso del Marco Ágil SCRUM  durante todo el proceso de desarrollo y entrega del producto(aplicación web). -Planie y desarrollé Kusqi, una aplicación tipo red socila que permite la interacción entre negocios y clientes. Usé el stack MERN para el desarrollo. -Hice despliegue de aplicaciones en plataformas remotas como Firebase, Heroku y Netlify haciendo uso de CD. -Realizé pruebas End To End con Cypress a las aplicaciones desarrolladas"
    },
    {
        id: 2, 
        date: "2017-2018",
        name: "Soporte TI",
        company: "Logiconsult SAC",
        description: "FUNCIONES \n -Atender los ticket y llamadas de incidencias TI y solucionarlos. - Instalación y configuración de huelleros. -Mantenimiento preventivo y correctivo de computadoras dentro de la empresa. -Instalación de todo tipo de programas, según requiera el usuario. -Instalación de controladores remotos (VNC, ANYDESK, TEAMWEAVER) y soporte desde ello. -Instalación y mantenimiento de impresoras IP. -Configuración de teléfonos VoIP."
    },
    {
        id: 3, 
        date: "2017-2018",
        name: "Soporte TI",
        company: "Logiconsult SAC",
        description: "FUNCIONES \n -Atender los ticket y llamadas de incidencias TI y solucionarlos. - Instalación y configuración de huelleros. -Mantenimiento preventivo y correctivo de computadoras dentro de la empresa. -Instalación de todo tipo de programas, según requiera el usuario. -Instalación de controladores remotos (VNC, ANYDESK, TEAMWEAVER) y soporte desde ello. -Instalación y mantenimiento de impresoras IP. -Configuración de teléfonos VoIP."
    },

]

export const getAllExperience = () => {
    return experience;
}
export const getAllEducation = () => {
    return education;
}
export default education;