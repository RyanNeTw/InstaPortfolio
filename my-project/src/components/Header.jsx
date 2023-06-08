import { NavLink } from "react-router-dom";
import LinkedIn from '../assets/LinkedIn'
import GitHubSvg from "../assets/GitHub";
import HomeSvg from "../assets/Home"
import AccountSvg from "../assets/Account"
import CurriculumSvg from "../assets/couriculum"
import ExperienceSvg from "../assets/Experience"

function Header() {


    return(
        <>
        <nav className='absolute top-0 h-screen w-40 border-r border-white flex flex-col justify-between pl-4 pr-2 pt-4 pb-4'>
            <ul className='flex flex-col justify-center gap-2'>
              <li className="hover:bg-zinc-600 rounded transition">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'flex flex-row items-center gap-2 text-white p-4')}>
                  <HomeSvg />Home
                </NavLink>
              </li>
              <li className="hover:bg-zinc-600 rounded transition">
                <NavLink to="/cv" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'flex flex-row items-center gap-2 text-white p-4')}>
                  <CurriculumSvg />CV
                  </NavLink>
              </li>
              <li className="hover:bg-zinc-600 rounded transition">
                <NavLink to="/profil" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'flex flex-row items-center gap-2 text-white p-4')}>
                  <AccountSvg />Profil
                </NavLink>
              </li>
              <li className="hover:bg-zinc-600 rounded transition">
                <NavLink to="/experience" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'flex flex-row items-center gap-2 text-white p-4')}>
                  <ExperienceSvg />Experience
                </NavLink>
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