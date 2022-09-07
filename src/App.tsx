import Content from "components/Content";
import Navbar from "components/Navbar";
import Sidenav from "components/Sidenav";
import "scss/App.scss";

const App = () => {
	return (
		<div className="App dark-mode">
			<div className="pageWrapper">
				<Sidenav />
				<Navbar />
				<Content />
			</div>
		</div>
	);
};

export default App;
