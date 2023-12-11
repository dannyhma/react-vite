import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { IconTrash } from "@tabler/icons-react";

export default function Todo() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	function handleAddTask(event) {
		event.preventDefault();

		setTasks((prevTasks) => [
			...prevTasks,
			{
				id: Math.floor(Math.random() * Date.now()),
				name: newTask,
				completed: false
			}
		]);
		setNewTask(" ");
	}

	function handleCompleteTask(id) {
		const updateTask = tasks.map((task) => {
			if (id === task.id) {
				return {
					...task,
					completed: !task.completed
				};
			}
			return task;
		});

		setTasks(updateTask);
	}

	function handleRemoveTask(id) {
		const removeTask = tasks.filter((task) => task.id !== id);
		setTasks(removeTask);
	}

	return (
		<>
			<Card className="w-[600px] bg-white">
				<Card.Title>Todo</Card.Title>
				<Card.Body>
					<form>
						<div className="flex items-center gap-x-2">
							<Input
								value={newTask}
								onChange={function (event) {
									setNewTask(event.target.value);
								}}
							/>
							<Button onClick={handleAddTask} text="Add Task" />
						</div>
					</form>
					{tasks.length > 0 ? (
						<ol className="m-2 space-y-2">
							{tasks.map((task) => (
								<li key={task.id} className="flex items-center justify-between">
									<span>
										{task.name} {task.completed ? "✅" : "❌"}
									</span>

									<div className="flex items-center justify-center gap-x-2">
										<Button
											onClick={() => handleCompleteTask(task.id)}
											className="border bg-Whatsapp px-2 py-1 text-base text-white"
										>
											Mark as {task.completed ? "Complete" : "Incomplete"}
										</Button>
										<Button
											onClick={() => handleRemoveTask(task.id)}
											className="border bg-Twitter px-2 py-1 text-base text-white"
										>
											<IconTrash />
											Remove
										</Button>
									</div>
								</li>
							))}
						</ol>
					) : null}
				</Card.Body>
				<Card.Footer className="p-4 text-slate-800">You Have {tasks.length} Task.</Card.Footer>
			</Card>
		</>
	);
}
