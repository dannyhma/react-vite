import PropTypes from "prop-types";

const childrenPropTypes = {
	children: PropTypes.node
};

function Card({ children }) {
	return <div className="overflow-hidden rounded-lg bg-white shadow-cardshadow">{children}</div>;
}

function Title({ children }) {
	return (
		<div className="border-b p-4">
			<h1 className="text-2xl">{children}</h1>
		</div>
	);
}

function Body({ children }) {
	return <h1 className="p-4 text-justify leading-relaxed">{children}</h1>;
}

function Footer({ children }) {
	return <h1 className="p-4">{children}</h1>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

Card.propTypes = childrenPropTypes;
Title.propTypes = childrenPropTypes;
Body.propTypes = childrenPropTypes;
Footer.propTypes = childrenPropTypes;

export default Card;
