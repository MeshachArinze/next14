"use client";

import  { useEffect, useState } from 'react';

type Props = {
    children: React.ReactNode;
}

const ErrorBoundary = ({children}: Props) => {
    const [ useError, setUseError ] = useState(false);

    useEffect(() => {
      const getError = () => {
        setUseError(true) ;
      }
    
      return () => {
        getError()
      }
    }, [useError]);

    if (!useError) {
        return <div>running fine </div>;
    } else {
        <div>Error: Something is wrong!</div>;
    }
    
  return <div>{children}</div>; 
}

export default ErrorBoundary