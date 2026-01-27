import React, { useEffect, useState } from 'react';
import './CreateDogList.styles.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading';
import DogCardTemplateList from '../DogCardTemplateList';
import { fetchNameDataStart } from '../../Redux/names/index';
import { getDogData } from '../../Redux/selectors/dog';
import { changeLoading, updateOffset } from '../../Redux/dog/index';
import { RootState } from '../../Redux/MiddleWare/index';

interface CreateDogListProps {
  isDogLoading: boolean;
}

function CreateDogList({ isDogLoading }: CreateDogListProps) {
  const dispatch = useDispatch();
  const [offsetAmount, setOffsetAmount] = useState(0);
  const dataContinues = true;
  const limitperPage = 20;
  const completedDogData = useSelector((state: RootState) => getDogData()(state));

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

const mapStateToProps = (state: RootState) => ({
  isDogLoading: state.reducer.dog.loading,
});

export default connect(mapStateToProps)(CreateDogList);
