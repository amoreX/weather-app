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
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const success = (pos) => {
			setLat(pos.coords.latitude);
			setLon(pos.coords.longitude);
		};
		const error = (err) => {
			console.log(err);
		};
		navigator.geolocation?.getCurrentPosition(success, error);
	}, []);

	useEffect(() => {
		if (lat != 0 && lon != 0) {
			const temp = async () => {
				setWeather(await coords(lat, lon));
			};
			temp();
			console.log(lat, lon);
		}
	}, [lat, lon]);

	useEffect(() => {
		console.log(weather);
	}, [weather]);
	return (
		<main>
			<div id="container">
				<Search></Search>
				<Cardtop day={actuallist[0]} weathercond={weather?.current.weather_code}></Cardtop>
				<div id="bottomcards">
					{actuallist.slice(1).map((days, index) => {
						return (
							<Cardbot
								day={days}
								key=""
								temp={weather?.daily.temperature_2m_max.slice(1)[index]}
								tempmin={weather?.daily.temperature_2m_min.slice(1)[index]}
								weathercond={weather?.daily.weather_code.slice(1)[index]}
							></Cardbot>
						);
					})}
				</div>
			</div>
		</main>
	);
}
