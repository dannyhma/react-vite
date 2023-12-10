import PropTypes from "prop-types";
import clsx from "clsx";

const childrenPropTypes = {
	children: PropTypes.node,
	className: PropTypes.node
};

function Card(props) {
	const { className = "bg-white", children } = props;

	return (
		<>
			<div
				{...props}
				className={clsx(className, "${className} overflow-hidden rounded-lg shadow-cardshadow")}
			>
				{children}
			</div>
		</>
	);
}

function Title(props) {
	const { className = "text-slate-800 p-4", children } = props;
	return (
		<>
			<div className="border-b">
				<h1 {...props} className={clsx(className, "${className} text-2xl")}>
					{children}
				</h1>
			</div>
		</>
	);
}

function Body(props) {
	const { className = "p-4", children } = props;
	return (
		<>
			<h1 {...props} className={clsx(className, "${className} text-justify leading-relaxed")}>
				{children}
			</h1>
		</>
	);
}

function Footer(props) {
	const { className = "p-4", children } = props;

	return (
		<>
			<h1 {...props} className={clsx(className, "${className}")}>
				{children}
			</h1>
		</>
	);
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

Card.propTypes = childrenPropTypes;
Title.propTypes = childrenPropTypes;
Body.propTypes = childrenPropTypes;
Footer.propTypes = childrenPropTypes;

export default Card;
