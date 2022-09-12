import { useContext } from "react";
import { AppCtx } from "Context";
import DarkModeToggle from "react-dark-mode-toggle";
import { MoonIcon, SunIcon } from "./ThemeIcons";

const ThemeToggler = () => {
	const { DarkMode, setDarkMode } = useContext(AppCtx);

	return (
		<div className="ThemeContainer">
			<div style={{ height: "50px" }}>
				<SunIcon />

				<DarkModeToggle
					onChange={setDarkMode}
					checked={DarkMode}
					size={60}
					className="theme-btn"
				/>

				<MoonIcon />
			</div>
		</div>
	);
};

export default ThemeToggler;
