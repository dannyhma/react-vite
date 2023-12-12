import { useRef, useState } from "react";
import useJoke from "../hooks/useJoke";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

function Joke() {
	const nameRef = useRef("");
	const [name, setName] = useState("Alex");
	const { joke } = useJoke(name);

	function generateJoke(event) {
		event.preventDefault();
		setName(nameRef.current.value);
	}

	return (
		<>
			<Card>
				<Card.Title>Joke</Card.Title>
				<Card.Body>
					<div>{joke.value}</div>
					<p className="mb-4">
						<time>{new Date(joke.created_at).toLocaleDateString()}</time>
					</p>

					<Input ref={nameRef} />
				</Card.Body>
				<Card.Footer>
					<Button onClick={generateJoke}>Generate Joke</Button>
				</Card.Footer>
			</Card>
		</>
	);
}

export default Joke;
