import Login from './components/login';
import Opening from './components/opening';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  
  const BrowserRouter = createBrowserRouter([
    {path: '/', element:<Login /> },
    {path: '/home', element:<Opening/> }
  ]);
  
  return (
    <RouterProvider router={BrowserRouter} />
  );
}

export default App
  