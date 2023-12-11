import React, { useState, useEffect } from 'react';

export default function useCustomHook(type) {
  const [state, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + (type === 'minus' ? -1 : 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [type]);

  return [state];
}