import { element } from "prop-types";
import React, { useState } from "react";

const tasks=[
	"wash the dog",
	"buy groceries",
	"cook the dinner",
]

const Home = () => {
	const [allTheTasks, setallTheTasks] = useState(tasks);
	const [myNewTask, setMyNewTask] = useState("");


	const handleClick = (e, newTask) => {
		e.preventDefault();
		setallTheTasks(newTask);
	}

	const handleChange = (e) => {
		const value = e.target.value;
		setMyNewTask(value);
	}

	const removeTask = (index) => {
		const deleteTask = allTheTasks.filter((element, indice) => indice !== index);
		setallTheTasks(deleteTask);
	}

	return (
		<>
			<div className="container">
				<div className="row mx-1">
					<form onSubmit={(e) => handleClick (e, [...allTheTasks, myNewTask])}>
						<h1>
							Tasks
						</h1>						
						<label className="mb-1">
							Enter your task
						</label>
						<div className="d-flex justify-content-between">
							<input className="input form-control" onChange={handleChange}/> 

							<button className="button btn btn-success" type="submit">
								<i class="fa-solid fa-pencil"></i>
							</button>
						</div>							
					</form>
					<div className="my-3">
						<ul>
							{allTheTasks.map((task, index) => {
								return (
								<div className="my-3" key={index}> 
									{task}			
									<button className="redbutton btn btn-danger" onClick={() => removeTask(index)}>
										X 
									</button>
								</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
