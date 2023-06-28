import PropTypes from 'prop-types';
import HeartSvg from '../../assets/Heart';
import { Link } from 'react-router-dom'

function PostModal(props) {
    const repo = props.repo

    function closePost() {
        props.setAction(!props.action)
    }


    const imageUrl = repo.topics[0] + '.png'
//<img src={`${repo.topics[0]}.png`} className='h-96' alt={repo.topics[0]} />
//<div className={`bg-[url(${repo.topics[0]}.png)] h-96 w-96 bg-no-repeat bg-cover`}></div>
//<div className='cursor-pointer' onClick={() => closeImageModalFunction(repo)} style={{ backgroundImage: `url(${imageUrl})`, width: '24rem', height: '24rem', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    return(
        <>
            <div className='bg-black opacity-80 absolute z-10 w-screen h-screen top-0' onClick={() => closePost()} ></div>
            <div className='absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-lg flex flex-col-reverse md:flex-row'>
               {
                !repo.topics[0] ?
                    <div className='w-96 h-96 bg-zinc-800  flex justify-center items-center'>
                         <h3 className='text-white'>Not picture</h3>
                    </div> 
                :
                    <>
                        <img src={`${imageUrl}`} style={{maxWidth: '60vw', maxHeight: '80vh' }} className="max-w-none" alt={repo.topics[0]} />
                    </>
               }
                <div className='p-4 flex flex-col gap-4 min-w-36 justify-between bg-zinc-800' >
                    <div className='flex flex-col gap-4'>
                        <div className='border-b border-zinc-600 flex flex-row justify-between items-center gap-24'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-6 h-6'/>
                                <Link to="/profil" className='text-white font-bold'>{repo.owner.login}</Link>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <span className='cursor-pointer text-white text-xl' onClick={() => closePost()}>X</span>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-white'>
                                <Link to="/profil" className='font-bold'>
                                    {repo.owner.login} 
                                </Link> 
                                {repo.description}
                            </h3>
                        </div>
                    </div>
                    <div className='flex flex-row border-b border-zinc-600 pb-2 justify-between'>
                        <div className='flex flex-row gap-2 items-center'>
                            <HeartSvg color="fill-white"/>
                            <h3 className='text-white'>{repo.stargazers_count}</h3>
                        </div>
                        <h3 className='text-white'>{ repo.created_at.split('T')[0]}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

PostModal.propTypes = {
    repo: PropTypes.object.isRequired,
    setAction: PropTypes.func.isRequired,
    action: PropTypes.bool.isRequired
  };

export default PostModal