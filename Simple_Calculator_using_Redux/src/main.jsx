import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import UserData from "./features/UserData/userData.layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./features/UserData/UserDetails/userDetails.layout.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <UserData />,
  },
  {
    path: "/:id",
    element: <UserDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={myRouter} />
  </Provider>
);
