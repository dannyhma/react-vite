import PropTypes from "prop-types";

export default function Label({ value, children, ...props }) {
	return (
		<>
			<label {...props} className="mb-1 block text-slate-600">
				{value || children}
			</label>
		</>
	);
}

Label.propTypes = {
	value: PropTypes.node,
	children: PropTypes.node
};
