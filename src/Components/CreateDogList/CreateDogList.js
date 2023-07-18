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
import UrlParameters from "../../api/dogs/UrlParameters";
import { apiNameCall } from "../../api/name/apiCall";

const CreateDogList = ({ isLoading, setLoading, setDataDog }) => {
  const dispatch = useDispatch();
  const setLoadingTrue = () => { dispatch(setLoading(true)); };
  const [dogNames, setDogNames] = useState([]);
  const [dogInfos, setDogInfos] = useState([]);
  const [combinedDogData, setCombinedDogData] = useState([]);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const parameters = UrlParameters();
  const limitperPage = 20;

  useEffect(() => {
    updateData();
  }, [parameters, setOffsetAmount]);
  
  useEffect(() => {
    randomNameInfo();
  }, []);

  const updateData = () => {
    setLoadingTrue();
    window.scrollTo(0, 0);
    resetDogInfo();
    randomDogInfo();
  }

  const resetDogInfo = () => {
    setCombinedDogData();
    setDogInfos([]);
    setOffsetAmount(0);
  }
      
  //* This function is responsible for getting image, breed Name, size into the cards
  //* However it also saves the rest of the unused data. Set for 20 results per request
  const randomDogInfo = async () => {
    await apiDogCall({offsetAmount, parameters})
    .then((results) => {
      console.log("Api results",results);
      setDogInfos((prevDogs) => [...prevDogs, ...results]);
      console.log(offsetAmount);
      setOffsetAmount((offset) => offset + limitperPage);
      mergeApiDatas(dogNames, dogInfos);
    })
  }

  //* Requests a random name, its currently set for 50 names
  const randomNameInfo = async () => {
    await apiNameCall()
      .then((results) => {
        setDogNames(results);
      });
  };

  //* After both Requests have been completed, we merge them both into a 
  //* singular array
  const mergeApiDatas = (names, infos) => {
    const combinedList = infos.map((dg) => {
      const Namey = names[Math.floor(Math.random() * names.length)];
      return { ...dg, nameDog: Namey };
    });
    setCombinedDogData(combinedList);
    console.log("after they combine the apis together",combinedDogData);
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
