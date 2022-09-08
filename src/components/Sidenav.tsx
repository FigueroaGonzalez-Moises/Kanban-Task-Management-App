import "scss/Sidenav.scss";
import AppLogo from "components/AppLogo";
import BoardIcon from "components/Icons/BoardIcon";
import PlusIcon from "components/Icons/PlusIcon";

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
				<li>
					<div className="liContainer">All Boards (8)</div>
				</li>

				<li>
					<div className="activeWrapper">
						<BoardIcon />
						<div className="liText">Platform Launch</div>
					</div>
				</li>

				<li>
					<div className="liContainer">
						<BoardIcon />
						<div className="liText">Marketing Plan</div>
					</div>
				</li>

				<li>
					<div className="liContainer">
						<BoardIcon />
						<div className="liText">Roadmap</div>
					</div>
				</li>

				<li className="purple">
					<div className="liContainer">
						<PlusIcon />
						<div className="liText"> New Board</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidenav;
