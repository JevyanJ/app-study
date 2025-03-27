import { Layout } from "../components/Layout";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { ExamPage } from "./ExamPage";


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
			},
			{
				path: "/exam",
				element: <ExamPage />
			}
		],
	},
];

export default pages;
