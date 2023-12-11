import PropTypes from "prop-types";
import clsx from "clsx";

export default function Input(props) {
	const { className = "bg-white", type = "text" } = props;

	return (
		<>
			<input
				{...props}
				type={type}
				className={clsx(
					className,
					"w-full rounded-lg shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
				)}
			/>
		</>
	);
}

Input.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
	type: PropTypes.node
};
