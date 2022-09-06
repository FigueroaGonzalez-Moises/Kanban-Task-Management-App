import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoardIcon = () => {
	return (
		<FontAwesomeIcon
			icon={faChartBar}
			style={{
				rotate: "90deg",
			}}
		/>
	);
};

export default BoardIcon;
