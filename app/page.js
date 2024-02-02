import Cardtop from "./Components/Cardtop";
import Cardbot from "./Components/Cardbottom";
import Search from "./Components/Search";
import { getLocation } from "./Utils/coordss";
export default function Home() {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const today = new Date().getDay();

	const initial = daysOfWeek.slice(0, today);
	const later = daysOfWeek.slice(today, 7);
	const actuallist = [...later, ...initial];
	getLocation();

	return (
		<main>
			<div id="container">
				<Search></Search>
				<Cardtop day={actuallist[0]}></Cardtop>

				<div id="bottomcards">
					<Cardbot day={actuallist[1]} temp="20"></Cardbot>
					<Cardbot day={actuallist[2]} temp="20"></Cardbot>
					<Cardbot day={actuallist[3]} temp="20"></Cardbot>
					<Cardbot day={actuallist[4]} temp="20"></Cardbot>
					<Cardbot day={actuallist[5]} temp="20"></Cardbot>
					<Cardbot day={actuallist[6]} temp="20"></Cardbot>
				</div>
			</div>
		</main>
	);
}
