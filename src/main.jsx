/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SneakerContextProvider from "./service/store/SneakerContextProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./service/store/store.js";
import { Toaster } from "./components/ui/sonner";


	ReactDOM.createRoot(document.getElementById("root")).render(
		<SneakerContextProvider>
			<Router>
				<Provider store={store}>
					<App />
					<Toaster />
				</Provider>
			</Router>
		</SneakerContextProvider>
	);
