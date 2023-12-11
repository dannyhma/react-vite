import { useState } from "react";
import uuid from "react-uuid";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { IconCheck, IconPencil, IconTrash, IconX } from "@tabler/icons-react";

export default function TodoList() {
	// Input/Submit Task
	const [newTask, setNewTask] = useState("");

	// EditTask
	const [edit, setEdit] = useState({});

	// Render/Show Task
	const [tasks, setTasks] = useState([]);

	// Message
	const [message, setMessage] = useState("");

	const newUuid = uuid();

	function saveTaskHandler(event) {
		event.preventDefault();

		if (!newTask) {
			return setMessage("Task name must not be empty.");
		}

		if (edit.id) {
			const updateTask = {
				...edit,
				newTask
			};

			const editTaskIndex = tasks.findIndex(function (task) {
				return task.id === edit.id;
			});

			const updatedTasks = [...tasks];
			updatedTasks[editTaskIndex] = updateTask;

			setTasks(updatedTasks);

			return cancelTaskHandler();
		}

		setTasks([
			...tasks,
			{
				id: newUuid,
				newTask,
				completed: false
			}
		]);
		setNewTask("");
	}

	function removeTaskHandler(taskId) {
		const removeTask = tasks.filter((task) => task.id !== taskId);
		setTasks(removeTask);

		if (edit.id) cancelTaskHandler();
		setMessage("");
	}

	function editTaskHandler(task) {
		setNewTask(task.newTask);
		setEdit(task);
		setMessage("");
	}

	function cancelTaskHandler() {
		setEdit({});
		setNewTask("");
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

	return (
		<>
			<Card className="w-[600px] bg-white">
				<Card.Title>TodoList</Card.Title>
				<Card.Body>
					{message && <i className="text-sm text-red-600">{message}</i>}
					<form onSubmit={saveTaskHandler}>
						<div className="flex items-center gap-x-2">
							<Input
								placeholder="Task Name"
								value={newTask}
								onChange={function (event) {
									setNewTask(event.target.value);
								}}
							/>
							<Button type="submit" className="border bg-Facebook px-2 py-1 text-base text-white">
								{edit.id ? "Save Task" : "Add Task"}
							</Button>
							{edit.id && (
								<Button
									onClick={cancelTaskHandler}
									className="border bg-Facebook px-2 py-1 text-base text-white"
								>
									Cancel Edit
								</Button>
							)}
						</div>
					</form>
					{tasks.length > 0 ? (
						<ul className="m-2 space-y-2">
							{tasks.map(function (task) {
								return (
									<li key={task.id} className="flex items-center justify-between">
										<span>
											{task.newTask}{" "}
											{task.completed ? <i>(✅ Complete)</i> : <i>(❌ Incomplete)</i>}
										</span>
										<div className="flex items-center justify-center gap-x-2">
											<Button
												onClick={() => handleCompleteTask(task.id)}
												className={`border px-2 py-1 text-base text-white ${
													task.completed ? "bg-Instagram" : "bg-Whatsapp"
												}`}
											>
												Mark as {task.completed ? <IconX /> : <IconCheck />}
											</Button>
											<Button
												onClick={() => editTaskHandler(task)}
												className="border bg-Facebook px-2 py-1 text-base text-white"
											>
												<IconPencil />
												Edit
											</Button>

											<Button
												onClick={() => removeTaskHandler(task.id)}
												className="border bg-Twitter px-2 py-1 text-base text-white"
											>
												<IconTrash />
												Remove
											</Button>
										</div>
									</li>
								);
							})}
						</ul>
					) : (
						<i className="text-sm text-red-600">No task available.</i>
					)}
				</Card.Body>
				<Card.Footer>You Have {tasks.length} Task.</Card.Footer>
			</Card>
		</>
	);
}
