import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider } from "react-router";
import router from "./routing/route";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
