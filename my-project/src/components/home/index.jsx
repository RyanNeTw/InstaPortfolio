import PropTypes from 'prop-types';
import Header from "../Header"
import DotsSvg from '../../assets/Dots';
import { useState } from 'react';
import CopyModal from '../modal/CopyModal'
import HeartSvg from '../../assets/Heart';
import Suggestions from './Suggestions'
import PostModal from '../modal/PostModal'
import CvRyanEzZerqti2023Image from '../../assets/CvRyanEzZerqti2023Image.png'
import ProfilPicture from '../elements/profilPicture';

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


    //<img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-6 h-6'/>
    return(
        <>
            { closeModal ? <CopyModal setAction={setCloseModal} action={closeModal} repo={repoData} /> : null}
            { closeImageModal ? <PostModal setAction={setCloseImageModal} action={closeImageModal} repo={repoData} /> : null}
            <div className="flex justify-between flex-col-reverse gap-4 md:gap-4 md:flex-row max-h-screen w-screen md:pl-[20%] md:pr-[20%] ">
                <div className='flex flex-col items-center gap-12 overflow-scroll pb-44 md:pb-52 pt-12'>
                { repos ?
                    repos.map((repo, index) => {
                        const pdf = {
                            html_url: "CvRyanEzZerqti2023Image.png"
                        }
                        if((index) % 4 === 0 && index != 0) {
                                const cvRepo = {
                                    owner: {
                                        avatar_url: repo.owner.avatar_url,
                                        login: repo.owner.login
                                    },
                                    topics: ["CvRyanEzZerqti2023Image"],
                                    description: "Bonjour a vous ! C'est mon Cv, il est beau hein ?",
                                    stargazers_count: 45,
                                    created_at: "2023-04-02T04"

                                }
                            return(
                                <div key={index} className="shadow-sm shadow-yellow-400 hover:shadow-md hover:shadow-yellow-400">
                                    <div className="w-96 flex flex-col justify-center gap-4">
                                        <div className='flex flex-row justify-between items-center'>
                                            <div className='flex flex-row items-center gap-2'>
                                                <ProfilPicture user={props.user.data} userEvents={props.userEvents.data} width={'w-8'} height={'w-8'} />
                                                <h3 className='text-white font-bold'>{repo.owner.login}</h3>
                                                <h5 className='text-sm text-white'> 2023-04-02</h5>
                                            </div>
                                            <span className='cursor-pointer' onClick={()=>CloseModal(pdf)}>
                                                <DotsSvg color={"fill-white"} />
                                            </span>
                                        </div>
                                        <div className='flex justify-center'>
                                            <img src={CvRyanEzZerqti2023Image} alt="Cv Ryan Ez Zerqti" className='cursor-pointer overflow-auto h-72 md:h-96 self-center' onClick={() => closeImageModalFunction(cvRepo)}/>
                                        </div>
                                        <div>
                                            <div>
                                                <div className='flex flex-row gap-2 items-center'>
                                                    <HeartSvg color={"fill-white"} />
                                                    <h3 className='text-white'>45</h3>
                                                </div>
                                            </div>
                                            <div className='flex flex-row gap-2 items-center pb-2'>
                                                <h3 className='text-white text-sm font-bold'>{repo.owner.login} :</h3>
                                                <h3 className='text-white text-sm'>Bonjour a vous !</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        const imageUrl = repo.topics[0] + '.png'
                        return(
                            <div key={index} className="flex flex-col justify-center gap-4 shadow-sm shadow-yellow-400 hover:shadow-md hover:shadow-yellow-400">
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <ProfilPicture user={props.user.data} userEvents={props.userEvents.data} width={'w-8'} height={'w-8'} />
                                        <h3 className='text-white font-bold'>{repo.owner.login}</h3>
                                        <h5 className='text-sm text-white'> {  repo.created_at.split('T')[0]}</h5>
                                    </div>
                                    <span className='cursor-pointer' onClick={()=>CloseModal(repo)}>
                                        <DotsSvg color={"fill-white"} />
                                    </span>
                                </div>
                                {
                                    !repo.topics[0] ?
                                        <div className='w-72 h-72 md:w-96 md:h-96 bg-zinc-800 cursor-pointe self-center' onClick={() => closeImageModalFunction(repo)}></div>
                                    :
                                        <div className='cursor-pointer w-72 h-72  md:w-96 md:h-96 self-center' onClick={() => closeImageModalFunction(repo)} style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                                }
                                <div>
                                    <div>
                                        <div className='flex flex-row gap-2 items-center'>
                                            <HeartSvg color={"fill-white"} />
                                            <h3 className='text-white'>{ repo.stargazers_count}</h3>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center pb-2'>
                                        <h3 className='text-white text-sm font-bold'>{repo.owner.login} :</h3>
                                        <h3 className='text-white text-sm'>{repo.name}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }
                </div>
                <Suggestions user={props.user.data} followings={props.followings.data} userEvents={props.userEvents.data} />
            </div>
            <Header userReceivedEvents={props.userReceivedEvents} user={props.user} />
        </>
    )
}

Home.propTypes = {
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    organisation: PropTypes.array.isRequired,
    followings: PropTypes.array.isRequired,
    userEvents: PropTypes.array.isRequired,
    userReceivedEvents: PropTypes.array.userReceivedEvents
  };

export default Home