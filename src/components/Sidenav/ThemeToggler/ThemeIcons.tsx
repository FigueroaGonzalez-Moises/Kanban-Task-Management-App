import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const MoonIcon = () => {
	return (
		<div className="moonWrapper">
			<div className="theme-v-align">
				<FontAwesomeIcon icon={faMoon} />
			</div>
		</div>
	);
};

export const SunIcon = () => {
	return (
		<div className="sunWrapper">
			<div className="theme-v-align">
				<FontAwesomeIcon icon={faSun} />
			</div>
		</div>
	);
};
