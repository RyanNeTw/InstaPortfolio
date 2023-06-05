import Header from "../Header"
import CuriculumViewer from './curiculum'
import CvRyanEzZerqti2023 from '../../assets/CvRyanEzZerqti2023.pdf'

function Curiculum() {
 
    const handleDownload = () => {
        const url = CvRyanEzZerqti2023; 
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CvRyanEzZerqti2023.pdf';
        link.click();
      };

    return(
        <>
            <div className="flex justify-center flex-col gap-24 h-screen items-center">
                <button className='mt-8 hover:opacity-70 bg-zinc-600 text-white pl-12 pr-12 pt-2 pb-2 rounded' onClick={handleDownload}>
                    Télécharger CV
                </button>
                <CuriculumViewer />
            </div>
            <Header />
        </>
    )
}


export default Curiculum