import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Api() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function getUsers() {
			setLoading(true);
			try {
				const { data } = await axios(`https://jsonplaceholder.typicode.com/users`);
				setUsers(data);
				setLoading(false);
			} catch (error) {
				console.log("Something went wrong");
				setLoading(false);
			}
		}
		getUsers().then((r) => r);
	}, []);

	return (
		<>
			<div className="grid grid-cols-4 gap-4">
				{loading ? (
					<div className="text-white">Loading...</div>
				) : (
					users.map((user) => (
						<Card key={user.id} className="w-80 bg-white">
							<Card.Title>Users : {user.id}</Card.Title>
							<Card.Body>
								<ul>
									<li>
										<p>Name: {user.name}</p>
										<p>Username: {user.username}</p>
									</li>
								</ul>
							</Card.Body>
						</Card>
					))
				)}
			</div>
		</>
	);
}

export default Api;
