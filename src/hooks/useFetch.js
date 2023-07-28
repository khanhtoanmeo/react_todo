import { useCallback } from "react";
import { useEffect, useState } from "react";

function useFetch(url, onLoad) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    //todo: đoạn này mình áp dụng luôn fetchData có sẵn có được không ?
    const response = await fetch(url);
    const data = await response.json();
    setResult(data);
    console.log(data);
    if (data.data) {
      onLoad(data.data);
    }
    setLoading(false);
  }, [url, onLoad]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { result, loading };
}

export default useFetch;
