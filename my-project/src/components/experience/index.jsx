import Header from '../Header'
import experience, { education } from '../../object/experienceObject'
import PropTypes from 'prop-types';
import ArrowDivSvg from '../../assets/arrowDiv'
import { useState } from 'react';

function Experience(props) {

    const [rotateArrowExp, setRotateArrowExp] = useState(true)
    const [rotateArrowEdu, setRotateArrowEdu] = useState(true)

    function AppearList(change) {
        change == "experience" ?  setRotateArrowExp(!rotateArrowExp) :  setRotateArrowEdu(!rotateArrowEdu)
    }

    return(
        <>
            <div className='flex flex-col gap-4 h-screen overflow-auto pl-4 pr-4 pt-4 pb-44 overflow-auto md:p-8'>
                <div className='flex flex-row gap-8 items-center'>
                    <h1 className='text-white text-3xl'>Experiences ({experience?.length})</h1>
                    <span onClick={() => AppearList("experience")} className={`cursor-pointer ${rotateArrowExp ? "rotate-90" : ""} `}>
                        <ArrowDivSvg />
                    </span>
                </div>
                { experience && rotateArrowExp ?
                    experience.map((exp, index) => {
                        return(
                            <div key={index} className="flex flex-row border boder-white bg-zinc-900 rounded-lg">
                                <a href={exp.website} className='flex flex-col justify-center w-28' target="_blank" rel="noopener noreferrer">
                                    <img src={exp.image_link} alt={exp.image_alt} className="rounded-lg transition hover:opacity-50"/>
                                </a>
                                <div className='bg-zinc-900 pl-4 pr-4 pt-2 pb-2 flex flex-col justify-around'>
                                    <div className='flex flex-col md:flex-row gap-2 md:gap-4 pb-2'>
                                        <a href={exp.website} className='text-white text-xl' target="_blank" rel="noopener noreferrer">{exp.place}</a>
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
                    <h1 className='text-white text-3xl'>Education ({education?.length})</h1>
                    <span onClick={() => AppearList()} className={`cursor-pointer ${rotateArrowEdu ? "rotate-90" : ""} `}>
                            <ArrowDivSvg />
                    </span>
                </div>
                { education && rotateArrowEdu ?
                    education.map((exp, index) => {
                        return(
                            <div key={index} className="flex flex-row border boder-white bg-zinc-900 rounded-lg">
                                <a href={exp.website} className='flex flex-col justify-center w-28' target="_blank" rel="noopener noreferrer">
                                    <img src={exp.image_link} alt={exp.image_alt} className="rounded-lg transition hover:opacity-50"/>
                                </a>
                                <div className='pl-4 pr-4 pt-2 pb-2 flex flex-col justify-around'>
                                    <div className='flex flex-row gap-4'>
                                        <a href={exp.website} className='text-white text-xl text-bold' target="_blank" rel="noopener noreferrer">{exp.place}</a>
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
            </div>
            <Header userReceivedEvents={props.userReceivedEvents}  />
        </>
    )
}

Experience.propTypes = {
    userReceivedEvents: PropTypes.array.userReceivedEvents
  };

export default Experience