import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Body />
    </Provider>
  );
}
