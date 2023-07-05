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
  const setLoadingTrue = () => {
    dispatch(setLoading(true));
  };
  const hasMore = useState(true);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const limitperPage = 20;
  const url = `${urls.dogNinjaApi}+&offset=${offsetAmount}`;

  useEffect(() => {
    setLoadingTrue();
    RandomDogInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDogInfos]);

  useEffect(() => {
    RandomName();
  }, [setDogNames]);

  useEffect(() => {
    ModifiedObject(dogNames, dogInfos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCombinedDogData, dogInfos]);

  //This function is responsible for getting image, breed Name, size into the cards
  //However it also saves the rest of the unused data.
  const RandomDogInfo = async () => {
    const key = process.env.REACT_APP_DOG;
    await axios
      .get(url, {
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
      .get("https://randomuser.me/api/?results=22&nat=us&inc=name")
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
