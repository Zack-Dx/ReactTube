import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./layout/Navbar";
import Body from "./layout/Body";

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Body />
    </Provider>
  );
}
