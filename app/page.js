"use client";

import Cardtop from "./Components/Cardtop";
import Cardbot from "./Components/Cardbottom";
import Search from "./Components/Search";
import { useState, useEffect } from "react";
import { coords } from "./Utils/Coords";

export default function Home() {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const today = new Date().getDay();

	const initial = daysOfWeek.slice(0, today);
	const later = daysOfWeek.slice(today, 7);
	const actuallist = [...later, ...initial];
	const anotherlist = actuallist.slice(1);

	useEffect(() => {
		// You now have access to `window`

		const success = (pos) => {
			console.log(pos.coords.latitude, pos.coords.longitude);
		};
		const error = (err) => {
			console.log(err);
		};
		console.log(window.innerHeight);
		navigator.geolocation?.getCurrentPosition(success, error);
	}, []);

	return (
		<main>
			<div id="container">
				<Search></Search>
				<Cardtop day={actuallist[0]}></Cardtop>
				<div id="bottomcards">
					{anotherlist.map((days, index) => {
						return <Cardbot day={days} key="" temp="20"></Cardbot>;
					})}
				</div>
			</div>
		</main>
	);
}
