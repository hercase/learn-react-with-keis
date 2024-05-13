import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Pages
import Home from './pages/Home.jsx';
import Pokemon from './pages/Pokemon.jsx';
import Plants from './pages/Plants.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pokemon', element: <Pokemon /> },
      { path: '/plantas', element: <Plants /> },
      { path: '/personas', element: <p>Personas</p> },
      { path: '*', element: <p>404</p> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
