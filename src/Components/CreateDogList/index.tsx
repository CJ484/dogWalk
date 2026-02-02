import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading';
import DogCardTemplate from '../DogCardTemplate/DogCardTemplate';
import { fetchNameDataStart } from '@/Redux/names/index';
import { getDogData } from '@/Redux/selectors/dog';
import { changeLoading, updateOffset } from '@/Redux/dog/index';
import { RootState } from '@/Redux/MiddleWare/index';
import './CreateDogList.styles.scss';

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
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <DogCardTemplate data={completedDogData} />
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  isDogLoading: state.reducer.dog.loading,
});

export default connect(mapStateToProps)(CreateDogList);
