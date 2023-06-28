import { NavLink } from "react-router-dom";
import LinkedInSvg from '../assets/LinkedIn'
import GitHubSvg from "../assets/GitHub";
import HomeSvg from "../assets/Home"
import AccountSvg from "../assets/account"
import CurriculumSvg from "../assets/couriculum"
import ExperienceSvg from "../assets/Experience"
import Notifications from "./elements/notifications"
import HireMeModal from "./modal/HireMeModal"
import PropTypes from 'prop-types';
import SearchBarModal from './modal/SearchBarModal'

function Header(props) {

    return(
        <>
        {props?.user?.data?.hireable? <HireMeModal user={props.user.data} /> : null}
        <SearchBarModal />
        <nav className='absolute bottom-0 border-t w-screen border-white flex flex-row justify-between pl-8 pr-8 pt-2 pb-2 bg-black '>
            <ul className='flex flex-row justify-center gap-4'>
              <li className="rounded transition">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'hover:bg-zinc-600 rounded flex flex-row items-center gap-2 text-white p-4')}>
                  <HomeSvg />
                  <h3 className="hidden md:block">Home</h3>
                </NavLink>
              </li>
              <li className="rounded transition">
                <NavLink to="/cv" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'hover:bg-zinc-600 rounded flex flex-row items-center gap-2 text-white p-4')}>
                  <CurriculumSvg />
                  <h3 className="hidden md:block">Cv</h3>
                  </NavLink>
              </li>
              <li className="rounded transition">
                <NavLink to="/profil" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'hover:bg-zinc-600 rounded flex flex-row items-center gap-2 text-white p-4')}>
                  <AccountSvg />
                  <h3 className="hidden md:block">Profil</h3>
                </NavLink>
              </li>
              <li className="rounded transition">
                <NavLink to="/experience" className={({ isActive }) => (isActive ? 'bg-zinc-600 flex flex-row items-center gap-2 text-white p-4 rounded' : 'hover:bg-zinc-600 rounded flex flex-row items-center gap-2 text-white p-4')}>
                  <ExperienceSvg />
                  <h3 className="hidden md:block">Experience</h3>
                </NavLink>
              </li>
            </ul>

            <ul className="flex flex-row items-center gap-4">
              <a href="https://www.linkedin.com/in/ryan-ez-zerqti-964396236/" className="hover:opacity-70 hidden md:block" target="_blank" rel="noopener noreferrer"><LinkedInSvg /></a>
              <a href="https://github.com/RyanNeTw" className="hover:opacity-70 hidden md:block" target="_blank" rel="noopener noreferrer"><GitHubSvg /></a>
              <Notifications userReceivedEvents={props.userReceivedEvents}/>
            </ul>
          </nav>
        </>
    )
}

Header.propTypes = {
  userReceivedEvents: PropTypes.array.userReceivedEvents,
  user: PropTypes.object.user
};

export default Header