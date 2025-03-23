import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<h1>Bienvenide a tu página de tests</h1>
			<Outlet />
		</>
	);
};
