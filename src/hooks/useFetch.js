import { useCallback } from "react";
import { useEffect, useState } from "react";

function useFetch(url, onLoad) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
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
