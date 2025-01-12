import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
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
        path: "/artifacts/:id",
        element: <ArtifactDetails></ArtifactDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts/${params.id}`),
      },

      {
        path: "/addArtifacts",
        element: <AddArtifacts></AddArtifacts>,
      },
    ],
  },
]);

export default router;
