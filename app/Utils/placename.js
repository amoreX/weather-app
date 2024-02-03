"use client";

import axios from "axios";

export async function placename(lat, long) {
	if (lat && long) {
		const name = await axios.get(
			`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=18&addressdetails=1`
		);

		return name.data;
	}
}
