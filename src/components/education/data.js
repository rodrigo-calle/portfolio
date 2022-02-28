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
        date: "2018-2018",
        name: "Supervisor de Infraestructura",
        company: "Logiconsult SAC",
        description: "LOGROS \n -Se incrementó un 5% la contactabilidad de clientes mediante los mensajes masivos con la implementación y administración del GoIP. -Implementé un sistema de cableado estructurado, lo cual bajó el índice de caídas de servicios en un 11% en las áreas administrativas de la empresa. -Se gestionó y administró la plataforma Windows Server 2012, estableciendo políticas de Gpo, usuarios y computadoras. -Implementé y administré el Directorio Activo de Software Libre Zentyal, minimizando los costos de licencia de software. -Implementé un servidor virtual Proxmox, reduciendo recursos y espacio físico en el DataCenter. Asimismo, se mejoró la administración de los mismos. -Implementar y administrar servidores virtuales como Proxmox y VMware"
    },
    {
        id: 2, 
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