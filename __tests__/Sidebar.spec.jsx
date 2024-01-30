import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import Sidebar from "../src/layout/Sidebar";

describe("Sidebar Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Sidebar />
                </BrowserRouter>
            </Provider>
        );
    });

    it("should render the component properly", () => {
        screen.getByTestId("sidebar");
    });

    describe("Section Items", () => {
        it("should contain Home section", () => {
            screen.getByText("Home");
        });

        it("should contain Shorts section", () => {
            screen.getByText("Shorts");
        });

        it("should contain Github section", () => {
            screen.getByText("Github");
        });
    });
});
