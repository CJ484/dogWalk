import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import { changeLoading } from '../../Redux/dog/index';

function Loading() {
  const dispatch = useDispatch();
  const setLoadingFalse = () => {
    dispatch(changeLoading(false));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFalse();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loaderPage">
      <SyncLoader size={100} color="#FF9D28" />
    </div>
  );
}

export default Loading;
