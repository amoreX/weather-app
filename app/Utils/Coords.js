"use client";

export function coords() {
	const success = (pos) => {
		const crd = pos.coords;
		console.log(crd.latitude, crd.longitude);
	};
	const error = (err) => {
		console.log(err);
	};

	window.Geolocation.getCurrentPosition(success, error);
}
