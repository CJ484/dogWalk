import { useSelector } from 'react-redux';

const grabMergeData = () => useSelector((state) => state.reducer.mergedApi.results);

export default grabMergeData;
