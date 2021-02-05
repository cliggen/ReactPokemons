import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

const withLoadingDelay = (WrappedComponent) => props => {
  const [isLoadingState, isLoadingSetState] = useState(false);
  useEffect(() => { setTimeout(() => { isLoadingSetState(true); }, 2000); }, []);
  return (
    isLoadingState
      ? <WrappedComponent {...props} />
      : <Spinner />
  );
};

export default withLoadingDelay;
