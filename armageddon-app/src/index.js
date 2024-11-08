import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Asteroids} from "./pages/Asteroids";
import {Destroyment} from "./pages/Destroyment";
import {Asteroid} from "./pages/Asteroid";

const router = createBrowserRouter([
    {
        //Весь список астероидов
        path: "/asteroids",
        element: <Asteroids/>,
    },
    {
        //Страница для уничтожения астероидов
        path: "/destroyment",
        element: <Destroyment/>,
    },
    {
        //Карточка астероида
        path: "/asteroid/:id",
        element: <Asteroid/>,
    },
    {
        //"Перенаправление" на главную страницу
        path: "*",
        element: <Asteroids/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


