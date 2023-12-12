import PropTypes from "prop-types";
import clsx from "clsx";
import { forwardRef } from "react";

const Input = forwardRef(({ className = "bg-white", type = "text", ...props }, ref) => (
	<input
		ref={ref}
		{...props}
		type={type}
		className={clsx(
			className,
			"w-full rounded-lg shadow-sm transition duration-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
		)}
	/>
));

Input.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
	type: PropTypes.node
};

Input.displayName = "Input";

export default Input;
