import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Clinic from './views/Clinic'
import Login from './views/Login';
import Patient from './views/Patient';
import Cartillas from './views/Cartillas'
import ProtectedRoutes from './components/Protected';
import PatientProfile from './views/PatientProfile';
import PasswordRecovery from './views/PassRecovery';
import Contact from './views/Contact';
import Register from './views/Register';
import Error from './components/error/Error';

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