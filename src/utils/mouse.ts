export const getCentredValue = (x: number, y: number) => {
	const xDistanceFromCenter = Math.abs(x); // always positive
	const yDistanceFromCenter = Math.abs(y); // always positive
	const distanceFromCenter = xDistanceFromCenter + yDistanceFromCenter;
	return distanceFromCenter;
};
