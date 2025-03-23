import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import Router from "./pages/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={Router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
