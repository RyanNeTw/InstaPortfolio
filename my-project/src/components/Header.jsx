import { BrowserRouter as Router, Link } from "react-router-dom";
function Header() {


    return(
        <>
        <Router>
        <nav className='absolute top-0 h-screen w-32 border-r-2 border-white'>
            <ul className='flex flex-col justify-center gap-8 p-4 shadow-2xl'>
              <li>
                <Link to="/"><h3 className="text-white">Home</h3></Link>
              </li>
              <li>
                <Link to="/about"><h3 className="text-white">Mid</h3></Link>
              </li>
              <li>
                <Link to="/profil"><h3 className="text-white">Profile</h3></Link>
              </li>
            </ul>
          </nav>
      </Router>
        </>
    )
}
export default Header