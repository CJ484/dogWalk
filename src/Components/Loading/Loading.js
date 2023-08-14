import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import { changeLoading } from '../../Redux/Dog/DogRedux';

function Loading() {
  const dispatch = useDispatch();
  const setLoadingFalse = () => {
    dispatch(changeLoading(false));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingFalse();
    }, 3000);
  });

  return (
    <div className="loaderPage">
      <SyncLoader size={100} color="#FF9D28" />
    </div>
  );
}

export default Loading;
