import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const MainMenu = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<NavLink to={"/"}>
						<h1>Книга контактов</h1>
					</NavLink>
				</Navbar.Brand>
				<Nav className="me-auto">
					<NavLink to={"/groups"}>Группы</NavLink>
					<NavLink to={"/favorite"}>Избранное</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};
