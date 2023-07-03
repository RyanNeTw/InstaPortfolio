import Header from '../Header'
import experience, { education, skills } from '../../object/experienceObject'
import PropTypes from 'prop-types';
import ArrowDivSvg from '../../assets/arrowDiv'
import { useState } from 'react';

function Experience(props) {

    const [rotateArrowExp, setRotateArrowExp] = useState(true)
    const [rotateArrowEdu, setRotateArrowEdu] = useState(true)
    const [rotateArrowskills, setRotateArrowSkills] = useState(true)

    function AppearList(change) {
        change == "experience" ?  setRotateArrowExp(!rotateArrowExp) :  null
        change == "education" ?  setRotateArrowEdu(!rotateArrowEdu) :  null
        change == "skills" ?  setRotateArrowSkills(!rotateArrowskills) :  null
    }

    return(
        <>
            <div className='flex flex-col gap-4 h-screen overflow-auto pl-4 pr-4 pt-4 pb-56 overflow-auto md:pb-56 md:pl-8'>
                <div className='flex flex-row gap-8 items-center'>
                    <h1 className='text-white text-3xl flex flex-row gap-2 items-center'>
                        Experiences
                        <span className='bg-yellow-400 rounded-full pl-2 pr-2 text-xl text-black'>
                            {experience?.length > 0 ? experience.length : null }
                        </span>    
                    </h1>
                    <span onClick={() => AppearList("experience")} className={`cursor-pointer ${rotateArrowExp ? "rotate-90" : ""} `}>
                        <ArrowDivSvg />
                    </span>
                </div>
                { experience && rotateArrowExp ?
                    experience.map((exp, index) => {
                        return(
                            <div key={index} className="flex flex-row border boder-white bg-zinc-900 rounded-lg hover:shadow-white hover:shadow">
                                <a href={exp.website} className='hidden md:block flex flex-col justify-center w-28 min-h-full' target="_blank" rel="noopener noreferrer">
                                    <img src={exp.image_link} alt={exp.image_alt} className="rounded-lg transition hover:opacity-50"/>
                                </a>
                                <div className='pl-4 pr-4 pt-2 pb-2 flex flex-col justify-around'>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-4 pb-2'>
                                        <div className='flex flex-row gap-2 items-end'>
                                            <a href={exp.website} className='block md:hidden flex flex-col justify-center w-12' target="_blank" rel="noopener noreferrer">
                                                <img src={exp.image_link} alt={exp.image_alt} className="rounded-lg transition hover:opacity-50"/>
                                            </a>
                                            <a href={exp.website} className='text-white text-xl' target="_blank" rel="noopener noreferrer">{exp.place}</a>
                                        </div>
                                        <div className='slef-start flex flex-row items-center'>
                                            <h6 className='text-white text-xs'>{exp.date_start} to {exp.date_end} </h6>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-white text-xs'>{exp.description}</p>
                                        <div>
                                            <h3 className='text-white text-sm'>{exp.role} : {exp.type} </h3>
                                            <div className='flex flex-row gap-2'>
                                                {
                                                    exp.language.map((language, index) => {
                                                        return(
                                                            <div key={index}>
                                                                <h3 className='text-white text-xs'>{language} </h3>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }

                <div className='flex flex-row gap-8 items-center'>
                    <h1 className='text-white text-3xl flex flex-row gap-2 items-center'>
                        Education
                        <span className='bg-yellow-400 rounded-full pl-2 pr-2 text-xl text-black'>
                            {education?.length}
                        </span>
                    </h1>
                    <span onClick={() => AppearList("education")} className={`cursor-pointer ${rotateArrowEdu ? "rotate-90" : ""} `}>
                            <ArrowDivSvg />
                    </span>
                </div>
                { education && rotateArrowEdu ?
                    education.map((exp, index) => {
                        return(
                            <div key={index} className="flex flex-row border boder-white bg-zinc-900 rounded-lg hover:shadow-white hover:shadow">
                                <a href={exp.website} className='flex flex-col justify-center w-28 hidden md:block' target="_blank" rel="noopener noreferrer">
                                    <img src={exp.image_link} alt={exp.image_alt} className="rounded-lg transition hover:opacity-50"/>
                                </a>
                                <div className='pl-4 pr-4 pt-2 pb-2 flex flex-col justify-around'>
                                    <div className='flex flex-col md:flex-row gap-4'>
                                        <div className='flex flex-row gap-2 items-end'>
                                            <a href={exp.website} className='block md:hidden flex flex-col justify-center w-12' target="_blank" rel="noopener noreferrer">
                                                <img src={exp.image_link} alt={exp.image_alt} className="rounded-lg transition hover:opacity-50"/>
                                            </a>
                                            <a href={exp.website} className='text-white text-xl text-bold' target="_blank" rel="noopener noreferrer">{exp.place}</a>
                                        </div>
                                        <div className='slef-start flex flex-row items-center'>
                                            <h6 className='text-white text-xs'>{exp.date_start} to {exp.date_end} </h6>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-white text-xs'>{exp.description}</p>
                                        <div>
                                            <h3 className='text-white text-sm'>{exp.role}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }

                <div className='flex flex-row gap-8 items-center'>
                    <h1 className='text-white text-3xl flex flex-row gap-2 items-center'>
                        Skills
                        <span className='bg-yellow-400 rounded-full pl-2 pr-2 text-xl text-black'>
                            {skills?.length}
                        </span>
                    </h1>
                    <span onClick={() => AppearList("skills")} className={`cursor-pointer ${rotateArrowskills ? "rotate-90" : ""} `}>
                            <ArrowDivSvg />
                    </span>
                </div>      

                <div className='flex flex-wrap gap-8'>
                    {
                        skills && rotateArrowskills ? skills.map((skill, index) => {
                            return (
                                <div key={index} className="flex justify-center items-center border-t border-yellow-400 hover:shadow-yellow-400 hover:shadow-sm group relative">
                                    <a  href={skill.website} target="_blank" rel="noopener noreferrer" 
                                        className='p-4'
                                    >
                                        <img src={skill.image_link} alt={skill.image_alt} className="w-28 rounded-lg transition"/>
                                    </a>
                                    <span className="cursor-help absolute top-0 left-0 scale-0 bg-yellow-400 p-2 text-xs text-black group-hover:scale-100">{skill.language_name} </span>
                                </div>
                            )
                        }) : null
                    }
                </div>

            </div>
            <Header userReceivedEvents={props.userReceivedEvents}  />
        </>
    )
}

Experience.propTypes = {
    userReceivedEvents: PropTypes.array.userReceivedEvents
  };

export default Experience