import React, { useEffect } from 'react';
import axios from 'axios'
function usePost(data,url) {
    const [responseData, setResponseData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        let start = true;
        setIsLoading(true)
             axios.post(url, data)
                 .then((res) => setResponseData(res.data))
                 .then(()=>setIsLoading(true))
                 .catch(err => {
                     setError(err.message)
                     setIsLoading(false)
                 })
        
            return ()=> start = false ;
    },[url,data])
   return [
        responseData,isLoading,error
    ]
}



export default usePost;