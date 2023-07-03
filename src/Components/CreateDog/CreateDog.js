import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import "./CreateDog.styles.scss";
import axios from "axios";
import { setLoading } from "../../Redux/Loading/LoadingSlice";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";
import InfiniteScroll from 'react-infinite-scroll-component';

const DogCardInfo = ({ isLoading, setLoading }) => {
  const { t } = useTranslation();
  const [dogName, setDogName] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);
  const dispatch = useDispatch();
  const setTrue = () => {
    dispatch(setLoading(true));
  };
  const [hasMore, setHasMore] = useState(true);
  const [offsetAmount, setOffsetAmount] = useState(0);
  const limitperPage = 20;

  useEffect(() => {
    setTrue();
    RandomDogInfo();
    RandomName();
    modifiedObject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDogName, setDogInfo]);

  //This function is responsible for getting image, breed Name, size into the cards
  //However it also saves the rest of the unused data.
  const RandomDogInfo = async () => {
    const key = "9/8P1dgeiaMQRHYSg9SgkA==olxKKsYDWHZlEAYU";
    await axios
      .get(`https://api.api-ninjas.com/v1/dogs?offset=${offsetAmount}&min_height=6`, {
        headers: { "X-Api-Key": key },
      })
      .then((results) => {
        const newData = results.data;
        setDogInfo((prevDogs) => [...prevDogs, ...newData]);
        setOffsetAmount((offset) => offset + limitperPage);
     })
      .catch((error) => {
        if(error.response?.status === 404) {
          console.error(`could not find url`, error.data);
          return undefined;
        }
      })
  };

  //Requests a random name, its currently on a loop for 12 times
  const RandomName = async () => {
    await axios
      .get("https://randomuser.me/api/?results=22&nat=us&inc=name")
      .then((results) => {
        setDogName(results.data.results.map((a) => a.name.first));
      });
  };

  const modifiedObject = () => {
    const dgInfo = dogInfo;
    const dgName = dogName;
    const combinedList = dgInfo.map((dg) => {
      const Namey = dgName[Math.floor(Math.random() * dgName.length)];
      return { ...dg, nameDog: Namey };
    });
    return CardTemplate(combinedList);
  };

  //This will serve as the card template when I receive all important information needed
  const CardTemplate = (input3) => {
    return (
      <div className="cardGrid">
        <InfiniteScroll
          next={RandomDogInfo}
          loader={<Loading />}
          hasMore={hasMore}
          dataLength={dogInfo.length}
          endMessage={<p style={{ textAlign: 'center'}}>End of Data</p>}
      >
        {input3.map((value, index) => {
          return (
            <div key={index} className="Card">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src={value.image_link}
                    className="card-img-top"
                    alt="Dog"
                  />
                  <div className="card-body">
                    <h6 className="label">{t('card.name')}:</h6>
                    <h5 className="card-title">{value.nameDog}</h5>
                    <h6 className="label">{t('card.handling')}:</h6>
                    <h5 className="card-title">{value.trainability}</h5>
                    <h6 className="label">{t('card.breed')}:</h6>
                    <h5 className="card-title">{value.name}</h5>
                    <a href="/" className="btn btn-primary">
                      {t('card.button')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>

      </div>
    );
  };
  if (isLoading === true) {
    return <Loading />
  } else {
    return modifiedObject();
  }
};


const mapStateToProps = (state) => {
  return {
    isLoading: state.reducer.loadingState.value,
  };
};

export default connect(mapStateToProps, { setLoading })(DogCardInfo);
