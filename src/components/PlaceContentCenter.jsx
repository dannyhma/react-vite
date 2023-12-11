import PropTypes from "prop-types";
import clsx from "clsx";

export default function PlaceContentCenter(props) {
	const { className = "bg-gray-700", children } = props;

	return (
		<>
			<div
				{...props}
				className={clsx(className, "tracking-tigh p-8 antialiased")}
			>
				{children}
			</div>
		</>
	);
}

PlaceContentCenter.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node
};
