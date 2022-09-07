import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "scss/Navbar.scss";

const Navbar = () => {
	return (
		<nav id="navbar">
			<h3 className="boardTitle">NAME OF BOARD</h3>

			<div className="buttonWrapper">
				<div className="vertical-align">
					<button>
						<FontAwesomeIcon icon={faPlus} />
						New Task
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
