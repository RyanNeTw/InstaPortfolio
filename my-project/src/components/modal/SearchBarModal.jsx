import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function SearchBarModal() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleKeyDown(event) {
        if ( event.key === 'Enter') {
            navigate("/profil/" + search)
        }
    }

    return(
        <>
        <div className="w-full rounded-lg flex flex-row justify-between items-center gap-4">   
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-black border border-white text-white text-sm rounded-lg focus:black block w-full pl-10 p-2.5" placeholder="Search for a user" required onChange={handleChange} onKeyDown={handleKeyDown} />
            </div>
            <Link to={`/profil/${search}`} type="submit" className="p-2.5 text-sm font-medium text-white rounded-lg border border-white hover:opacity-70 focus:ring-4 focus:outline-none bg-black">
                <svg className="w-5 h-5 fill-white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only text-white">Search</span>
            </Link>
        </div>
        </>
    )
}

export default SearchBarModal