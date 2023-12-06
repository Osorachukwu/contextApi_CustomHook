import { useState, useEffect } from "react";

const useFetch = (url) => { 
//passing the url(api)☝ as an empty pararmeter
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err)=> err.message)
  }, [url]);

  return [data];
};

export default useFetch;