import React from 'react';
import HomeContainer from './layout';
import Routes from '../../../constants/routes';

const Home = ({navigation: {navigate}}) => {
  const handleAction = () => navigate(Routes.Search);
  return <HomeContainer onPress={handleAction} />;
};
export default Home;
