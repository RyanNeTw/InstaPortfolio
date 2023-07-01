import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Header from '../Header';
import FollowersModal from '../modal/FollowersModal';
import LocationSvg from '../../assets/location'
import OrganisationList from './OrganisationList'
import Repos from './Repos'
import { Link } from 'react-router-dom'
import ProfilPicture from '../elements/profilPicture'
import { GetInfoRepos, GetInfoFollowers, GetInfoOrga, GetInfoFollowings, GetInfoReposLiked , GetUserEvents, GetUserReceivedEvents} from '../../api/GetAccountInfo'
import GetInfoAccount from '../../api/GetAccountInfo'
import Loader from '../Loader';
import TwitterSvg from '../../assets/Twitter'

function ProfilPage(props) {
    const [followersModal, setFollwersModal] = useState(false)
    const [followingsModal, setFollwingsModal] = useState(false)
    const [repoType, setRepoType] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const searchUrl = window.location.href.split('/')[4]

    const [ userSearch, setUserSearch ] = useState(null);
    const [ followersSearch, setFollowersSearch ] = useState([]);
    const [ reposSearch, setReposSearch ] = useState([]);
    const [organisationSearch, setOrganisationSearch] = useState([])
    const [followingsSearch, setFollowingsSearch] = useState([])
    const [reposLikedSearch, setReposLikedSearch] = useState([])
    const [userEventsSearch, setUserEventsSearch] = useState([])
    const [userReceivedEventsSearch, setUserReceidedEventsSearch] = useState([])

    useEffect(()=>{
        if (!isLoaded && searchUrl) {
            GetInfoAccount(searchUrl).then((data) => setUserSearch(data));
            GetInfoFollowers(searchUrl).then((data) => setFollowersSearch(data));
            GetInfoRepos(searchUrl).then((data) => setReposSearch(data));
            GetInfoOrga(searchUrl).then((data) => setOrganisationSearch(data));
            GetInfoFollowings(searchUrl).then((data) => setFollowingsSearch(data));
            GetInfoReposLiked(searchUrl).then((data) => setReposLikedSearch(data))
            GetUserEvents(searchUrl).then((data) => setUserEventsSearch(data))
            GetUserReceivedEvents(searchUrl).then((data) => setUserReceidedEventsSearch(data))
            setIsLoaded(true)
        }
      }, [isLoaded])

    const reposLiked = userSearch ? reposLikedSearch : props.reposLiked
    const user = userSearch ? userSearch.data : props.user.data
    const followers = userSearch ? followersSearch : props.followers
    const followings = userSearch ? followingsSearch : props.followings
    const userEvents = userSearch ? userEventsSearch.data : props.userEvents.data
    const organization = userSearch ? organisationSearch : props.organisation
    const userReceivedEvents = userSearch ? userReceivedEventsSearch : props.userReceivedEvents
    const repos = userSearch ? reposSearch : props.repos
      
    if(!isLoaded && searchUrl != undefined) {
        return(
            <>
                <Loader />
                <Header userReceivedEvents={userReceivedEvents}/>
            </>
        )
    }



    function getFollowers(state) {
        setFollwersModal(!state)
    }

    function getFollowings(state) {
        setFollwingsModal(!state)
    }

    function ReposType(status) {
        setRepoType(status)
    }


    if (user.message == "Not Found") {
        return (
            <>
                <section className="flex items-center justify-center h-full">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                                <span className="sr-only"></span>NO RESULT
                            </h2>
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn{"'"}t find this page.</p>
                            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                            <Link to="/" className="px-8 py-3 font-semibold text-white rounded bg-black border-white border">Back to homepage</Link>
                        </div>
                    </div>
                </section>
                <Header userReceivedEvents={userReceivedEvents}/>
            </>
        )
    }
        
    return(
    <>
        <div className='flex flex-col h-screen overflow-auto'>
            {followersModal ? <FollowersModal  followers={followers} setAction={setFollwersModal} action={followersModal} text="Followers"/> : null}
            {followingsModal ? <FollowersModal  followers={followings} setAction={setFollwingsModal} action={followingsModal} text="Followings"/> : null}
            <div  className="flex flex-col gap-2 md:items-center">
                <div className='flex flex-row justify-center gap-4 md:gap-24 items-center p-4'>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='flex flex-row items-end'>
                            <ProfilPicture user={user ? user : user.data} userEvents={userEvents ? userEvents : null } width={'w-36'} height={'h-36'} />
                            {
                                user?.twitter_username 
                                ? (
                                    <a href={`https://twitter.com/+${user?.twitter_username}`} target="_blank" rel="noopener noreferrer">
                                        <TwitterSvg />
                                    </a>
                                ) : null
                            }
                        </div>
                        {user.hireable ? (<Link to="/cv" className='animate-pulse block md:hidden pl-4 pr-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all rounded'>Hire me</Link>) : null }
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <div className='flex flex-row gap-8'>
                            <a className='text-white font-bold uppercase hover:animate-pulse' href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login ? user.login : searchUrl}</a>
                            <div className='flex flex-row items-center gap-2'>
                                {user.location ? <LocationSvg /> : null}
                                <h2 className='text-white'>{user.location ? user.location : null}</h2>
                            </div>
                            {user.hireable ? (<Link to="/cv" className='animate-pulse hidden md:block pl-4 pr-4 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all rounded'>Hire me</Link>) : null }
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            <h3 className='text-white'><span className='font-bold'>{user.public_repos ? user.public_repos : user.data?.public_repos}</span> posts</h3>
                            <h3 className='text-white cursor-pointer hover:opacity-80' onClick={() => getFollowers(followersModal)}><span className='font-bold'>{ user.followers ? user.followers  : 0}</span> followers</h3>
                            <h3 className='text-white cursor-pointer hover:opacity-80' onClick={() => getFollowings(followersModal)}><span className='font-bold'>{user.following  ? user.following : 0}</span> following</h3>
                        </div>
                        <div className='border-dashed border rounded pl-4 pr-4 pt-2 pb-2 flex flex-col gap-4 hidden md:block'>
                            <p className='text-white'>{ user.bio ? user?.bio : "This person has no bio"}</p>
                            <h5 className='text-white text-xs self-end'>- { user.name ? user.name : searchUrl }</h5>
                        </div>
                    </div>
                </div>
                <div className='border-dashed border rounded pl-4 pr-4 pt-2 pb-2 flex flex-col gap-4 block md:hidden ml-4 mr-4'>
                            <p className='text-white'>{ user.bio ? user?.bio : "This person has no bio"}</p>
                            <h5 className='text-white text-xs self-end'>- { user.name ? user.name : searchUrl }</h5>
                </div>
                {organization.status ? (<OrganisationList organisation={organization.data} />) : null}
            </div>
            <div className='flex flex-row justify-center pt-4 md:pt-8 gap-8'>
                <h3 className={`text-white cursor-pointer hover:opacity-60 ${!repoType ? 'text-xl' : 'text-l opacity-80'} `} onClick={() => ReposType(false)}>My Repos</h3>
                <h3 className={`text-white cursor-pointer hover:opacity-60  ${repoType ? 'text-xl' : 'text-l opacity-80'}`} onClick={() => ReposType(true)}>Repos liked</h3>
            </div>
            {repoType ? <Repos repos={reposLiked} /> : <Repos repos={repos} userEvents={userEvents} user={user}/> }
        </div>
        <Header userReceivedEvents={userReceivedEvents}/>
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
    userEvents: PropTypes.array.userEvents,
    userReceivedEvents: PropTypes.array.userReceivedEvents
  };


export default ProfilPage