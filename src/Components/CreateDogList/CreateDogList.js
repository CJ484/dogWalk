import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CreateDogList.styles.scss';
import { connect, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading/Loading';
import DogCardTemplateList from '../DogCardTemplateList/DogCardTemplateList';
import CardTemplate from '../DogCardTemplate/DogCardTemplate';
import { setLoading } from '../../Redux/Loading/LoadingSlice';
import { setDataDog } from '../../Redux/DogResults/DogResultsRedux';
import apiDogCall from '../../api/dogs/ApiCall';
import UrlParameters from '../../api/dogs/UrlParameters';
import apiNameCall from '../../api/name/apiCall';

function CreateDogList({ isDogLoading }) {
  const dispatch = useDispatch();
  const [offsetAmount, setOffsetAmount] = useState(0);
  const [combinedDogData, setCombinedDogData] = useState([]);
  const dataContinues = true;
  const limitperPage = 20;
  const completedDogData = getDogData();

  //* This function will execute when button is pressed
  //* it will activate the saga cycle
  const fetchDogApiData = async () => {
    dispatch(changeLoading(true));
    dispatch(fetchNameDataStart());
    dispatch(changeLoading(false));
    setOffsetAmount((offset) => offset + limitperPage);
    dispatch(updateOffset(offsetAmount + limitperPage));
  };

  if (isDogLoading) {
    return <Loading />;
  }

  return (
    <div>
      <InfiniteScroll
        next={fetchDogApiData}
        loader={<Loading />}
        hasMore={dataContinues}
        dataLength={completedDogData.length}
      >
        <DogCardTemplateList combinedDogData={combinedDogData} />
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isDogLoading: state.reducer.dog.loading,
});

CreateDogList.propTypes = {
  isDogLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CreateDogList);
