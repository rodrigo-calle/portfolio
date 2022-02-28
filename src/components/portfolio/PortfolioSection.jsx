import React, {useState, useEffect} from 'react';
import './PortfolioSection.scss';
import { getAllProjects} from './data';

const PortFolioSection = () => {
    const [projects, setProjects] = useState([]);
    

    useEffect(() =>{
        const getProjects = () => {
            const response = getAllProjects();
            console.log(response)
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
console.log(projects)
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
                    projects?.map((proyect)=> (
                        <div 
                            key={proyect?.id} 
                            className="portfolio-projects-container__card"
                            style={{'background-image': `url(${proyect?.image})`, 'background-size': 'cover'}}
                        >
                            <p className="title-proyect">{proyect?.name}</p>
                            <p className="description-proyect">{proyect?.description}</p>
                               <ul className="technologies">
                                <p className="technologies-title">Tecnologías</p>
                               {     proyect?.technologies.map((technology) => (
                                
                                        <li>{technology}</li>
                                    
                                ))
                            }
                                </ul>
                            
                            <div className="btns-projects-container">
                                <a href={proyect.url}
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