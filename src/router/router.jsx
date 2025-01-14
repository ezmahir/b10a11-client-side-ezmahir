import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import PrivateRoute from "../PrivateRoute";
import ArtifactLike from "../pages/ArtifactLike/ArtifactLike";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import MyArtifactsPage from "../pages/MyArtifactsPage/MyArtifactsPage";
import ArtifactUpdate from "../pages/ArtifactUpdate/ArtifactUpdate";
import Errorpage from "../pages/Errorpage/Errorpage";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/artifactLike/:id",
        element: (
          <PrivateRoute>
            <ArtifactLike></ArtifactLike>
          </PrivateRoute>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/artifactUpdate/:id",
        element: (
          <PrivateRoute>
            <ArtifactUpdate></ArtifactUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts/${params.id}`),
      },
      {
        path: "/myArtifactsPage",
        element: (
          <PrivateRoute>
            <MyArtifactsPage></MyArtifactsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/artifacts/:id",
        element: (
          <PrivateRoute>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts/${params.id}`),
      },

      {
        path: "/addArtifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts></AddArtifacts>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
