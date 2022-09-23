import { useState, useCallback } from "react";



const getActivatePreparativePageHtml = (body) => {
  return new Promise((resolve, reject) => {
    try {

      const xhr = new XMLHttpRequest();
      xhr.open("post", "http://localhost:4444/api/activate/preparative")
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.addEventListener("load", function(e) {
        const pageHtml = e.currentTarget.responseText
        resolve(pageHtml)
      }); 
      xhr.send(body)
    }catch(error) {
      reject(error)
    }
  })
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
//       const response = await fetch('http://localhost:4444/api/activate/preparative', {
//         headers: {
          
//           "content-type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(requestConfig.body),
//       })
// console.log(response)
      const pageHtml = await getActivatePreparativePageHtml(JSON.stringify(requestConfig.body))
      return pageHtml
    } catch (e) {
      console.log(e)
      setError(e || "Fail to send request");
      //里大哥回傳的error code
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
