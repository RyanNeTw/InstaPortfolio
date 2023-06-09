import { createContext, useEffect, useState} from "react";
import { GetRateLimit } from "../api/GetAccountInfo";
import PropTypes from 'prop-types';

export const StoreContext = createContext()

export function StoreProvider(props){

  const [rate, setRate] = useState({})
  const [hireMe, setHireMe] = useState(true)

    useEffect(()=>{
      GetRateLimit().then((data) => setRate(data))
      setTimeout(() => {
        GetRateLimit().then((data) => setRate(data))
        setHireMe(true)
    }, 100000)
    },[])

    return(
        <StoreContext.Provider value={
          {
            rate, setHireMe, hireMe
          }
        } >
            {props.children}
        </StoreContext.Provider>
    )

}

StoreProvider.propTypes = {
  children: PropTypes,
};