"use client";
import axios from "axios";

export async function getcoords(name) {
	console.log("kys");
	
	const data = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${name}`);
	return data.data[0];
}
