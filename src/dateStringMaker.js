export function dateStringMaker(dateObj, reversed = false) {
	if (!reversed) {
		return (
			dateObj.getDate() +
			"/" +
			(dateObj.getMonth() + 1) +
			"/" +
			dateObj.getFullYear()
		);
	}
	return (
		dateObj.getFullYear() +
		"/" +
		(dateObj.getMonth() + 1) +
		"/" +
		dateObj.getDate()
	);
}
