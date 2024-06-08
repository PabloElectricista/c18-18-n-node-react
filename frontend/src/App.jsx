import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home';
import Clinic from './views/clinic'
import Login from './views/login';
import Patient from './views/patient';
import Cartillas from './views/cartillas'
import ProtectedRoutes from './components/protected';
import PatientProfile from './views/patientProfile';
import PasswordRecovery from './views/passRecovery';
import Contact from './views/Contact';
import Register from './views/register';
import Error from './components/error/error';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: '/recover-password',
      element: <PasswordRecovery />,
      errorElement: <Error />
    },
    {
      path: '/create-account',
      element: <Register />,
      errorElement: <Error />
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/patient',
          element: <Patient />,
          errorElement: <Error />
        },
        {
          path: '/clinic',
          element: <Clinic />,
          errorElement: <Error />
        },
        {
          path: '/profile',
          element: <PatientProfile />,
        },
        // {
        //   path: '/cartillas',
        //   element: <Cartillas />
        // },
      ]
    },
    {
      path: '/contact',
      element: <Contact />
    },
    //agrego temporalmente para trabajar sobre esta vista
            {
          path: '/cartillas',
          element: <Cartillas />
        }
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App