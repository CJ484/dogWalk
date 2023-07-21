/* eslint-disable import/no-cycle */
import React from 'react';
import Home from '../Pages/Home/Home';
import CreateNewProfile from '../Pages/CreateNewProfile/CreateNewProfilePage';
import CurrentProfilePage from '../Pages/CurrentProfile/CurrentProfilePage';
import DogResultsPage from '../Pages/DogResults/DogResultPage';
import DogPenPage from '../Pages/DogPen/DogPenPage';

const routes = {
  HOME: {
    title: 'Home',
    path: '/',
    element: <Home />,
    exact: true,
  },
  DOG_RESULTS: {
    title: 'dogResults',
    path: '/Pages/DogResults/DogResultPage',
    element: <DogResultsPage />,
    exact: true,
  },
  CREATE_NEW_PROFILE: {
    title: 'createNewProfile',
    path: '/Pages/CreateNewProfile/CreateNewProfilePage',
    element: <CreateNewProfile />,
    exact: true,
  },
  DOGPEN: {
    title: 'dogPen',
    path: '/Pages/DogPenPage',
    element: <DogPenPage />,
    exact: true,
  },
  CURRENT_PROFILE: {
    title: 'currentProfile',
    path: '/Pages/CurrentProfile.CurrentProfilePage',
    element: <CurrentProfilePage />,
    exact: true,
  },
};

export default routes;
