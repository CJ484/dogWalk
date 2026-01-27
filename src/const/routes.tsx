import { HomePage,
   CreateNewProfilePage,
   CurrentProfilePage,
   DogResultsPage,
   DogPenPage } from '../Pages/index';
import { FaMagnifyingGlass, FaPersonWalking } from 'react-icons/fa6';

type RouteProps = {
  title: string;
  icon?: React.ReactElement;
  path: string;
  element: React.ReactElement;
  exact: boolean;
}


const routes: RouteProps[] = [
  {
    title: 'Home',
    path: '/',
    element: <HomePage />,
    exact: true,
  },
  {
    title: 'dogResults',
    path: '/Pages/DogResults/DogResultPage',
    icon: <FaMagnifyingGlass />,
    element: <DogResultsPage />,
    exact: true,
  },
  {
    title: 'createNewProfile',
    path: '/Pages/CreateNewProfile/CreateNewProfilePage',
    icon: <FaPersonWalking />,
    element: <CreateNewProfilePage />,
    exact: true,
  },
  {
    title: 'dogPen',
    path: '/Pages/DogPenPage',
    element: <DogPenPage />,
    exact: true,
  },
  {
    title: 'currentProfile',
    path: '/Pages/CurrentProfile.CurrentProfilePage',
    element: <CurrentProfilePage />,
    exact: true,
  },
]

export default routes;
