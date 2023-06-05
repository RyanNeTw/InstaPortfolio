import { ConnexionType, Follower, ReposType } from "../types/gitHubTypes"

type error = {
    status: boolean,
    data: {
        documentation_url: string,
        message: string
    }
}

const  GetInfoAccount = async (): Promise<ConnexionType | error> =>{
    const res = await fetch("https://api.github.com/users/RyanNeTw")
    const user = await res.json()
    if(!res.ok) {
        return {status: res.ok, data: user}
    }
    return user
}

export const  GetInfoFollowers = async (): Promise<Follower[] | error> =>{
     const res = await fetch("https://api.github.com/users/RyanNeTw/followers");
     const followers = await res.json();
     if(!res.ok) {
        return {status: res.ok, data: followers}
    }
    return followers;
}

export const  GetInfoRepos = async (): Promise<ReposType[] | error> => {
    const res = await fetch("https://api.github.com/users/RyanNeTw/repos");
    const repos = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: repos}
    }
    return repos
}


export default GetInfoAccount
