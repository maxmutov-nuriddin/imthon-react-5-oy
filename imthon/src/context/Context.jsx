import { createContext, useEffect, useState } from "react";

import axios from 'axios'



export const FetchContext = createContext();

export const CountryProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/playlist/videos/",
    params: { id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": "5cdd7cc66cmshb83fa512bbe8256p18e85ejsn4288a68bf2a5",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data.contents);
      
      }).catch(function (error) {
        console.error(error);
      })
  }, []);

  return (
    <FetchContext.Provider value={{data}}>
      {children}
    </FetchContext.Provider>
  )
}






