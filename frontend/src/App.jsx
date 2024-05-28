import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>Error</div>
    },
    {
      path: '/user',
      element: <div>User</div>,
      errorElement: <div>Error</div>
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
