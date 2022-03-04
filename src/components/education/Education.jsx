import React, { useState, useEffect } from 'react';
import './Education.scss';
import {getAllEducation, getAllExperience} from './data'

const Education = () => {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const getEducation = () => {
        const response = getAllEducation();
        setEducation(response)
    }
    const getExperience = () => {
        const response = getAllExperience();
        setExperience(response);
    }
    useEffect(()=> {
        getExperience();
        getEducation();
    }, [])

 return (
    <div className="education-container">
        <h1 className="title-education">EDUCACIÓN Y<span> EXPERIENCIA</span></h1>
        <div className="subtitles-education-experience">
            <p className="subtitles-education-experience__education">Educación</p>
            <p className="subtitles-education-experience__experience">Experiencia</p>
        </div>
        <p className="subtitle-responsive-education">Educación</p>
        <div className="experience-and-education-container">
            <div className="education-container-section">
                {
                    education.map((item)=>(
                    <div className="education-container__card" key={item.id}>
                        <p className="education-container__card--title">{item?.degree}</p>
                        <p className="education-container__card--subtitle"><span>{item.date}</span> {item.institution}</p>
                        <p className="education-container__card--description">
                        {item.description}
                        </p>
                    </div>
                    ))
                }
                
            </div>
            <p className="subtitle-responsive-experience">Experience</p>
            <div className="experience-container-section">
            {
                experience.map((item) => (
                    <div className="experience-container__card" key={item.id}>
                        <p className="experience-container__card--title">{item.name}</p>
                        <p className="experience-container__card--subtitle"><span>{item.date}</span> {item.company}</p>
                        <p className="experience-container__card--description">
                        {item.description}
                        </p>
                    </div>
                ),[])
            }
            </div>
        </div>
    </div>
 );
}

export default Education;