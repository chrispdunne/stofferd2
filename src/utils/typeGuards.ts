export const isMouseEvent = (e: unknown): e is MouseEvent => {
	return (e as MouseEvent).clientX !== undefined;
};
