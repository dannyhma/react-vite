/* eslint-disable react/prop-types */
import { IconBrandTwitter } from "@tabler/icons-react";

export default function App() {
	return (
		<>
			<section className="container mx-auto">
				<div className="grid h-32 grid-cols-12">
					<h1 className="col-span-9 m-10 text-2xl text-Purple">Learn react</h1>
					<div className="col-span-3 m-10">
						<div className="flex justify-center gap-x-2">
							<Button>
								<IconBrandTwitter />
								Login
							</Button>
							<Button text="Sign up" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export function Button(props) {
	const { children, text, type } = props;

	return (
		<button
			type={type}
			className="flex gap-x-2 rounded-full bg-Purple px-10 py-4 text-sm font-bold text-white shadow-smshadow"
		>
			{text || children}
		</button>
	);
}
