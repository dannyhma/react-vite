/* eslint-disable react/prop-types */
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import clsx from "clsx";

export default function App() {
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
		</>
	);
}

export function Button(props) {
	const { className = "bg-Tw", children, text, type = "submit" } = props;

	return (
		<button
			{...props}
			type={type}
			className={clsx(
				className,
				"${className} flex gap-x-2 rounded-full px-10 py-4 text-sm font-bold text-white shadow-smshadow [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-1"
			)}
		>
			{text || children}
		</button>
	);
}
