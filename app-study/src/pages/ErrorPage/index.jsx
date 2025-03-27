import { Link } from "react-router-dom";

export const ErrorPage = () => {
	return (
		<main>
			<h1 style={{ textAlign: "center" }}>404</h1>
			<p style={{ textAlign: "center" }}>Page not found</p>
			<Link style={{ color: "#f0f0f0", textDecoration: "underline" }} to="/">
				Go back to the main page
			</Link>
		</main>
	);
};
