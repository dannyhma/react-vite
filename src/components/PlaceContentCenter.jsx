import PropTypes from "prop-types";

export default function PlaceContentCenter({ children }) {
	return (
		<>
			<div className="bg-black">
				<div className="min-h-screnn tracking-tigh flex items-center justify-center bg-violet-900/20 p-8 text-violet-50 antialiased">
					<div className="w-full">{children}</div>
				</div>
			</div>
		</>
	);
}

PlaceContentCenter.propTypes = {
	children: PropTypes.node
};
