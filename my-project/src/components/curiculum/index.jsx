import Header from "../Header"
import CuriculumViewer from './curiculum'
import CvRyanEzZerqti2023 from '../../assets/CvRyanEzZerqti2023.pdf'
import PropTypes from 'prop-types';

function Curiculum(props) {
 
    const handleDownload = () => {
        const url = CvRyanEzZerqti2023; 
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CvRyanEzZerqti2023.pdf';
        link.click();
      };

    return(
        <>
            <div className="flex justify-center flex-col gap-8 max-h-screen pl-12  pr-12 md:pl-64 md:pr-64 items-center">
                <button className='hover:opacity-70 bg-yellow-600 font-bold pl-12 pr-12 pt-2 mt-4 pb-2 rounded' onClick={handleDownload}>
                    Download CV
                </button>
                <CuriculumViewer />
            </div>
            <Header userReceivedEvents={props.userReceivedEvents} />
        </>
    )
}

Curiculum.propTypes = {
    userReceivedEvents: PropTypes.array.userReceivedEvents
  };

export default Curiculum