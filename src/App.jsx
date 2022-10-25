import './App.css';
import Home from './pages/home/Home';
import ErrorPage from './pages/404/error-page';
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
