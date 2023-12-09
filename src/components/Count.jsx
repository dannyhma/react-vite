import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Count({ initialValue }) {
	const [count, setCount] = useState(initialValue);

	return (
		<>
			<div className="text-center">
				<div className="mb-5 text-6xl font-bold text-violet-50">{count}</div>
				<div className="flex justify-center gap-4">
					<Button
						onClick={function () {
							setCount(count - 1);
						}}
						className="bg-Facebook"
					>
						-
					</Button>
					<Button
						onClick={function () {
							setCount(count + 1);
						}}
						className="bg-Facebook"
					>
						+
					</Button>
				</div>
			</div>
		</>
	);
}

Count.propTypes = {
	initialValue: PropTypes.node
};
