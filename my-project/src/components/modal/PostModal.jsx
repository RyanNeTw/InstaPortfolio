import PropTypes from 'prop-types';
import CopyModal from './CopyModal';
import { useState } from 'react';
import DotsSvg from '../../assets/Dots';
import HeartSvg from '../../assets/Heart';

function PostModal(props) {

    const repo = props.repo

    const [closeModal, setCloseModal] = useState(false)

    function closePost() {
        props.setAction(!props.action)
    }

    function CloseModalFunction(){
        console.log(closeModal)
        setCloseModal(!closeModal)
        console.log(closeModal)
    }
    return(
        <>
            { closeModal ? <CopyModal repo={repo} setAction={setCloseModal()} action={closeModal} /> : null}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-lg flex flex-row'>
                <div className='w-100 h-96 bg-white'></div>
                <div className='p-4 flex flex-col gap-4 justify-between' >
                    <div className='border-b border-zinc-600 flex flex-row justify-between items-center gap-24'>
                        <div className='flex flex-row gap-2 items-center'>
                            <img src={repo.owner.avatar_url} alt={repo.owner.avatar_url} className='rounded-full w-6 h-6'/>
                            <h3 className='text-white font-bold'>{repo.owner.login}</h3>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='cursor-pointer' onClick={() => CloseModalFunction()}>
                                <DotsSvg color="fill-white"/>
                            </span>
                            <span className='cursor-pointer text-white text-xl' onClick={() => closePost()}>X</span>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white'>{repo.description}</h3>
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