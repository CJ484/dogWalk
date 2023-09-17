import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CreateDogList.styles.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading';
import DogCardTemplateList from '../DogCardTemplateList';
import { fetchNameDataStart } from '../../Redux/names/index';
import { getDogData } from '../../Redux/selectors/dog';
import { changeLoading, updateOffset } from '../../Redux/dog/index';

function CreateDogList({ isDogLoading }) {
  const dispatch = useDispatch();
  const [offsetAmount, setOffsetAmount] = useState(0);
  const dataContinues = true;
  const limitperPage = 20;
  const completedDogData = useSelector(getDogData());

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

  useEffect(() => {
    fetchDogApiData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        next={fetchDogApiData}
        loader={<Loading />}
        hasMore={dataContinues}
        dataLength={completedDogData.length}
      >
        <DogCardTemplateList combinedDogData={completedDogData} />
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
