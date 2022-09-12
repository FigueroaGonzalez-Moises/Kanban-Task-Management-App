import { AppCtx } from "Context";
import { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeToggler = () => {
	const { DarkMode, setDarkMode } = useContext(AppCtx);

	return (
		<div>
			<DarkModeToggle
				onChange={setDarkMode}
				checked={DarkMode}
				size={60}
			/>
		</div>
	);
};

export default ThemeToggler;
