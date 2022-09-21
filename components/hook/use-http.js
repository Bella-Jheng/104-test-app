import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
    //   const response = await fetch(requestConfig.url, {
    //     "headers": {
    //       "accept": "application/json",
    //       "content-type": "application/json",
    //       "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    //       "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
    //       "sec-ch-ua-mobile": "?0",
    //       "sec-ch-ua-platform": "\"macOS\"",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "cross-site"
    //     },
    //     "referrer": "https://test-app-104.herokuapp.com/",
    //     "referrerPolicy": "strict-origin-when-cross-origin",
    //     "method": "POST",
    //     "mode": "cors",
    //     "credentials": "omit",
    //     "body": JSON.stringify(requestConfig.body)
    //   });

    // console.log(requestConfig.body);

    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "activate": {
    "familyName": "陳",
    "firstName": "123",
    "cellphone": "0912345678",
    "identity": "N225535071",
    "identityType": 0,
    "birthYear": "1999",
    "birthMonth": 22,
    "birthDate": 2,
    "sex": 0,
    "edm": true,
    "password": "123qwe",
    "email": "tingru01@104.com.tw"
  },
  "info": {
    "bio": "xxx"
  },
  "education": {},
  "experience": {
    "companyName": "104人力銀行"
  },
  "jobCondition": {
    "preferJobTitle": "前端工程師",
    "preferJobContent": "zzzzz"
  }
});

var form_data = new FormData();

var item = requestConfig.body
console.log(item)
for ( var key in item ) {
    form_data.append(key, item[key]);
}

const formData = new FormData();
    Object.keys(item).forEach(key => formData.append(key, item[key]));

var form_data = new FormData();
for ( var key in item ) {
    form_data.append(key, item[key]);
}

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formData,
  redirect: 'follow'
};

const response = await fetch("https://pda.104-dev.com.tw/activate/preparative", requestOptions)
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));

s
      // console.log(response)
      // if (!response.ok) {
      //   throw new Error("Request failed!");
      // }

      // const data = await response.json();
      // return data;
      return response
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
