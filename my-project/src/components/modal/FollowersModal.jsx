import PropTypes from 'prop-types';

function FollowersModal(props) {
    const followers = props.followers.data

    function closeFollowersModal() {
        props.setAction(!props.action)
    }



    return(
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-zinc-800 rounded-lg">
                <div className='flex flex-row justify-between border-b border-white'>
                    <h3 className='text-white p-4'>{props.text}</h3>
                    <span className='text-white p-4 cursor-pointer' onClick={() => closeFollowersModal()}>X</span>
                </div>
                <div className='p-4 flex flex-col gap-2 h-64 overflow-y-auto'>
                { followers ? 
                    followers.map((follower, index) => {
                        return(
                                <div key={index} className="flex flex-row justify-between items-center gap-24">
                                    <div className='flex flex-row items-center gap-4'>
                                        <img src={follower.avatar_url} alt={follower.avatar_url} className="border rounded-full w-12" />
                                        <h3 className='text-white'>{follower.login }</h3>
                                    </div>
                                    <a href={'https://github.com/' + follower.login}  className="pl-4 pr-4 rounded bg-white hover:bg-gray-300 cursor-pointer" target="_blank" rel="noopener noreferrer">Visit</a>
                                </div>
                            )
                    } ) : (<h3>Aucun Follower</h3>)
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