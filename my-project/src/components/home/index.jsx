import PropTypes from 'prop-types';
import Header from "../Header"
import DotsSvg from '../../assets/Dots';
import { useState } from 'react';
import CopyModal from '../modal/CopyModal'
import HeartSvg from '../../assets/Heart';
import Suggestions from './Suggestions'
import PostModal from '../modal/PostModal'
import CvRyanEzZerqti2023Image from '../../assets/CvRyanEzZerqti2023Image.png'

function Home(props) {
    const repos = props.repos.data
    const [closeModal, setCloseModal] = useState(false)
    const [closeImageModal, setCloseImageModal] = useState(false)
    const [repoData, setRepoData] = useState(null)

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
            { closeImageModal ? <PostModal setAction={setCloseImageModal} action={closeImageModal} repo={repoData} /> : null}
            <div className="flex justify-center flex-row gap-24 h-screen">
                <div className='flex flex-col items-center gap-12 overflow-scroll p-12'>
                { repos ?
                    repos.map((repo, index) => {
                        const pdf = {
                            html_url: "CvRyanEzZerqti2023Image.png"
                        }
                        if((index + 1) % 4 === 0 && index != 0) {
                            return(
                                <div key={index}>
                                    <div className="w-96 flex flex-col justify-center gap-4">
                                        <div className='flex flex-row justify-between items-center'>
                                            <div className='flex flex-row items-center gap-2'>
                                                <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-6 h-6'/>
                                                <h3 className='text-white font-bold'>{repo.owner.login}</h3>
                                                <h5 className='text-sm text-white self-end'> 2023-04-02</h5>
                                            </div>
                                            <span className='cursor-pointer' onClick={()=>CloseModal(pdf)}>
                                                <DotsSvg color={"fill-white"} />
                                            </span>
                                        </div>
                                        <div className='flex justify-center'>
                                            <img src={CvRyanEzZerqti2023Image} alt="Cv Ryan Ez Zerqti" className='overflow-auto h-96' onClick={() => closeImageModalFunction(repo)}/>
                                        </div>
                                        <div>
                                            <div>
                                                <div className='flex flex-row gap-2 items-center'>
                                                    <HeartSvg color={"fill-white"} />
                                                    <h3 className='text-white'>45</h3>
                                                </div>
                                            </div>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <h3 className='text-white text-sm font-bold'>{repo.owner.login} :</h3>
                                                <h3 className='text-white text-sm'>Bonjour a vous !</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        return(
                            <div key={index} className="w-96 flex flex-col justify-center gap-4">
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-6 h-6'/>
                                        <h3 className='text-white font-bold'>{repo.owner.login}</h3>
                                        <h5 className='text-sm text-white self-end'> {  repo.created_at.split('T')[0]}</h5>
                                    </div>
                                    <span className='cursor-pointer' onClick={()=>CloseModal(repo)}>
                                        <DotsSvg color={"fill-white"} />
                                    </span>
                                </div>
                                <div className='w-100 h-96 bg-white' onClick={() => closeImageModalFunction(repo)}></div>
                                <div>
                                    <div>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <HeartSvg color={"fill-white"} />
                                            <h3 className='text-white'>{ repo.stargazers_count}</h3>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <h3 className='text-white text-sm font-bold'>{repo.owner.login} :</h3>
                                        <h3 className='text-white text-sm'>{repo.name}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }
                </div>
                <Suggestions user={props.user.data} followings={props.followings.data}  />
            </div>
            <Header />
        </>
    )
}

Home.propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    organisation: PropTypes.array.isRequired,
    followings: PropTypes.array.isRequired,
  };

export default Home