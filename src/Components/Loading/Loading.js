import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { setLoading } from "../../Redux/Loading/LoadingSlice.js";
import SyncLoader from "react-spinners/SyncLoader";

const Loading = ({setLoading}) => {
  const dispatch = useDispatch();
  const setFalse = () => {
    dispatch(setLoading(false));
  };

  useEffect(() => {
    setTimeout(() => {
      setFalse();
    }, 8000);
  });

  return (
    <div className="loaderPage">
      <SyncLoader size={100} color="#36d7b7" />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.reducer.loadingState.value,
  };
};

export default connect(mapStateToProps, { setLoading })(Loading);
