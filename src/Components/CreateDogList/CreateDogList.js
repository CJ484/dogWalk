import React, { useEffect, useState } from 'react';
import { sample } from 'lodash';
import PropTypes from 'prop-types';
import './CreateDogList.styles.scss';
import { connect, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading/Loading';
import DogCardTemplateList from '../DogCardTemplateList/DogCardTemplateList';
import { setLoading } from '../../Redux/Loading/LoadingSlice';
import { setDataDog } from '../../Redux/DogResults/DogResultsRedux';
import apiDogCall from '../../api/dogs/ApiCall';
import UrlParameters from '../../api/dogs/UrlParameters';
import apiNameCall from '../../api/name/apiCall';

function CreateDogList({ isLoading }) {
  const dispatch = useDispatch();
  const setLoadingTrue = () => {
    dispatch(setLoading(true));
  };
  const [dogNames, setDogNames] = useState([]);
  const [dogInfos, setDogInfos] = useState([]);
  const [combinedDogData, setCombinedDogData] = useState([]);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const dataContinues = true;
  const parameters = UrlParameters();
  const limitperPage = 20;

  //* After both Requests have been completed, we merge them both into a
  //* singular array
  const mergeApiDatas = (names, infos) => {
    const combinedList = infos.map((dg) => {
      const Names = sample(names);
      return { ...dg, nameDog: Names };
    });
    setCombinedDogData(combinedList);
    dispatch(setDataDog(combinedList));
    return combinedList;
  };

  //* Requests a random name, its currently set for 50 names
  const randomNameInfo = async () => {
    await apiNameCall().then((results) => setDogNames(results));
  };

  //* This function is responsible for getting image, breed Name, size into the cards
  //* However it also saves the rest of the unused data. Set for 20 results per request
  const randomDogInfo = async () => {
    await apiDogCall({ offsetAmount, parameters }).then((results) => {
      setDogInfos((prevDogs) => [...prevDogs, ...results]);
      setOffsetAmount((offset) => offset + limitperPage);
    }).finally(mergeApiDatas(dogNames, dogInfos));
  };

  useEffect(() => {
    randomNameInfo();
  }, []);

  useEffect(() => {
    setLoadingTrue();
    window.scrollTo(0, 0);
    randomDogInfo();
  }, [setCombinedDogData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <InfiniteScroll
        next={randomDogInfo}
        loader={<Loading />}
        hasMore={dataContinues}
        dataLength={dogInfos.length}
      >
        <DogCardTemplateList combinedDogData={combinedDogData} />
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.reducer.loading.value,
});

CreateDogList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CreateDogList);
