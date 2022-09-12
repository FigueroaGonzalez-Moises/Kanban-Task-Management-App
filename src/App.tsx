import Content from "components/Content";
import Navbar from "components/Navbar";
import Sidenav from "components/Sidenav/Sidenav";
import { AppCtx } from "Context";
import React from "react";
import { useState } from "react";
import "scss/App.scss";

const App = () => {
	const [DarkMode, setDarkMode] = useState(true);

	return (
		<div className="App dark-mode">
			<div className="pageWrapper">
				<AppCtx.Provider value={{ DarkMode, setDarkMode }}>
					<Sidenav />
				</AppCtx.Provider>
				<Navbar />
				<Content />
			</div>
		</div>
	);
};

export default App;
