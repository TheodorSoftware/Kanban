import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Board from "./pages/mainPage/board";
import boardMocks from "./mocks/board-mock";
import "App.css";
import Register from "./pages/login/register/register";

let router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
      path: '/register',
      element: <Register />
    },
    {
        path: '/board', 
        element: <Board />,
        children: [
            {
                path: ':id',
                element: <Board />
            }
        ]
    },
])

const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};
export default App;
