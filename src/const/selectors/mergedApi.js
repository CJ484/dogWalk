import { useSelector } from 'react-redux';

const grabDogData = () => useSelector((state) => state.reducer.dog.results);

export default grabDogData;
