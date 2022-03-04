import React, {useState, useEffect} from 'react';
import './PortfolioSection.scss';
import { getAllProjects} from './data';

const PortFolioSection = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() =>{
        const getProjects = () => {
            const response = getAllProjects();
            setProjects(response);
        }
        getProjects();
    },[])

    const applyWebAplicationFilter = () => {
        const webAplications = [];
        const response = getAllProjects();
        response.forEach((item)=> {
            if(item.category === 'Web Aplication')webAplications.push(item)
        })
        setProjects(webAplications);
        document.querySelector('.btn-all').classList.remove('active')
        document.querySelector('.btn-web-pages').classList.remove('active')
        document.querySelector('.btn-web-aplication').classList.add('active')
    }

    const applyAllProjects = () => {
        const response = getAllProjects();
        setProjects(response);
        document.querySelector('.btn-all').classList.add('active')
        document.querySelector('.btn-web-pages').classList.remove('active')
        document.querySelector('.btn-web-aplication').classList.remove('active')

    }

    const applyWebPages = () => {
        const webPages = [];
        const response = getAllProjects();
        response.forEach((item)=> {
            if(item.category === 'Web Pages')webPages.push(item)
        })
        setProjects(webPages);
        document.querySelector('.btn-all').classList.remove('active')
        document.querySelector('.btn-web-pages').classList.add('active')
        document.querySelector('.btn-web-aplication').classList.remove('active')
    }
    return(
        <div className="portfolio-container" id="portfolio-section">
            <h1 className="title-portfolio">MI<span> PORTAFOLIO</span></h1>
            <p className="btns-list-projects">
                <span className="btn-all active" onClick={applyAllProjects}>Todos</span>
                <span className="btn-web-aplication" onClick={applyWebAplicationFilter}>Aplicaciones Web</span>
                <span className="btn-web-pages" onClick={applyWebPages}>Páginas Web</span>
            </p>
            <div className="portfolio-projects-container">
                {
                    projects?.map((project)=> (
                        <div 
                            key={project?.id} 
                            className="portfolio-projects-container__card"
                        /*    style={{'background-image': `url(${proyect?.image})`, 'background-size': 'cover'}}*/
                            style={{'background': '#ffffff' }}
                        >
                            <p className="title-proyect">{project?.name}</p>
                            <p className="description-proyect">{project?.description}</p>
                               <ul className="technologies">
                                <p className="technologies-title">Tecnologías</p>
                               {     project?.technologies.map((technology) => (
                                
                                        <li key={Math.random()}>{technology}</li>
                                    
                                ))
                            }
                                </ul>
                            
                            <div className="btns-projects-container">
                                <a href={project.url}
                                   target="_blank" rel="noreferrer" 
                                   style={{textDecoration: "none"}}
                                >
                                    <p className="go-to-proyect">Ir a Proyecto</p>
                                </a>
                            </div>    
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default PortFolioSection;