import Content from "components/Content";
import Navbar from "components/Navbar";
import Sidenav from "components/Sidenav/Sidenav";
import { AppCtx } from "Context";
import { useRef, useState } from "react";
import "scss/App.scss";

const App = () => {
	const [DarkMode, setDarkMode] = useState(true);
	const themeRef = useRef(null);

	if (!!themeRef.current) {
		setTimeout(() => {
			let node = themeRef.current as any;
			if (DarkMode) {
				node.classList.add("dark-mode");
			} else {
				node.classList.remove("dark-mode");
			}
		}, 500);
	}

	return (
		<div ref={themeRef} className="dark-mode">
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
