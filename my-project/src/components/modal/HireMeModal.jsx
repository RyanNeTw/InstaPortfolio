import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkedInSvg from '../../assets/LinkedIn';
import GitHubSvg from '../../assets/GitHub';
import AccountSvg from '../../assets/account';

function HireMeModal(props) {
    const [closeHireMeModal, setCloseHireMeModal] = useState(true)
    const [openSocials, setOpenSocials] = useState(false)

    function closeHireMeFunction(){
        setCloseHireMeModal(!closeHireMeModal)
    }

    function socialsFunction(){
        setOpenSocials(!openSocials)
    }
    if (closeHireMeModal && props) {
        return(
            <>
                <div className='bg-zinc-800 rounded-lg flex flex-col absolute z-60 top-1/2 left-1/2 p-4 max-w-5xl items-center gap-4 transform -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-white self-end cursor-pointer' onClick={() => closeHireMeFunction()}>X</span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-4 items-center justify-center'>
                            <div className='flex flex-row gap-2'>
                                <h3 className='text-white'>Hi, I{"'"}m</h3>
                                <Link to="/profil" className='font-bold text-white underline'>{props.user.login}</Link> 
                            </div>
                            <img src="HandShake.png" className='w-8 handShake self-center'/>
                        </div>
                        <p className='text-white'>I{"'"}m looking for a new freelance assignment, so don{"'"}t hesitate to contact me. </p>
                    </div>
                    <h3 className='pl-4 pr-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all rounded cursor-pointer animate-pulse' onClick={()=> socialsFunction()}>Hire me</h3>
                    {
                        openSocials ?
                        (
                            <div className="flex flex-row items-center gap-4">
                                <a href="https://www.linkedin.com/in/ryan-ez-zerqti-964396236/" className="hover:opacity-70" target="_blank" rel="noopener noreferrer"><LinkedInSvg /></a>
                                <a href="https://github.com/RyanNeTw" className="hover:opacity-70" target="_blank" rel="noopener noreferrer"><GitHubSvg /></a>
                                <Link to="/profil" className='hover:opacity-70 border border-1 p-2 rounded-full'> <AccountSvg /> </Link>
                            </div>
                        ) : null
                    }
                </div>
            </>
        )
    }
}

HireMeModal.propTypes = {
    user: PropTypes.object,
  };

export default HireMeModal