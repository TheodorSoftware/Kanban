import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
<<<<<<< HEAD
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
=======
import Board from "./pages/board";
import boardMocks from "./mocks/board-mock";
import "App.css";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/board",
    element: <Board data={boardMocks} />,
  },
]);
>>>>>>> f63ad55ec7f5289d99ae633dbf95157c9a7336d6

const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};
export default App;
