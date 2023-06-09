import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function FollowersModal(props) {
    const followers = props.followers.data

    function closeFollowersModal() {
        props.setAction(!props.action)
    }


    return(
        <>
            <div className='bg-black opacity-80 absolute z-10 w-screen h-screen top-0' onClick={() => closeFollowersModal()} ></div>
            <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-yellow-400 rounded-lg">
                <div className='flex flex-row justify-between border-b border-yellow-400'>
                    <h3 className='text-white p-4'>{props.text}</h3>
                    <span className='text-white p-4 cursor-pointer' onClick={() => closeFollowersModal()}>X</span>
                </div>
                <div className='p-4 flex flex-col gap-2 h-64 overflow-y-auto'>
                { followers?.length > 0? 
                    followers.map((follower, index) => {
                        return(
                                <div key={index} className="flex flex-row justify-between items-center gap-24">
                                    <Link to={`/profil/${follower.login}`}  className='flex flex-row items-center gap-4'>
                                        <img src={follower.avatar_url} alt={follower.avatar_url} className="border rounded-full w-12" />
                                        <h3 className='text-white'>{follower.login }</h3>
                                    </Link>
                                    <a href={'https://github.com/' + follower.login}  className="group relative pl-4 pr-4 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow hover:shadow-yellow-400 cursor-pointer" target="_blank" rel="noopener noreferrer">
                                        Visit
                                    </a>
                                </div>
                            )
                    } ) : (<h3 className='text-white flex justify-center'>No followers</h3>)
                }
                </div>
            </div>
        </>
    )
}

FollowersModal.propTypes = {
    followers: PropTypes.array.isRequired,
    setAction: PropTypes.func.isRequired,
    action: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  };
export default FollowersModal