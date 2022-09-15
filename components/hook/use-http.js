import { useState,useCallback } from "react";

const useHttp=()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] =useState(null);

    const sendRequest =useCallback(async(requestConfig)=>{
        setIsLoading(true)
        setError(null)
        try{

            const response = await fetch(requestConfig.url,{
                method: requestConfig.method?'POST':'GET',
                headers: requestConfig.headers?requestConfig.headers:{},
                body: JSON.stringify(requestConfig.body)?JSON.stringify(requestConfig.body):null,
            })

            if(!response.ok){
                throw new Error('Request failed!')
            }

            const data = await response.json();
            return data

        }catch(e){
            setError(e || 'Fail to send request')
            //里大哥回傳的error code
        }
        setIsLoading(false)
    },[])

    return{
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;