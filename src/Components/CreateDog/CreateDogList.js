/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./CreateDogList.styles.scss";
import axios from "axios";
import { setLoading } from "../../Redux/Loading/LoadingSlice";
import Loading from "../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import CardTemplate from "../DogCardTemplate/DogCardTemplate";
import urls from "../../const/urls";

const CreateDogList = ({ isLoading, setLoading }) => {
  const [dogNames, setDogNames] = useState([]);
  const [dogInfos, setDogInfos] = useState([]);
  const [combinedDogData, setCombinedDogData] = useState([]);
  const dispatch = useDispatch();
  const setLoadingTrue = () => { dispatch(setLoading(true)); };
  const hasMore = useState(true);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const limitperPage = 20;
  const dogUrl = `${urls.dogNinjaApi}+&offset=${offsetAmount}`;
  const nameUrl = urls.nameApi;

  useEffect(() => {
    setLoadingTrue();
    RandomDogInfo();
  }, [setDogInfos]);

  useEffect(() => {
    RandomName();
  }, [setDogNames]);

  useEffect(() => {
    ModifiedObject(dogNames, dogInfos);
  }, [setCombinedDogData, dogInfos]);

  //This function is responsible for getting image, breed Name, size into the cards
  //However it also saves the rest of the unused data.
  const RandomDogInfo = async () => {
    const key = process.env.REACT_APP_DOG;
    await axios
      .get(dogUrl, {
        headers: { "X-Api-Key": key },
      })
      .then((results) => {
        setDogInfos((prevDogs) => [...prevDogs, ...results.data]);
        setOffsetAmount((offset) => offset + limitperPage);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          console.error(`could not find url`, error.data);
          return undefined;
        }
      });
  };

  //Requests a random name, its currently on a loop for 12 times
  const RandomName = async () => {
    await axios
      .get(nameUrl)
      .then((results) => {
        setDogNames(results.data.results.map((a) => a.name.first));
      });
  };

  const ModifiedObject = (names, infos) => {
    const combinedList = infos.map((dg) => {
      const Namey = names[Math.floor(Math.random() * names.length)];
      return { ...dg, nameDog: Namey };
    });
    setCombinedDogData(combinedList);
  };

  if (isLoading === true) {
    return <Loading />;
  } else {
    return (
      <div>
        <InfiniteScroll
          next={RandomDogInfo}
          loader={<Loading />}
          hasMore={hasMore}
          dataLength={dogInfos.length}
          endMessage={<p style={{ textAlign: "center" }}>End of Data</p>}
        >
          <CardTemplate combinedDogData={combinedDogData} />
        </InfiniteScroll>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.reducer.loading.value,
  };
};

export default connect(mapStateToProps, { setLoading })(CreateDogList);
