import Header from '../Header'
import experience, { education } from '../../object/experienceObject'
import PropTypes from 'prop-types';

function Experience(props) {

    return(
        <>
            <div className='flex flex-col gap-4 h-screen overflow-auto pl-4 pr-4 pt-4 pb-24 overflow-auto md:p-8'>
                <h1 className='text-white text-3xl'>Experiences</h1>
                { experience ?
                    experience.map((exp, index) => {
                        return(
                            <div key={index} className="flex flex-row">
                                <div className='bg-white flex flex-col justify-center w-28'>
                                    <h3 className='self-center pl-12 pr-12'>{exp.time}</h3>
                                </div>
                                <div className='bg-zinc-900 pl-4 pr-4 pt-2 pb-2 border boder-white rounded-tr-lg rounded-br-lg'>
                                    <div className='flex flex-row gap-4'>
                                        <a href={exp.website} className='text-white text-xl' target="_blank" rel="noopener noreferrer">{exp.place}</a>
                                        <div className='slef-start flex flex-row items-center'>
                                            <h6 className='text-white text-xs'>{exp.date_start} to {exp.date_end} </h6>
                                        </div>
                                    </div>
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
                        )
                    }) : null
                }

                <h1 className='text-white text-3xl'>Education</h1>
                { education ?
                    education.map((exp, index) => {
                        return(
                            <div key={index} className="flex flex-row">
                                <div className='bg-white flex flex-col justify-center w-28'>
                                    <h3 className='self-center pl-12 pr-12'>{exp.time}</h3>
                                </div>
                                <div className='bg-zinc-900 pl-4 pr-4 pt-2 pb-2 border boder-white rounded-tr-lg rounded-br-lg'>
                                    <div className='flex flex-row gap-4'>
                                        <a href={exp.website} className='text-white text-xl text-bold' target="_blank" rel="noopener noreferrer">{exp.place}</a>
                                        <div className='slef-start flex flex-row items-center'>
                                            <h6 className='text-white text-xs'>{exp.date_start} to {exp.date_end} </h6>
                                        </div>
                                    </div>
                                    <p className='text-white text-xs'>{exp.description}</p>
                                    <div>
                                        <h3 className='text-white text-sm'>{exp.role}</h3>
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