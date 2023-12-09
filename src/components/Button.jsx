import PropTypes from "prop-types";
import clsx from "clsx";

export default function Button(props) {
	const { className = "bg-Twitter", children, text, type = "submit" } = props;

	return (
		<>
			<button
				{...props}
				type={type}
				className={clsx(
					className,
					"${className} flex gap-x-2 rounded-full px-10 py-4 text-sm font-bold text-white shadow-smshadow [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-1"
				)}
			>
				{text || children}
			</button>
		</>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
	text: PropTypes.node,
	type: PropTypes.oneOf(["submit", "button", "reset"])
};
