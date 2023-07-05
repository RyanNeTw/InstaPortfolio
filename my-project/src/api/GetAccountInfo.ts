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
    "Access-Control-Allow-Origin": "*"
}


const  GetInfoAccount = async (search = owner ): Promise<{status: boolean, data: ConnexionType | error}> =>{
    const res = await fetch(url + `${search}`, {headers: header})
    const user = await res.json()
    return {status: res.ok ,data: user.data}
}

export const  GetInfoFollowers = async (search = owner): Promise<{status: boolean, data: Follower[]} | error> =>{
     const res = await fetch(url + `${search}/followers`, {headers: header});
     const followers = await res.json();
    return {status: res.ok ,data: followers.data.data};
}

export const  GetInfoRepos = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(url + `${search}/repos`, {headers: header});
    const repos = await res.json();
    return {status: res.ok ,data: repos.data};
}

export const  GetInfoOrga = async (search = owner): Promise<{status: boolean, data: Organisation[]}| error> => {
    const res = await fetch(url + `${search}/orgs`, {headers: header});
    const organisations = await res.json();
    return {status: res.ok ,data: organisations.data.data};
}

export const  GetInfoFollowings = async (search = owner): Promise<{status: boolean, data: Following[]}| error> => {
    const res = await fetch(url + `${search}/followings`, {headers: header});
    const followings = await res.json();
    return {status: res.ok ,data: followings.data.data};
}

export const  GetInfoReposLiked = async (search = owner): Promise<{status: boolean, data: ReposType[]}| error> => {
    const res = await fetch(url + `${search}/reposLiked`, {headers: header});
    const reposLiked = await res.json();
    return {status: res.ok ,data: reposLiked.data.data};
}

export const  GetUserEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(url + `${search}/userEvents`, {headers: header});
    const events = await res.json();
    return {status: res.ok ,data: events.data.data};
}

export const  GetUserReceivedEvents = async (search = owner): Promise<{status: boolean, data: UserEvents[]}| error> => {
    const res = await fetch(url +  `${search}/userReceivedEvents`, {headers: header});
    const events = await res.json();
    return {status: res.ok ,data: events.data};
}

export const  GetRateLimit = async (search = owner): Promise<RateLimit> => {
    const res = await fetch(url + `${search}/rate`, {headers: header});
    const rateLimit = await res.json();
    return rateLimit;
}


export const  GetEmoji = async (search: string): Promise<emojiType[]> => {
    const res = await fetch(url + `emoji/${search}`, {headers: header});
    const emoji = await res.json();
    return emoji.data;
}

export default GetInfoAccount
