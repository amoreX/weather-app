"use client";

import Cardtop from "./Components/Cardtop";
import Cardbot from "./Components/Cardbottom";
import Search from "./Components/Search";
import Git from "./Components/Github";
import Modall from "./Components/Placesearch";
import { getcoords } from "./Utils/getcoords";
import { placename } from "./Utils/placename";
import { useState, useEffect } from "react";
import { coords } from "./Utils/Coords";
import { motion } from "framer-motion";

export default function Home() {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const today = new Date().getDay();
	const initial = daysOfWeek.slice(0, today);
	const later = daysOfWeek.slice(today, 7);
	const actuallist = [...later, ...initial];
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
	const [weather, setWeather] = useState(null);
	const [place, setPlace] = useState("");
	const [isclick, setIsClick] = useState(false);

	const handleisclick = () => {
		setIsClick((prevValue) => !prevValue);
		console.log("pressed");
	};

	const handleplacechange = (input) => {
		setPlace(input);
	};

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
				const nname = await placename(lat, lon);
				if (lat && lon) {
					const actuallname = nname.address.city + "," + nname.address.country;
					setPlace(actuallname);
				}
			};
			temp();
			console.log(lat, lon);
		}
	}, [lat, lon]);

	useEffect(() => {
		console.log(weather);
	}, [weather]);

	useEffect(() => {
		console.log(place);
		const temp1 = async () => {
			const vale = await getcoords(place);
			setWeather(await coords(vale?.lat, vale?.lon));
			const name = await placename(vale?.lat, vale?.lon);
			if (vale?.lat && vale?.lon) {
				const actualname = name.address.city + "," + name.address.country;
				console.log(actualname);
				setPlace(actualname);
			}
			console.log(vale);
		};
		temp1();
	}, [place]);
	return (
		<main>
			<motion.div
				initial={{
					opacity: 1,
				}}
				transition={{
					delay: 3,
				}}
				animate={{
					opacity: 0,
					pointerEvents: "none",
				}}
				id="load"
			>
				<div id="sun">☀️</div>
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, type: "tween", ease: "easeIn" }}
				>
					Hello
				</motion.div>
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1, type: "tween", ease: "easeIn" }}
				>
					Getting your site ready ;){" "}
				</motion.div>
			</motion.div>
			<div id="container">
				<Git />
				<Search iscllick={handleisclick} placename={place}></Search>

				<Cardtop
					day={actuallist[0]}
					weathercond={weather?.current.weather_code}
					high={weather?.daily.temperature_2m_max[0]}
					low={weather?.daily.temperature_2m_min[0]}
					feel={weather?.current.apparent_temperature}
					humid={weather?.current.relative_humidity_2m}
					pressure={weather?.current.surface_pressure}
					windspeed={weather?.current.wind_speed_10m}
					sunset={weather?.daily.sunset[0]}
					sunrise={weather?.daily.sunrise[0]}
					cloud={weather?.current.cloud_cover}
				></Cardtop>
				<div id="bottomcards">
					{actuallist.slice(1).map((days, index) => {
						return (
							<Cardbot
								day={days}
								key=""
								index={index}
								temp={weather?.daily.temperature_2m_max.slice(1)[index]}
								tempmin={weather?.daily.temperature_2m_min.slice(1)[index]}
								weathercond={weather?.daily.weather_code.slice(1)[index]}
							></Cardbot>
						);
					})}
				</div>

				{isclick === true ? (
					<Modall iscllick={handleisclick} change={handleplacechange}></Modall>
				) : (
					<div />
				)}
			</div>
		</main>
	);
}
