import PropTypes from 'prop-types';
import { useState } from 'react';
import Header from '../Header';
import FollowersModal from '../modal/FollowersModal';

function ProfilPage(props) {
console.log(props.user)
    const [followersModal, setFollwersModal] = useState(false)
    function getFollowers(state) {
        setFollwersModal(!state)
    }

    return(
        <>
            {followersModal ? <FollowersModal  props={props.followers} /> : null}
            <div  className="pl-36 pt-8">
                <div className='flex flex-row justify-center gap-24 items-center'>
                    <img src="https://avatars.githubusercontent.com/u/93142363?v=4" alt=''  className='rounded-full border-2 border-white'/>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white font-bold'>{ props.user.login }</h2>
                        <div className='flex flex-row gap-4'>
                            <h3 className='text-white'><span className='font-bold'>3</span> posts</h3>
                            <h3 className='text-white cursor-pointer' onClick={() => getFollowers(followersModal)}><span className='font-bold'>3</span> followers</h3>
                            <h3 className='text-white'><span className='font-bold'>3</span> following</h3>
                        </div>
                        <p className='text-white'>elkfnvlenfbvkdnloz ifius i sf bjshbf jsf jsf js</p>
                    </div>
                </div>
            </div>
            <Header />
        </>
    )
}

ProfilPage.propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired,
    followers: PropTypes.object.isRequired,
  };


export default ProfilPage