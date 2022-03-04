import React, { useState, useEffect } from 'react';
import { getAllKnowledge } from "./data";
import './Knowledge.scss';

const Knowledge = () => {
    const [knowledgeOne, setKnowledgeOne] = useState([]);
    const [knowledgeTwo, setKnowledgeTwo] = useState([]);

    useEffect(()=> {
        const handlerGetAllData = () => {
            let firstKnowledgeSection = [];
            let secondKnowledgeSection = [];
            const response = getAllKnowledge();
            const lenghtDivided = Math.floor(response.length/2);
            for (let index = 0; index < response.length; index++) {
                if(index <= lenghtDivided) {
                    const element = response[index];
                    firstKnowledgeSection.push(element);
                }        
            }
            for (let index = lenghtDivided; index < response.length; index++) {
                if(index <= response.length) {
                    const element = response[index];
                    secondKnowledgeSection.push(element);
                }        
            }
            setKnowledgeOne(firstKnowledgeSection);
            setKnowledgeTwo(secondKnowledgeSection);
        }   
        handlerGetAllData();    
    },[])
    return (
        <div className="knowledge-container">
            <h1 className="title-knowledge">CONOCIMIENTOS Y<span> HABILIDADES</span></h1>
            <div className="first-container-knowledges">
                <div className="first-section-knowledges">
                    {   
                        knowledgeOne.map((item)=>(
                            <div className="knowledge-item" key={item.id}>
                                <label className="label-knowledge" htmlFor="vol">  
                                    {item.name}
                                </label><br />
                                <input className="knowledge-range" type="range" id="vol" readOnly={true} defaultValue={item.level} name="vol" min="0" max="10" /> <br/>
                            </div>
                        ))
                    }
                </div>
                <div className="second-section-knowledges">
                    {   
                        knowledgeTwo.map((item)=>(
                            <div className="knowledge-item" key={item.id}>
                                <label className="label-knowledge" htmlFor="vol">  
                                    {item.name}
                                </label><br />
                                <input className="knowledge-range" type="range" id="vol" value={item.level} name="vol" min="0" max="10" /> <br/>
                            </div>
                        ))
                    }

                {/*     <p className="label-knowledge"></p> */}
                </div>
            </div>
{/*             <div className="second-container-knowledges">
                <div className="first-section-knowledges">
                    <p className="label-knowledge"></p>

                </div>
                <div className="second-section-knowledges">
                    <p className="label-knowledge"></p>
                </div>
            </div> */}
{/*             <div className="knowledges-container-button">
                <button className="btn-more-knowlodge" type="button">
                    <p>Listar más</p>
                    <img 
                        src="https://icongr.am/feather/chevron-down.svg?size=128&color=64bd00"
                        alt="bottom arrow"
                    />
                </button>
            </div> */}
            
        </div>
    )
}

export default Knowledge;