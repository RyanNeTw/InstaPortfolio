import PropTypes from 'prop-types';
import { useState } from 'react';
import EventsList from '../modal/EventsList'

function ProfilPicture(props) {
    const [openModal, setOpenModal] = useState(false)

    function openModalFunction() {
        setOpenModal(!openModal)
    }

    return(
        <>
            {openModal ? <EventsList user={props.user} events={props.userEvents} setAction={setOpenModal} action={openModal} /> : null}
            {
                props.userEvents ?
                <img src={props.user?.avatar_url} alt={props.user?.avatar_url} className={`rounded-full border-2 border-yellow-400 cursor-pointer  ${props.width} ${props.height} `} onClick={()=>openModalFunction()}/> 
                :
                <img src={props.user?.avatar_url} alt={props.user?.avatar_url} className={`rounded-full ${props.width} ${props.height} border-2 border-white`}/>
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