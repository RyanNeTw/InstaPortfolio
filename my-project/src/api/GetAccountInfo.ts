import { ConnexionType, Follower, Following, Organisation, ReposType, UserEvents } from "../types/gitHubTypes"

type error = {
    status: boolean,
    data: {
        documentation_url: string,
        message: string
    }
}

const owner = 'RyanNeTw'

const  GetInfoAccount = async (search = owner ): Promise<{status: boolean, data: ConnexionType | error}> =>{
    const res = await fetch(`https://api.github.com/users/${owner}`)
    const user = await res.json()
    return {status: res.ok ,data: user}
}

export const  GetInfoFollowers = async (search = owner): Promise<{status: boolean, data: Follower[]} | error> =>{
     const res = await fetch(`https://api.github.com/users/${owner}/followers`);
     const followers = await res.json();
    return {status: res.ok ,data: followers};
}

export const  GetInfoRepos = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${owner}/repos`);
    const repos = await res.json();
    return {status: res.ok ,data: repos};
}

export const  GetInfoOrga = async (search = owner): Promise<{status: boolean, data: Organisation[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${owner}/orgs`);
    const organisations = await res.json();
    return {status: res.ok ,data: organisations};
}

export const  GetInfoFollowings = async (search = owner): Promise<{status: boolean, data: Following[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${owner}/following`);
    const followings = await res.json();
    return {status: res.ok ,data: followings};
}

export const  GetInfoReposLiked = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${owner}/starred`);
    const reposLiked = await res.json();
    return {status: res.ok ,data: reposLiked};
}

export const  GetUserEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${owner}/events`);
    const events = await res.json();
    return {status: res.ok ,data: events};
}

export const  GetUserReceivedEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${owner}/received_events`);
    const events = await res.json();
    return {status: res.ok ,data: events};
}

export default GetInfoAccount
