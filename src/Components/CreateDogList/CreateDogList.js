/* eslint-disable react-hooks/exhaustive-deps */
import "./CreateDogList.styles.scss";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import CardTemplate from "../DogCardTemplate/DogCardTemplate";
import { setLoading } from "../../Redux/Loading/LoadingSlice";
import { setDataDog } from "../../Redux/DogResults/DogResultsRedux";
import { apiDogCall } from "../../api/dogs/ApiCall";
import { apiNameCall } from "../../api/name/apiCall";

const CreateDogList = ({ isLoading, setLoading, setDataDog }) => {
  const dispatch = useDispatch();
  const setLoadingTrue = () => { dispatch(setLoading(true)); };
  const [dogNames, setDogNames] = useState([]);
  const [dogInfos, setDogInfos] = useState([]);
  const [combinedDogData, setCombinedDogData] = useState([]);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const limitperPage = 20;

  useEffect(() => {
    setLoadingTrue();
    randomDogInfo();
  }, []);
  
  useEffect(() => {
    randomNameInfo();
  }, []);

  //* This function is responsible for getting image, breed Name, size into the cards
  //* However it also saves the rest of the unused data. Set for 20 results per request
  const randomDogInfo = async () => {
    await apiDogCall({offsetAmount})
    .then((results) => {
      setDogInfos((prevDogs) => [...prevDogs, ...results]);
      setOffsetAmount((offset) => offset + limitperPage);
      mergeData(dogNames, dogInfos);
    })
  }

  //* Requests a random name, its currently set for 50 names
  const randomNameInfo = async () => {
    await apiNameCall()
      .then((results) => {
        setDogNames(results);
      });
  };

  //* After both Requests havea been completed, we merge them both into a 
  //* singular object
  const mergeData = (names, infos) => {
    const combinedList = infos.map((dg) => {
      const Namey = names[Math.floor(Math.random() * names.length)];
      return { ...dg, nameDog: Namey };
    });
    setCombinedDogData(combinedList);
    dispatch(setDataDog(combinedList))
  };

  if (isLoading === true) {
    return <Loading />;
  } 

  return (
    <div>
      <InfiniteScroll
        next={randomDogInfo}
        loader={<Loading />}
        hasMore={true}
        dataLength={dogInfos.length}
      >
        <CardTemplate combinedDogData={combinedDogData} />
      </InfiniteScroll>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    isLoading: state.reducer.loading.value,
  };
};

export default connect(mapStateToProps, { setLoading, setDataDog })(CreateDogList);
