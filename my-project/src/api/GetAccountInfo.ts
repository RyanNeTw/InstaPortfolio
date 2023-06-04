import { ConnexionType, ReposType } from "../types/gitHubTypes"

function GetInfoAccount(): {status: number, data: Promise<ConnexionType>}{
    const res = fetch('https://api.github.com/users/RyanNeTw', { method: 'GET' })
    .then((response) => response.json())
    .then((json: ConnexionType) => { 
        return json
    })

    return {status: 200, data: res}

}

export function GetInfoRepos(): {status: number, data: Promise<ReposType>}{
    const res = fetch('https://api.github.com/users/RyanNeTw/repos', { method: 'GET' })
    .then((response) => response.json())
    .then((json: ReposType) => { 
        return json
    })

    return {status: 200, data: res}

}


export default GetInfoAccount