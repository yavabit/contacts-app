import "./App.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "src/redux/store";

export const App = () => {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			minBreakpoint="xxs"
		>
			<BrowserRouter>
				<Provider store={store}>
					<Router />
				</Provider>
			</BrowserRouter>
		</ThemeProvider>
	);
};
