import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store/store";
import Navbar from "../src/layout/Navbar";

describe("Navbar Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
    });

    beforeEach(() => {
        global.fetch = vi.fn();
    });

    afterEach(() => {
        global.fetch.mockRestore();
    });

    describe("Hamburger Icon", () => {
        let hamburger;

        beforeEach(() => {
            hamburger = screen.getByTestId("hamburger");
        });

        it("should render the icon properly", () => {
            expect(hamburger).toBeInTheDocument();
        });

        it("should close toggle sidebar on click event", async () => {
            const hamburger = screen.getByTestId("hamburger");
            expect(store.getState().app.isSideBarVisible).toBe(true);
            fireEvent.click(hamburger);
            expect(store.getState().app.isSideBarVisible).toBe(false);
            fireEvent.click(hamburger);
            expect(store.getState().app.isSideBarVisible).toBe(true);
        });
    });

    describe("App Logo", () => {
        it("should render the logo properly", () => {
            screen.getByAltText("reactube_logo");
        });

        it("should redirect to / after click event", () => {
            const logo = screen.getByAltText("reactube_logo");
            fireEvent.click(logo);
            expect(window.location.pathname).toBe("/");
        });
    });

    describe("Search Input & Submit Button", () => {
        it("should render the search input field", () => {
            const searchInput = screen.getByTestId("search-input");
            expect(searchInput).toBeInTheDocument();
        });

        it("should render the submit button", () => {
            const submitButton = screen.getByTestId("search-button");
            expect(submitButton).toBeInTheDocument();
        });

        it("should show loader after hitting search button", async () => {
            const searchInput = screen.getByTestId("search-input");
            fireEvent.change(searchInput, { target: { value: "javascript" } });
            screen.getByTestId("loader");
        });

        it("should navigate to results page after search", () => {
            const submitButton = screen.getByTestId("search-button");
            const searchInput = screen.getByTestId("search-input");
            fireEvent.change(searchInput, { target: { value: "javascript" } });
            fireEvent.click(submitButton);
            expect(window.location.pathname).toBe("/results/");
            expect(window.location.search).toBe("?keyword=javascript");
            history.back();
        });

        it("should show suggestions after input change on search", async () => {
            const searchInput = screen.getByTestId("search-input");
            fireEvent.change(searchInput, { target: { value: "javascript" } });

            global.fetch.mockResolvedValueOnce({
                json: () => Promise.resolve(["", ["java"]]),
                ok: true,
            });

            await waitFor(async () => {
                screen.getByTestId("search-suggestions");
            });
            const loaderElement = screen.queryByTestId("loader");
            expect(loaderElement).toBe(null);
            const suggestion = screen.getByTestId("query-suggestion");
            fireEvent.click(suggestion);
            expect(window.location.pathname).toBe("/results/");
            expect(window.location.search).toBe("?keyword=java");
            history.back();
        });
    });

    describe("User Avatar", () => {
        it("should render properly", () => {
            screen.getByTestId("user-avatar");
        });
    });
});
