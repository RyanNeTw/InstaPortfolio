import PropTypes from 'prop-types';
import { useState } from 'react';
import Header from '../Header';
import FollowersModal from '../modal/FollowersModal';
import LocationSvg from '../../assets/location'
import OrganisationList from './OrganisationList'
import Repos from './Repos'
import { Link } from 'react-router-dom'
import ProfilPicture from '../elements/profilPicture'

function ProfilPage(props) {
    const [followersModal, setFollwersModal] = useState(false)
    const [followingsModal, setFollwingsModal] = useState(false)
    const [repoType, setRepoType] = useState(false)
    const user = props.user.data

    function getFollowers(state) {
        setFollwersModal(!state)
    }

    function getFollowings(state) {
        setFollwingsModal(!state)
    }

    function ReposType(status) {
        setRepoType(status)
    }

    return(
        <>
            {followersModal ? <FollowersModal  followers={props.followers} setAction={setFollwersModal} action={followersModal} text="Followers"/> : null}
            {followingsModal ? <FollowersModal  followers={props.followings} setAction={setFollwingsModal} action={followingsModal} text="Followings"/> : null}
            <div  className="pl-36 pt-8">
                <div className='flex flex-row justify-center gap-24 items-center'>
                    <ProfilPicture user={user} userEvents={props.userEvents.data} width={'w-36'} height={'h-36'} />
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='flex flex-row gap-8'>
                            <h2 className='text-white font-bold'>{user.login}</h2>
                            <div className='flex flex-row items-center gap-2'>
                                <LocationSvg />
                                <h2 className='text-white'>{user.location}</h2>
                            </div>
                            {user.hireable ? (<Link to="/cv" className='pl-4 pr-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all rounded'>Hire me</Link>) : null }
                        </div>
                        <div className='flex flex-row gap-4'>
                            <h3 className='text-white'><span className='font-bold'>{user.public_repos}</span> posts</h3>
                            <h3 className='text-white cursor-pointer hover:opacity-80' onClick={() => getFollowers(followersModal)}><span className='font-bold'>{ user.followers }</span> followers</h3>
                            <h3 className='text-white cursor-pointer hover:opacity-80' onClick={() => getFollowings(followersModal)}><span className='font-bold'>{user.following}</span> following</h3>
                        </div>
                        <div className='border-dashed border rounded pl-4 pr-4 pt-2 pb-2 flex flex-col gap-4'>
                            <p className='text-white'>{ user.bio }</p>
                            <h5 className='text-white text-xs self-end'>- { user.name }</h5>
                        </div>
                    </div>
                </div>
                {props?.organisation?.status ? (<OrganisationList organisation={props.organisation.data} />) : null}
            </div>
            <div className='flex flex-row justify-center pt-8 gap-8'>
                <h3 className={`text-white cursor-pointer hover:opacity-60 ${!repoType ? 'text-xl' : 'text-l opacity-80'} `} onClick={() => ReposType(false)}>My Repos</h3>
                <h3 className={`text-white cursor-pointer hover:opacity-60  ${repoType ? 'text-xl' : 'text-l opacity-80'}`} onClick={() => ReposType(true)}>Repos liked</h3>
            </div>
            {repoType ? <Repos repos={props.reposLiked} /> : <Repos repos={props.repos} userEvents={props.userEvents.data} user={props.user.data}/> }
            <Header />
        </>
    )
}

ProfilPage.propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    organisation: PropTypes.array.isRequired,
    followings: PropTypes.array.isRequired,
    reposLiked: PropTypes.array.isRequired,
    userEvents: PropTypes.array.userEvents
  };


export default ProfilPage