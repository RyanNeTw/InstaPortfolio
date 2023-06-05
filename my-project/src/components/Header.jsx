import { Link } from "react-router-dom";
import LinkedIn from '../assets/LinkedIn'
import GitHubSvg from "../assets/GitHub";
import HomeSvg from "../assets/Home"
import AccountSvg from "../assets/Account"
import CurriculumSvg from "../assets/couriculum"
import ExperienceSvg from "../assets/Experience"

function Header() {


    return(
        <>
        <nav className='absolute top-0 h-screen w-40 border-r border-white bg-zinc-950 flex flex-col justify-between pl-4 pr-2 pt-4 pb-4'>
            <ul className='flex flex-col justify-center'>
              <li className="hover:bg-zinc-600 rounded transition">
                <Link to="/"><h3 className="text-white p-4 flex flex-row items-center gap-2"><HomeSvg />Home</h3></Link>
              </li>
              <li className="hover:bg-zinc-600 rounded transition">
                <Link to="/cv"><h3 className="text-white p-4 flex flex-row items-center gap-2"><CurriculumSvg />CV</h3></Link>
              </li>
              <li className="hover:bg-zinc-600 rounded transition">
                <Link to="/profil"><h3 className="text-white p-4 flex flex-row items-center gap-2"><AccountSvg />Profil</h3></Link>
              </li>
              <li className="hover:bg-zinc-600 rounded transition">
                <Link to="/experience"><h3 className="text-white p-4 flex flex-row items-center gap-2"><ExperienceSvg />Experience</h3></Link>
              </li>
            </ul>

            <ul className="flex flex-col items-center gap-2">
              <a href="https://www.linkedin.com/in/ryan-ez-zerqti-964396236/" className="hover:opacity-70" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              <a href="https://github.com/RyanNeTw" className="hover:opacity-70" target="_blank" rel="noopener noreferrer"><GitHubSvg /></a>
            </ul>
          </nav>
        </>
    )
}
export default Header