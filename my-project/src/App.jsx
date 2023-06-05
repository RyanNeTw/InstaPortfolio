import GetInfoAccount from './api/GetAccountInfo'
import { GetInfoRepos, GetInfoFollowers } from './api/GetAccountInfo'
import ProfilPage from './components/profilPage'
import Home from './components/home'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {

  const [ user, setUser ] = useState(null);
  const [ followers, setFollowers ] = useState([]);
  const [ repos, setRepos ] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    if(!isLoaded) {
      GetInfoAccount().then((data) => setUser(data));
      GetInfoFollowers().then((data) => setFollowers(data));
      GetInfoRepos().then((data) => setRepos(data));
      setIsLoaded(true)
    }
  }, [isLoaded])

if(!user.status) {
  return(
    <Loader user={user} repos={repos} />
  )
}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/profil" element={<ProfilPage user={user} repos={repos} followers={followers}/>}></Route> 
        <Route path="/" element={<Home user={user} repos={repos} />}></Route> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
