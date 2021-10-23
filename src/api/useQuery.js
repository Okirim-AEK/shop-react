import { useState,useEffect } from "react";
import axios from 'axios'

function useQuery(url) {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

 
 // JSON.stringify(object)
//JSON.parse(string)
    
 // component did mount   
    useEffect(() => {
       setIsLoading(true)
       axios.get(url)
           .then(res => setData(res.data))
           .then(()=>setIsLoading(false))
            .catch(err =>setError(err.message))
            .then(()=>setIsLoading(false))

    }, [url])

    return [
        data,
        isLoading,
        error
    ]
}


export default useQuery;