import { ConnexionType, emojiType, Follower, Following, Organisation, RateLimit, ReposType, UserEvents } from "../types/gitHubTypes"
import axios from 'axios'

type error = {
    status: boolean,
    data: {
        documentation_url: string,
        message: string
    }
}

const owner = 'RyanNeTw'
const url = `http://api.ryantw.net/api/`

const header = {
    "Access-Control-Allow-Origin": "http://api.ryantw.net",
    "Content-Type": "application/json",
}

const  GetInfoAccount = async (search = owner ): Promise<{status: boolean, data: ConnexionType | error}> =>{
    const res = await fetch(url + `${search}`, {headers: header, mode: "cors"})
    const user = await res.json()
    return {status: res.ok ,data: user.data}
}

export const  GetInfoFollowers = async (search = owner): Promise<{status: boolean, data: Follower[]} | error> =>{
     const res = await fetch(url + `${search}/followers`, {headers: header, mode: "cors"});
     const followers = await res.json();
    return {status: res.ok ,data: followers.data.data};
}

export const  GetInfoRepos = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(url + `${search}/repos`, {headers: header,  mode: "cors"});
    const repos = await res.json();
    return {status: res.ok ,data: repos.data};
}

export const  GetInfoOrga = async (search = owner): Promise<{status: boolean, data: Organisation[]}| error> => {
    const res = await fetch(url + `${search}/orgs`, {headers: header,  mode: "cors"});
    const organisations = await res.json();
    return {status: res.ok ,data: organisations.data.data};
}

export const  GetInfoFollowings = async (search = owner): Promise<{status: boolean, data: Following[]}| error> => {
    const res = await fetch(url + `${search}/followings`, {headers: header,  mode: "cors"});
    const followings = await res.json();
    return {status: res.ok ,data: followings.data.data};
}

export const  GetInfoReposLiked = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(url + `${search}/reposLiked`, {headers: header,  mode: "cors"});
    const reposLiked = await res.json();
    return {status: res.ok ,data: reposLiked.data.data};
}

export const  GetUserEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(url + `${search}/userEvents`, {headers: header,  mode: "cors"});
    const events = await res.json();
    return {status: res.ok ,data: events.data.data};
}

export const  GetUserReceivedEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(url +  `${search}/userReceivedEvents`, {headers: header,  mode: "cors"});
    const events = await res.json();
    return {status: res.ok ,data: events.data};
}

export const  GetRateLimit = async (search = owner): Promise<RateLimit> => {
    const res = await fetch(url + `${search}/rate`, {headers: header,  mode: "cors"});
    const rateLimit = await res.json();
    return rateLimit;
}


export const  GetEmoji = async (search: string): Promise<emojiType[]> => {
    const res = await fetch(url + `emoji/${search}`, {headers: header,  mode: "cors"});
    const emoji = await res.json();
    return emoji.data;
}

export default GetInfoAccount
