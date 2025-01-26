import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useFetch(baseUrl, path = '') {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const url = path ? `${baseUrl}/${path}` : baseUrl; // دمج الرابط الأساسي مع الجزء الإضافي إذا وُجد
      const { data } = await axios.get(url);
      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [baseUrl, path]); 
  return { data, isLoading, error };
}
