import { Layout } from "../components/Layout";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";

const pages = [
	{
		path: "/",
		element: <Layout />,
		errorElement: (
			<>
				<ErrorPage />
			</>
		),
		children: [
			{
				path: "/",
				element: <HomePage />
			}
		],
	},
];

export default pages;
