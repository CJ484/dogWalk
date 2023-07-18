import Home from "../Pages/Home/Home";
import CreateNewProfile from "../Pages/CreateNewProfile/CreateNewProfilePage";
import CurrentProfilePage from "../Pages/CurrentProfile/CurrentProfilePage";
import DogResultsPage from "../Pages/DogResults/DogResultPage";
import DogPenPage from "../Pages/DogPen/DogPenPage";

const routes = [
    {
        path: '/',
        element: <Home />,
        exact: true
    },
    {
        path: '/Pages/DogResults/DogResultPage',
        element: <DogResultsPage />,
        exact: true 
    },
    {
        path: '/Pages/CreateNewProfile/CreateNewProfilePage',
        element: <CreateNewProfile/>,
        exact: true
    },
    {
        path: '/Pages/DogPenPage',
        element: <DogPenPage />,
        exact: true
    },
    {
        path: '/Pages/CurrentProfile.CurrentProfilePage',
        element: <CurrentProfilePage />,
        exact: true
    }
]

export default routes;