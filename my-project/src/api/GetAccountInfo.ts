import { ConnexionType, Follower, Following, Organisation, ReposType, UserEvents } from "../types/gitHubTypes"

type error = {
    status: boolean,
    data: {
        documentation_url: string,
        message: string
    }
}

const  GetInfoAccount = async (): Promise<{status: boolean, data: ConnexionType} | error> =>{
    const res = await fetch("https://api.github.com/users/RyanNeTw")
    const user = await res.json()
    if(!res.ok) {
        return {status: res.ok, data: user}
    }
    return {status: res.ok ,data: user}
}

export const  GetInfoFollowers = async (): Promise<{status: boolean, data: Follower[]} | error> =>{
     const res = await fetch("https://api.github.com/users/RyanNeTw/followers");
     const followers = await res.json();
     if(!res.ok) {
        return {status: res.ok, data: followers}
    }
    return {status: res.ok ,data: followers};
}

export const  GetInfoRepos = async (): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch("https://api.github.com/users/RyanNeTw/repos");
    const repos = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: repos}
    }
    return {status: res.ok ,data: repos};
}

export const  GetInfoOrga = async (): Promise<{status: boolean, data: Organisation[]}| error> => {
    const res = await fetch("https://api.github.com/users/RyanNeTw/orgs");
    const organisations = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: organisations}
    }
    return {status: res.ok ,data: organisations};
}

export const  GetInfoFollowings = async (): Promise<{status: boolean, data: Following[]}| error> => {
    const res = await fetch("https://api.github.com/users/RyanNeTw/following");
    const followings = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: followings}
    }
    return {status: res.ok ,data: followings};
}

export const  GetInfoReposLiked = async (): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch("https://api.github.com/users/RyanNeTw/starred");
    const reposLiked = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: reposLiked}
    }
    return {status: res.ok ,data: reposLiked};
}

export const  GetUserEvents = async (): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch("https://api.github.com/users/RyanNeTw/events");
    const events = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: events}
    }
    return {status: res.ok ,data: events};
}

export const  GetUserEventsByLogin = async (login: string): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${login}/events`);
    const events = await res.json();
    if(!res.ok) {
        return {status: res.ok, data: events}
    }
    return {status: res.ok ,data: events};
}

export default GetInfoAccount
