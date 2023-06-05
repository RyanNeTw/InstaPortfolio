import PropTypes from 'prop-types';
import HeartSvg from '../../assets/Heart'
import DotsSvg from '../../assets/Dots'
import { useState } from 'react';
import CopyModal from '../modal/CopyModal';

function Repos(props) {
    const repos = props.repos.data
    const [closeModal, setCloseModal] = useState(false)
    const [repoData, setRepoData] = useState(null)

    function CloseModal(repo){
        setRepoData(repo)
        setCloseModal(!closeModal)
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
                                return(
                                    <div key={index} className="bg-white m-4 inline-block max-w-64 h-96 p-4 rounded-2xl">
                                        <div className='flex flex-row justify-between items-center gap-2 border-b border-black'>
                                            <div className='flex flex-row items-center gap-2'>
                                                <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-8 h-8'/>
                                                <h4>{repo.owner.login} </h4>
                                            </div>
                                            <span className='cursor-pointer' onClick={()=>CloseModal(repo)}>
                                                <DotsSvg color={"fill-black"} />
                                            </span>
                                        </div>
                                        <div className='w-64 h-72'></div>
                                        <div className='flex flex-row items-center justify-between'>
                                            <div>
                                                <a href={repo.html_url} className="w-32 h-32 bg-white" target="_blank" rel="noopener noreferrer"> 
                                                    <h3 className=''>{repo.name}</h3>
                                                </a>
                                                <h5 className='text-xs'>{ repo.created_at.split('T')[0]}</h5>
                                            </div>
                                            <div className='flex flex-row items-center gap-2'>
                                                <HeartSvg color="fill-black"/>
                                                <h4>{ repo.stargazers_count}</h4>
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