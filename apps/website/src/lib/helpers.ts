export const range = (start: number, end: number, length = end - start + 1): Array<number> => {
	return Array.from({ length }, (_, i) => start + i);
};
