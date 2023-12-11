import { useCallback, useState } from 'react';

const Custumhook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (res, setTasks) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        res.url,
        {
          method: res.method || 'GET',
          headers: res.headers || {},
          body: res.body ? JSON.stringify(res.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      // const data = await response.json();
      // setTasks(data);
      // console.log('반영전 :' , )
      // 추가: fetch 완료 후에 새로운 데이터를 받아올 수 있음
      const newData = await fetch(res.url);
      const newDataJson = await newData.json();
      console.log('반영 후:',newDataJson);
      setTasks(newDataJson);

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default Custumhook;