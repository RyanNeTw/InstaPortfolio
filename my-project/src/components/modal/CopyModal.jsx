import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function CopyModal(props){

    const [copied, setCopied] = useState(false)
    const currentURL = window.location.href;
    function closeModal() {
        props.setAction(!props.action)
    }

    function copyLink(link) {
        navigator.clipboard.writeText(link)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
          }, 300);
    }

    if(props.repo.html_url === "CvRyanEzZerqti2023Image.png") {
        const url = currentURL + "cv"
        return(
            <>
            <div className='bg-black opacity-80 absolute z-10 w-screen h-screen top-0' onClick={() => closeModal()} ></div>
            <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-lg flex flex-col items-center">
                {
                    copied ? (
                        <h3 className="text-white border-b border-zinc-600 opacity-50 pt-4 pb-4 pl-24 pr-24 cursor-pointer">
                            Copied
                        </h3>
                    ) : (
                        <h3 className="text-white border-b border-zinc-600 pt-4 pb-4 pl-24 pr-24 cursor-pointer hover:opacity-70 whitespace-nowrap" onClick={() => copyLink(url)}>
                            Copy link
                        </h3>
                    )
                }
                <Link to="/cv" >
                    <h3 className="text-white border-b border-zinc-600 pt-4 pb-4 pl-24 pr-24 cursor-pointer hover:opacity-70" onClick={() => closeModal()}>Go to link</h3>
                </Link>
                <h3 className="text-white pt-4 pb-4 pl-24 pr-24 cursor-pointer hover:opacity-70" onClick={() => closeModal()}>Cancel</h3>
            </div>
        </>
        )
    }

    return(
        <>
            <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-lg flex flex-col items-center">
                {
                    copied ? (
                        <h3 className="text-white border-b border-zinc-600 opacity-50 pt-4 pb-4 pl-24 pr-24 cursor-pointer whitespace-nowrap" onClick={() => copyLink(props.repo.html_url)}>
                            Copied
                        </h3>
                    ) : (
                        <h3 className="text-white border-b hover:opacity-60  border-zinc-600 pt-4 pb-4 pl-24 pr-24 cursor-pointer whitespace-nowrap" onClick={() => copyLink(props.repo.html_url)}>
                            Copy link
                        </h3>
                    )
                }
                <a href={props?.repo?.html_url} target="_blank" rel="noopener noreferrer" >
                    <h3 className="text-white hover:opacity-60 border-b border-zinc-600 pt-4 pb-4 pl-24 pr-24 cursor-pointer whitespace-nowrap" onClick={() => closeModal()}>Go to link</h3>
                </a>
                <h3 className="text-white hover:opacity-60  pt-4 pb-4 pl-24 pr-24 cursor-pointer" onClick={() => closeModal()}>Cancel</h3>
            </div>
            <div className='bg-black opacity-80 z-10 absolute w-screen h-screen top-0' onClick={() => closeModal()} ></div>
        </>
    )
}

CopyModal.propTypes = {
    repo: PropTypes.object.isRequired,
    setAction: PropTypes.func.isRequired,
    action: PropTypes.bool.isRequired
  };

export default CopyModal