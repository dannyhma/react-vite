import { useRef, useState } from "react";
import { IconBrandFacebook, IconBrandGoogle, IconBrandTwitter } from "@tabler/icons-react";
import Button from "./components/Button";
import Card from "./components/Card";
import PlaceContentCenter from "./components/PlaceContentCenter";
import Count from "./components/Count";
import Input from "./components/Input";
import Label from "./components/Label";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Api from "./components/Api";

function App() {
	const [form, setForm] = useState({
		name: "",
		email: ""
	});

	// const [tick, setTick] = useState(0);

	const tick = useRef(null);

	function onChange(event) {
		setForm({
			...form,
			[event.target.name]: event.target.value
		});
	}

	function submit(event) {
		event.preventDefault();

		console.log("AKU DI SUBMIT");
		console.log(form);
	}

	function handleClick() {
		// const nextTick = tick + 1;
		// setTick(nextTick);
		tick.current = tick.current + 1;
		console.log(tick.current);
	}

	return (
		<>
			<section className="container mx-auto">
				<div className="grid h-32 grid-cols-12 overflow-hidden">
					<h1 className="col-span-6 m-10 text-2xl text-Purple">Learn react</h1>
					<div className="col-span-6 m-10">
						<div className="flex justify-end gap-x-2">
							<Button
								{...{
									type: "button",
									onClick: function () {
										console.log("Register");
									}
								}}
								className="bg-Twitter text-white"
							>
								<IconBrandTwitter />
								Register
							</Button>
							<Button
								onClick={function () {
									console.log("Login");
								}}
							>
								<IconBrandFacebook />
								Login
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto mb-16">
				<div className="h-full tracking-tight text-slate-800 antialiased">
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-4">
							<Card>
								<Card.Title>Hello React</Card.Title>
								<Card.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a harum in eum
									adipisci, ipsam autem aut quisquam maiores reprehenderit cumque laudantium
									doloribus nostrum libero, ducimus praesentium ab. Necessitatibus, impedit?
								</Card.Body>
								<Card.Footer>
									<Button>Register</Button>
								</Card.Footer>
							</Card>
						</div>
						<div className="col-span-4">
							<Card>
								<Card.Title>Hello Vue</Card.Title>
								<Card.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a harum in eum
									adipisci, ipsam autem aut quisquam maiores reprehenderit cumque laudantium
									doloribus nostrum libero, ducimus praesentium ab. Necessitatibus, impedit?
								</Card.Body>
								<Card.Footer>
									<Button>Register</Button>
								</Card.Footer>
							</Card>
						</div>
						<div className="col-span-4">
							<Card>
								<Card.Title>Hello Express</Card.Title>
								<Card.Body>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a harum in eum
									adipisci, ipsam autem aut quisquam maiores reprehenderit cumque laudantium
									doloribus nostrum libero, ducimus praesentium ab. Necessitatibus, impedit?
								</Card.Body>
								<Card.Footer>
									<Button>Register</Button>
								</Card.Footer>
							</Card>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter className="bg-gray-700">
					<h1 className="mb-5 text-center text-4xl text-violet-50">Counting:</h1>
					<Count initialValue={10} />
				</PlaceContentCenter>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter className="flex items-center justify-center bg-gray-700 text-center">
					<Card className="w-96 bg-white">
						<Card.Title className="p-4 text-Dark">Sign up for new account</Card.Title>
						<form onSubmit={submit}>
							<Card.Body className="p-6">
								<div className="mb-5 rounded-lg border border-slate-300 p-4 text-slate-800 ">
									<p>Name : {form.name}</p>
									<p>Email : {form.email}</p>
								</div>

								<div className="mb-4 text-Twitter">
									<Label htmlFor="name" value="Username :" />
									<Input onChange={onChange} value={form.name} name="name" id="name" />
								</div>

								<div className="text-Twitter">
									<Label htmlFor="email" value="Eassword :" />
									<Input
										onChange={onChange}
										value={form.email}
										type="email"
										name="email"
										id="email"
									/>
								</div>
							</Card.Body>
							<Card.Footer className="flex justify-center pb-6">
								<Button className="bg-Twitter text-violet-50">
									<IconBrandGoogle />
									Register
								</Button>
							</Card.Footer>
						</form>
					</Card>
				</PlaceContentCenter>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter className="flex items-center justify-center bg-gray-700 text-center">
					<Todo></Todo>
				</PlaceContentCenter>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter className="flex items-center justify-center bg-gray-700 text-center">
					<TodoList></TodoList>
				</PlaceContentCenter>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter className="flex items-center justify-center	bg-blue-900 text-center">
					<Card className="w-96 bg-white">
						<Card.Title>useRef Hooks</Card.Title>
						<Card.Body>
							<Button onClick={handleClick}>Tick</Button>
						</Card.Body>
						<Card.Footer>You clicked {tick.current} times.</Card.Footer>
					</Card>
				</PlaceContentCenter>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter className="flex items-center justify-center	bg-blue-900 text-center">
					<Api></Api>
				</PlaceContentCenter>
			</section>
		</>
	);
}

export default App;
