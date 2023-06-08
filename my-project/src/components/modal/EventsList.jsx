import PropTypes from 'prop-types';
import { useState } from 'react';

function EventsList(props) {
    const [number, setNumber] = useState(0)
   const events = props.events

   function changeNumber(newNumber){
    setNumber(newNumber)
   }

   function addOneToNumber() {
        if (number == events.length - 1) {
            return setNumber(0)
        }
    setNumber(number + 1)
   }

   function substractOneToNumber() {
    if (number == 0) {
        return setNumber(events.length - 1)
    }
    setNumber(number - 1)
   }
   console.log(props)

   function closeModalEventsList () {
    props.setAction(!props.action)
   }

    return(
        <>
            <div className='w-screen h-screen bg-black absolute z-1 opacity-80 top-0' onClick={() => {closeModalEventsList()}} ></div>
            <div className='absolute z-30 w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-zinc-800 rounded-lg overflow-auto'>
                <div className='z-50 flex flex-row gap-2 absolute bottom-0 right-1/4 pb-4'>
                    {
                        events.map((event, index) => {
                            return(
                                <div 
                                    key={index} 
                                    className={`w-8 h-2 rounded-full cursor-pointer ${ number == index ? 'bg-white' : 'bg-white opacity-50' } `}
                                    onClick={() => changeNumber(index)}
                                ></div>
                            )
                        })
                    }
               </div>
               <div className='z-45 flex flex-row justify-between gap-2 absolute pb-4 h-full w-full'>
                    <div className='w-1/4 h-full cursor-pointer' onClick={() => substractOneToNumber()}></div>
                    <div className='w-1/4 h-full cursor-pointer' onClick={() => addOneToNumber()}></div>
               </div>
                <div className='w-full h-full overflow-hidden'>
                    {
                        events.map((event, index) => {
                            const url = event.repo.url.split('/')[5] + '.png'
                            const urlRepo = "https://github.com/" + event.repo.name
                            return(
                                <div key={index} className={`w-full h-full ${number == index ? 'block' : 'hidden'}`}>
                                    <div 
                                        className='flex flex-col justify-center items-center gap-4'
                                        style={{ backgroundImage: `url(${url.toLocaleLowerCase()})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <div className='bg-zinc-700 flex justfify-center w-full justify-center pt-2 pb-2 snapBar'>
                                            <h3 className='text-white'> {event.type}</h3>
                                        </div>
                                        <a href={urlRepo} target="_blank" rel="noopener noreferrer"  className='bg-white flex justfify-center w-1/2 rounded justify-center pt-2 pb-2 snapBar rotate-12'>
                                            <h3 className='text-black hover:underline'> {event.repo.url}</h3>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

EventsList.propTypes = {
    user: PropTypes.object.isRequired,
    events: PropTypes.array,
    setAction: PropTypes.func.isRequired,
    action: PropTypes.bool.isRequired
  };

export default EventsList