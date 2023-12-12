import { useState, useEffect } from "react";
import axios from "axios";

export default function useJoke(name) {
	const [joke, setJoke] = useState({});

	useEffect(() => {
		async function getJokes() {
			try {
				const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
				setJoke(data);
			} catch (error) {
				console.log("Something went wrong");
			}
		}
		getJokes().then((r) => r);
	}, [name]);

	return { joke };
}
