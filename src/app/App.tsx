import "./App.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";

export const App = () => {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			minBreakpoint="xxs"
		>
			<BrowserRouter>
					<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
};
