import PropTypes from 'prop-types';
import HeartSvg from '../../assets/Heart'
import DotsSvg from '../../assets/Dots'
import { useState } from 'react';
import CopyModal from '../modal/CopyModal';
import { Link } from 'react-router-dom'

function Repos(props) {
    const repos = props.repos.data
    const [closeModal, setCloseModal] = useState(false)
    const [repoData, setRepoData] = useState(null)
    const [closeImageModal, setCloseImageModal] = useState(false)

    function CloseModal(repo){
        setRepoData(repo)
        setCloseModal(!closeModal)
    }

    function closeImageModalFunction(repo) {
        setRepoData(repo)
        setCloseImageModal(!closeImageModal)
    }

    return(
        <>
            { closeModal ? <CopyModal setAction={setCloseModal} action={closeModal} repo={repoData} /> : null}
            <div  className="pl-36 flex flex-col justify-center items-center w-4/5">
                <h1 className="w-4/5 h-px bg-white mb-4"></h1>
                <div className=''>
                    <div className='overflow-auto height flex flex-wrap justify-center'>
                        {
                            repos ? repos.map((repo, index) => {
                                const imageUrl = repo.topics[0] + '.png'
                                return(
                                    <div key={index} className="m-4 inline-block max-w-64 p-4 rounded-2xl flex flex-col gap-2">
                                        <div className='flex flex-row justify-between items-center gap-2 border-b border-black'>
                                            <div className='flex flex-row items-center gap-2'>
                                                <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-8 h-8'/>
                                                <Link className='text-white cursor-pointer'>{repo.owner.login} </Link>
                                            </div>
                                            <span className='cursor-pointer' onClick={()=>CloseModal(repo)}>
                                                <DotsSvg color={"fill-white"} />
                                            </span>
                                        </div>
                                        {
                                            !repo.topics[0] ?
                                                <div className='w-72 h-64 bg-zinc-800 flex justify-center items-center' onClick={() => closeImageModalFunction(repo)}>
                                                    <h3 className='text-white'>Not foto</h3>
                                                </div>
                                            :
                                                <div className='cursor-pointer' onClick={() => closeImageModalFunction(repo)} style={{ backgroundImage: `url(${imageUrl})`, width: '18rem', height: '16rem', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                                        }
                                        <div className='flex flex-row items-center justify-between'>
                                            <div>
                                                <a href={repo.html_url} className="w-32 h-32 bg-white" target="_blank" rel="noopener noreferrer"> 
                                                    <h3 className='text-white'>{repo.name}</h3>
                                                </a>
                                                <h5 className='text-xs text-white'>{ repo.created_at.split('T')[0]}</h5>
                                            </div>
                                            <div className='flex flex-row items-center gap-2'>
                                                <HeartSvg color="fill-white"/>
                                                <h4 className='text-white'>{ repo.stargazers_count}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
  };

export default Repos