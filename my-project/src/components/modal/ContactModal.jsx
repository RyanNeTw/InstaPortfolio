import LinkedInSvg from "../../assets/LinkedIn"
import GitHubSvg from '../../assets/GitHub'
import PropTypes from 'prop-types';

function ContactModal (props) {

    function closeModal() {
        props.setAction(!props.action)
    }

    return(
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 rounded-lg flex flex-col items-center">
                <div className="flex flex-row justify-center gap-24 border-b border-zinc-600">
                    <h3 className="text-white pt-2 pb-2 pl-4 pr-4">Contact me</h3>
                    <h3 className="text-white pt-2 pb-2 pl-4 pr-4 cursor-pointer" onClick={() => closeModal()}>X</h3>
                </div>
                <div className="p-4 flex flex-row gap-4">
                    <a href="https://www.linkedin.com/in/ryan-ez-zerqti-964396236/" className="hover:opacity-70" target="_blank" rel="noopener noreferrer">
                        <LinkedInSvg />
                    </a>
                    <a href="https://github.com/RyanNeTw" className="hover:opacity-70" target="_blank" rel="noopener noreferrer">
                        <GitHubSvg />
                    </a>
                </div>
            </div>
        </>
    )
}

ContactModal.propTypes = {
    setAction: PropTypes.func.isRequired,
    action: PropTypes.bool.isRequired
  };

export default ContactModal