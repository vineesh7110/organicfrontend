import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductPage, { loader as ProductLoader } from './routes/Product';
import ErrorPage from './Error';
import SignupPage from './routes/Signup';
import LoginPage from './routes/Login';
import HomePage from './routes/Home';
import store from './app/store'
import { Provider } from 'react-redux'
import CartPage from './routes/Cart';
import ContactPage from './routes/Contact';
import WholesalePage from './routes/Wholesale';
import ProcessPage from './routes/Process';
import FormPage from './routes/Form';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },

      {
        path: '/products',
        element: <ProductPage />,
        loader: ProductLoader
      },
      {
        path: '/cart',
        element: <CartPage />,
       
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/wholesale',
        element: <WholesalePage />
      },
      {
        path: '/process',
        element: <ProcessPage />
      },
      {
        path:'/form',
       element:<FormPage/>
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
