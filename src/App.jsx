import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import Home from './pages/home/Home';
import Product from './pages/product/Product';
// import ErrorPage from './pages/404/error-page';
// import { createBrowserRouter, RouterProvider, Route} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/pruduct",
//     element: <Product />,
//   },
//   // {
//   //   path: "contacts/:contactId",
//   //   element: <Contact />,
//   // },
// ]);

function App() {
  return (
    <>
      <Navbar />
      {/* <RouterProvider router={router} /> */}

      <Product/>
      {/* <div style={{height: '90vh'}}></div> */}
            
      <Footer/>
    </>
  );
}

export default App;
