import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ContactModal from '../modal/ContactModal'

function Suggestions(props) {
    const user = props.user
    const followings = props.followings
    const [modalState, setModalSate] = useState(false)

    function onpenModal() {
        setModalSate(!modalState)
    }

    return(
        <>
            {modalState ? <ContactModal setAction={setModalSate} action={modalState} /> : null}
           <div className='overflow-auto pl-24 pt-8 flex flex-col gap-4'>
            <div className='flex flex-row items-center justify-between max-w-64 gap-4'> 
                <Link to="/profil" className='flex flex-row items-center gap-4'>
                    <img src={user.avatar_url} alt={user.avatar_url} className='rounded-full w-16 h-16'/>
                    <div>
                        <h3 className='text-white text-sm font-bold uppercase'>{user.login}</h3>
                        <h3 className='text-white text-xs'>{user.name}</h3>
                    </div>
                </Link>
                <h3 className='text-sky-700 font-bold text-xs cursor-pointer hover:text-sky-600' onClick={() => onpenModal()}>Contact me</h3>
            </div>
            <h3 className='text-white opacity-70 text-sm font-bold'>Suggested for you</h3>
            <div className='flex flex-col gap-4'>
                {
                    followings ? followings.map((following, index) => {
                        return(
                            <div key={index} className='flex flex-row items-center justify-between max-w-64 gap-4'> 
                                <Link to="/profil" className='flex flex-row items-center gap-4'>
                                    <img src={following.avatar_url} alt={following.avatar_url} className='rounded-full w-8 h-8'/>
                                    <div>
                                        <h3 className='text-white text-sm font-bold uppercase'>{following.login}</h3>
                                        <h3 className='text-white text-xs'>{following.login}</h3>
                                    </div>
                                </Link>
                                <a className='text-sky-700 font-bold text-xs cursor-pointer hover:text-sky-600' href={following.html_url } target="_blank" rel="noopener noreferrer">Visit</a>
                            </div>
                        )
                    }) : null
                }
            </div>
           </div>
        </>
    )
}

Suggestions.propTypes = {
    user: PropTypes.object.isRequired,
    followings: PropTypes.array.isRequired,
  };

export default Suggestions