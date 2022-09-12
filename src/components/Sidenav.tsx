import "scss/Sidenav.scss";
import AppLogo from "components/AppLogo";
import BoardIcon from "./Icons/BoardIcon";

const Sidenav = () => {
	return (
		<div id="sidenav">
			{/* LOGO HERE */}
			<div className="logoWrapper">
				<AppLogo />
				<h3 className="sidenav-logo-text">Kanban</h3>
			</div>

			{/* UL and list items here */}
			<ul>
				<li>All Boards (8)</li>

				<li className="ul-active">
					<BoardIcon />
					Platform Launch
				</li>

				<li>
					<BoardIcon />
					Marketing Plan
				</li>

				<li>
					<BoardIcon />
					Roadmap
				</li>

				<li className="purple">
					<BoardIcon />+ Create new board
				</li>
			</ul>
		</div>
	);
};

export default Sidenav;
