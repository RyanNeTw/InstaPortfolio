import PropTypes from 'prop-types';
import { useState } from 'react';
import EventsList from '../modal/EventsList'

function ProfilPicture(props) {
    const user = props.user
    const events = props.userEvents
    const [openModal, setOpenModal] = useState(false)

    function openModalFunction() {
        setOpenModal(!openModal)
    }

    return(
        <>
            {openModal ? <EventsList user={user} events={events} setAction={setOpenModal} action={openModal} /> : null}
            {
                events ?
                <img src={user.avatar_url} alt={user.avatar_url} className={`rounded-full border-2 border-lime-400  ${props.width} ${props.height}`} onClick={()=>openModalFunction()}/> 
                :
                <img src={user.avatar_url} alt={user.avatar_url} className={`rounded-full w-${props.width} h-${props.width}`}/>
            }
            
        </>
    )
}

ProfilPicture.propTypes = {
    user: PropTypes.object.isRequired,
    userEvents: PropTypes.array.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  };

export default ProfilPicture