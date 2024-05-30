import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home';
import Clinic from './views/clinic'
import Auth from './views/auth';
import Patient from './views/patient';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>Error</div>
    },
    {
      path: '/clinic',
      element: <Clinic />,
      errorElement: <div>Error</div>
    },
    {
      path: '/auth',
      element: <Auth />,
      errorElement: <div>Error</div>
    },
    {
      path: '/patient',
      element: <Patient />,
      errorElement: <div>Error</div>
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
