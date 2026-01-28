import { CurrentProfilePage, CreateNewProfilePage, DogResultsPage, DogPenPage, HomePage } from '../Pages/index';
import { FaMagnifyingGlass, FaPersonWalking, FaHouse, FaUser, FaDog } from 'react-icons/fa6';

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
    icon: <FaHouse />,
    element: <HomePage />,
    exact: true,
  },
  {
    title: 'Create New Profile',
    path: '/create-new-profile',
    icon: <FaUser />,
    element: <CreateNewProfilePage />,
    exact: true,
  },
  {
    title: 'Dog Results',
    path: '/dog-results',
    icon: <FaMagnifyingGlass />,
    element: <DogResultsPage />,
    exact: true,
  },
  {
    title: 'Current Profile',
    path: '/current-profile',
    element: <CurrentProfilePage />,
    exact: true,
  },
  {
    title: 'Dog Pen',
    path: '/dog-pen',
    icon: <FaDog />,
    element: <DogPenPage />,
    exact: true,
  }
]

const navRoutes: RouteProps[] = [
  {
    title: 'Explore Dogs',
    path: '/dog-results',
    icon: <FaMagnifyingGlass />,
    element: <DogResultsPage />,
    exact: true,
  },
  {
    title: 'Become A Walker',
    path: '/create-new-profile',
    icon: <FaPersonWalking />,
    element: <CreateNewProfilePage />,
    exact: true,
  },
]

export { routes, navRoutes };