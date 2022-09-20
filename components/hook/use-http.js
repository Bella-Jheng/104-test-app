import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        "headers": {
          "accept": "*/*",
          "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryR6vfQeTTl5AwVC4t",
          "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site"
        },
        "referrer": "https://test-app-104.herokuapp.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit",
        "body": JSON.stringify(requestConfig.body)   
      });



      console.log(response)
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      return data;
    } catch (e) {
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
