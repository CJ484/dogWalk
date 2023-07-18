import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { setLoading } from "../../Redux/Loading/LoadingSlice.js";
import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({setLoading}) => {
  const dispatch = useDispatch();
  const setLoadingFalse = () => {
    dispatch(setLoading(false));
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
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.reducer.loading.value,
  };
};

export default connect(mapStateToProps, { setLoading })(Loading);
