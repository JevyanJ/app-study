import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Router from "./pages/router.jsx";
import Topbar from "./components/topBar";
import Footer from "./components/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Topbar />
		<RouterProvider router={Router}>
			<App />
		</RouterProvider>
		<Footer />
	</React.StrictMode>
);
