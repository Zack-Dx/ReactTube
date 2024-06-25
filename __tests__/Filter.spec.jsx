import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FILTER_TAB_ARRAY } from "../mocks/data";
import store from "../src/store/store";
import FilterList from "../src/components/Filter/FilterList";

describe("Filter Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <FilterList />
                </BrowserRouter>
            </Provider>
        );
    });

    it("should render the component properly", () => {
        screen.getByTestId("filter-list");
    });

    it("should render Filter Tabs properly", () => {
        FILTER_TAB_ARRAY.map((content) => {
            screen.getByText(content);
        });
    });
});
