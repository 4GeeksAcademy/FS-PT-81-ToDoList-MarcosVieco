import React, {useState} from "react";
import {ToDoList} from "./ToDo"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<ToDoList />
		</div>
	);
};

export default Home;
