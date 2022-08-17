import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      //Return a promises
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
// In this example we have used Custom hook with the help of custom hook "useFetch"
/// Next we will move into the UseEffectApi Component to extract component logic into reusable functions
