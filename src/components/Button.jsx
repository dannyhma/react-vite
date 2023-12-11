import PropTypes from "prop-types";
import clsx from "clsx";

export default function Button(props) {
	const { className = "bg-Facebook text-white", children, text, type = "submit" } = props;

	return (
		<>
			<button
				{...props}
				type={type}
				className={clsx(
					className,
					"inline-flex gap-x-2 rounded-lg px-10 h-10 justify-center items-center text-base whitespace-nowrap font-bold shadow-smshadow [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-1"
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
