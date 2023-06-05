import GetInfoAccount from './api/GetAccountInfo'
import { GetInfoRepos, GetInfoFollowers, GetInfoOrga, GetInfoFollowings, GetInfoReposLiked } from './api/GetAccountInfo'
import ProfilPage from './components/profilPage'
import Home from './components/home'
import Curiculum from "./components/curiculum"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loader from './components/Loader';
import Experience from './components/experience'
import { useEffect, useState } from 'react';

function App() {

  const [ user, setUser ] = useState(null);
  const [ followers, setFollowers ] = useState([]);
  const [ repos, setRepos ] = useState([]);
  const [organisation, setOrganisation] = useState([])
  const [followings, setFollowings] = useState([])
  const [reposLiked, setReposLiked] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    if(!isLoaded) {
      GetInfoAccount().then((data) => setUser(data));
      GetInfoFollowers().then((data) => setFollowers(data));
      GetInfoRepos().then((data) => setRepos(data));
      GetInfoOrga().then((data) => setOrganisation(data));
      GetInfoFollowings().then((data) => setFollowings(data));
      GetInfoReposLiked().then((data) => setReposLiked(data))
      setIsLoaded(true)
    }
  }, [isLoaded])

if(!user || !user.status) {
  return(
    <Loader user={user} repos={repos} />
  )
}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/profil" element={<ProfilPage user={user} repos={repos} followers={followers} organisation={organisation} followings={followings} reposLiked={reposLiked}/>}></Route> 
        <Route path="/" element={<Home user={user} repos={repos} followers={followers} organisation={organisation} followings={followings}/>}></Route>
        <Route path="/cv" element={<Curiculum />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
