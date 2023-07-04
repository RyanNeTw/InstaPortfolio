import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ProfilPicture from '../elements/profilPicture';
import ContactModal from '../modal/ContactModal'

function Suggestions(props) {
    const user = props.user
    const followings = props.followings
    const [modalState, setModalSate] = useState(false)

    function onpenModal() {
        setModalSate(!modalState)
    }
//<img src={user.avatar_url} alt={user.avatar_url} className='rounded-full w-16 h-16'/>
//                                    <img src={following.avatar_url} alt={following.avatar_url} className='rounded-full w-12 h-12'/>
    return(
        <>
            {modalState ? <ContactModal setAction={setModalSate} action={modalState} /> : null}
           <div className='pt-8 flex flex-col gap-4 pl-4 pr-4 pb-3'>
            <div className='flex flex-row items-center justify-between gap-16'> 
                <div to="/profil" className='flex flex-row items-center gap-4'>
                    <ProfilPicture user={user} userEvents={props.userEvents} width={'w-12'} height={'h-12'} />
                    <Link to="/profil">
                        <h3 className='text-white text-sm font-bold uppercase'>{user.login}</h3>
                        <h3 className='text-white text-xs'>{user.name}</h3>
                    </Link>
                </div>
                <h3 className='text-yellow-700 font-bold text-xs cursor-pointer hover:text-yellow-500 whitespace-nowrap' onClick={() => onpenModal()}>Contact me</h3>
            </div>
            <h3 className='text-white opacity-70 text-sm font-bold'>Suggested for you</h3>
            <div className='flex flex-row md:flex-col gap-4 overflow-auto pb-0 md:pb-32'>
                {
                    followings ? followings.map((following, index) => {
                        return(
                            <div key={index} className='flex flex-row items-center justify-between gap-2 md:gap-16'> 
                                <Link to={`/profil/${following.login}`} className='flex flex-col items-center gap-4 md:flex-row'>
                                    <ProfilPicture user={following} userEvents={null} width={'w-12'} height={'h-12'} />
                                    <div>
                                        <h3 className='text-white text-sm font-bold uppercase'>{following.login.substring(0,10)}</h3>
                                    </div>
                                </Link>
                                <a className='text-yellow-700 font-bold text-xs cursor-pointer hover:text-yellow-500 hidden md:block' href={following.html_url } target="_blank" rel="noopener noreferrer">Visit</a>
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
    userEvents: PropTypes.array.isRequired,
  };

export default Suggestions