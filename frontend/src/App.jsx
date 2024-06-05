import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home';
import Clinic from './views/clinic'
import Login from './views/login';
import Patient from './views/patient';
import Cartillas from './views/cartillas'
import ProtectedRoutes from './components/protected';
import PatientProfile from './views/patientProfile';
import PasswordRecovery from './views/passRecovery';
import Contact from './views/contact';
import Register from './views/register';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>Error</div>
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <div>Error</div>
    },
    {
      path: '/recover-password',
      element: <PasswordRecovery />,
      errorElement: <div>Error</div>
    },
    {
      path: '/create-account',
      element: <Register />,
      errorElement: <div>Error</div>
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/patient',
          element: <Patient />,
          errorElement: <div>Error</div>
        },
        {
          path: '/clinic',
          element: <Clinic />,
          errorElement: <div>Error</div>
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
