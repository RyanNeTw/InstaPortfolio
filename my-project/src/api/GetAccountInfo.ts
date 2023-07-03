import { ConnexionType, emojiType, Follower, Following, Organisation, ReposType, UserEvents } from "../types/gitHubTypes"

type error = {
    status: boolean,
    data: {
        documentation_url: string,
        message: string
    }
}

const owner = 'RyanNeTw'

const  GetInfoAccount = async (search = owner ): Promise<{status: boolean, data: ConnexionType | error}> =>{
    const res = await fetch(`https://api.github.com/users/${search}`)
    const user = await res.json()
    return {status: res.ok ,data: user}
}

export const  GetInfoFollowers = async (search = owner): Promise<{status: boolean, data: Follower[]} | error> =>{
     const res = await fetch(`https://api.github.com/users/${search}/followers`);
     const followers = await res.json();
    return {status: res.ok ,data: followers};
}

export const  GetInfoRepos = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${search}/repos`);
    const repos = await res.json();
    return {status: res.ok ,data: repos};
}

export const  GetInfoOrga = async (search = owner): Promise<{status: boolean, data: Organisation[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${search}/orgs`);
    const organisations = await res.json();
    return {status: res.ok ,data: organisations};
}

export const  GetInfoFollowings = async (search = owner): Promise<{status: boolean, data: Following[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${search}/following`);
    const followings = await res.json();
    return {status: res.ok ,data: followings};
}

export const  GetInfoReposLiked = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${search}/starred`, );
    const reposLiked = await res.json();
    return {status: res.ok ,data: reposLiked};
}

export const  GetUserEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${search}/events`);
    const events = await res.json();
    return {status: res.ok ,data: events};
}

export const  GetUserReceivedEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(`https://api.github.com/users/${search}/received_events`);
    const events = await res.json();
    return {status: res.ok ,data: events};
}

export const  GetEmoji = async (search: string): Promise<emojiType[]> => {
    const res = await fetch(`https://emoji-api.com/emojis?search=${search}&access_key=2ccad462fb1e8e174cf78555dad536cf8490466c`);
    const emoji = await res.json();
    return emoji;
}

export default GetInfoAccount
