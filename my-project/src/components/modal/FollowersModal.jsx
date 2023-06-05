import PropTypes from 'prop-types';

function FollowersModal(props) {
//const followers = props.followers
//console.log(followers)
console.log(props, "élknkfjd bjk")

    const followers = [
        {
            login: "dgyd",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "zdfzdf",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "dgyd",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "zdfzdf",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "dgyd",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "zdfzdf",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "dgyd",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        },
        {
            login: "zdfzdf",
            url:"pzinvoenf",
            avatar_url: "https://avatars.githubusercontent.com/u/93142363?v=4"
        }
    ]

    function closeFollowersModal() {
        console.log("close")
    }



    return(
        <>
            <div className="absolute top-2/4 left-2/4 w-64 bg-gray-800 rounded-lg">
                <div className='flex flex-row justify-between border-b border-white'>
                    <h3 className='text-white p-4'>Followers</h3>
                    <span className='text-white p-4' onClick={() => closeFollowersModal()}>X</span>
                </div>
                <div className='p-4 flex flex-col gap-2 h-64 overflow-y-auto'>
                {
                    followers.map((follower, index) => {
                        return(
                                <div key={index} className="flex flex-row justify-between">
                                    <div className='flex flex-row items-center gap-4'>
                                        <img src={follower.avatar_url} alt={follower.avatar_url} className="rounded-full w-8" />
                                    <   h3 className='text-white'>{follower.login }</h3>
                                    </div>
                                    <a href={follower.url} className="pt-2 pb-2 pl-4 pr-4 rounded bg-white hover:bg-gray-300">Visit</a>
                                </div>
                            )
                    } )
                }
                </div>
            </div>
        </>
    )
}

FollowersModal.propTypes = {
    followers: PropTypes.object.isRequired
  };
export default FollowersModal