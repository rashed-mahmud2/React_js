import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import About from "../pages/About";
import Team from "../pages/Team";
import RootLayout from "../pages/Rootlayout";
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", index: true, element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/team", element: <Team /> },
      { path: '/posts', element: <PostList />},
      {path: 'posts/:postId', element: <PostDetails />}
    ],
  },
  {
    path: '/login',
    element: <Login />
  }
]);
