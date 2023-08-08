import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CreateDogList.styles.scss';
import { connect, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading/Loading';
import DogCardTemplateList from '../DogCardTemplateList/DogCardTemplateList';
import UrlParameters from '../../api/dogs/UrlParameters';
import { fetchNameDataStart } from '../../Redux/Names/NamesRedux';
import grabMergeData from '../../const/selectors/mergedApi';
import { updateOffset, updateParameters } from '../../Redux/UrlConstruct/UrlConstrucRedux';
import { fetchDogDataStart } from '../../Redux/DogResults/DogResultsRedux';

function CreateDogList({ dogLoading }) {
  const dispatch = useDispatch();
  const [newCDData, setNewCDData] = useState([]);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const dataContinues = true;
  const parameters = UrlParameters();
  const limitperPage = 20;
  const finalData = grabMergeData();

  //* This function will execute when button is pressed
  //* it will activate the saga cycle
  const fetchDogApiData = async () => {
    dispatch(fetchNameDataStart());
    dispatch(fetchDogDataStart());
    setOffsetAmount((offset) => offset + limitperPage);
    dispatch(updateOffset(offsetAmount));
    setNewCDData(finalData);
  };

  //* When ever the parameters are changed this will trigger the dispatch of updating parameters
  useEffect(() => {
    dispatch(updateParameters(parameters));
    window.scrollTo(0, 0);
  }, [parameters]);

  if (dogLoading) {
    return <Loading />;
  }

  return (
    <div>
      <InfiniteScroll
        next={fetchDogApiData}
        loader={<Loading />}
        hasMore={dataContinues}
        dataLength={newCDData.length}
      >
        {/* <button type="button" onClick={() => fetchApiData()}>Click Me</button> */}
        <DogCardTemplateList combinedDogData={newCDData} />
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dogLoading: state.reducer.dogResults.loading,
});

CreateDogList.propTypes = {
  dogLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CreateDogList);
