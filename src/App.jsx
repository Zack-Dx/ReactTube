import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import store from "./store/store";
import router from "./routing/route";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
