import { useState } from "react"
import PropTypes from 'prop-types';
import ArrowSvg from '../../assets/arrow'

function Notifications(props) {
    const [modalState, setModalState] = useState(false)
    const notifs = props.userReceivedEvents

    function openModal() {
        setModalState(!modalState)
    }

    return(
        <>
            <button onClick={() => openModal()} data-dropdown-toggle="dropdownNotification" className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-gray-400 dark:text-white" type="button"> 
                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                <div className="relative flex">
                    <div className="relative inline-flex w-3 h-3 bg-yellow-400 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900 animate-bounce"></div>
                </div>
            </button>


            {
                modalState ?
                <>
                    <div id="dropdownNotification" className="z-500 rounded-lg shadow fixed right-4 bottom-20 bg-zinc-800" aria-labelledby="dropdownNotificationButton">
                        <div className="p-4 border-b border-zinc-600">
                            <h2 className="text-white font-bold flex justify-center">Notifications</h2>
                        </div>
                        {
                            notifs ? notifs.data.slice(0, 6).map((notif, index) => {
                                return(
                                    <div key={index} className={`flex flex-row gap-4 p-4 items-center ${index != 0 ?"border-t border-zinc-600" : null}`}>
                                        <a href={"https://github.com/" + notif.actor.login} target="_blank" rel="noopener noreferrer">
                                            <img src={notif.actor.avatar_url} alt={notif.actor.avatar_url} className='rounded-full w-12 h-12 cursor-pointer'/>
                                        </a>
                                        <div>
                                            <div className="flex flex-row justify-between items-center gap-2">
                                                <h4 className="text-white font-bold uppercase">{notif.actor.login}</h4>
                                                <a href={"https://github.com/" + notif.repo.name} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                                    <ArrowSvg />
                                                </a>
                                            </div>
                                            <div className="flex flex-row justify-between items-center gap-2">
                                                <h4 className="text-white text-xs">{notif.type} </h4>
                                                <h4 className="text-white text-xs">{notif.created_at.split('T')[0]} </h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) 
                            : (<>
                                <h3 className='text-white flex justify-center pt-16 pb-16'>No notifications</h3>
                            </>)
                        }
                    </div>
                </> 
                : null
            }
        </>
    )
}

Notifications.propTypes = {
    userReceivedEvents: PropTypes.array.userReceivedEvents
  };

export default Notifications