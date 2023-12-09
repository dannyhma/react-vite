import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import Button from "./components/Button";
import Card from "./components/Card";
import PlaceContentCenter from "./components/PlaceContentCenter";
import Count from "./components/Count";

function App() {
	return (
		<>
			<section className="container mx-auto">
				<div className="grid h-32 grid-cols-12">
					<h1 className="col-span-9 m-10 text-2xl text-Purple">Learn react</h1>
					<div className="col-span-3 m-10">
						<div className="flex justify-center gap-x-2">
							<Button
								{...{
									type: "button",
									onClick: function () {
										console.log("Register");
									}
								}}
								className="bg-Twitter"
							>
								<IconBrandTwitter />
								Register
							</Button>
							<Button
								onClick={function () {
									console.log("Login");
								}}
								className="bg-Facebook"
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
					</div>
				</div>
			</section>
			<section className="container mx-auto">
				<PlaceContentCenter>
					<h1 className="mb-5 text-center text-4xl">Counting:</h1>
					<Count initialValue={10} />
				</PlaceContentCenter>
			</section>
		</>
	);
}

export default App;
