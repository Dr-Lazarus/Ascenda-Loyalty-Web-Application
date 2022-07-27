export function dateStringMaker(dateObj, reversed = false) {
	if (!reversed) {
		return (
			dateObj.getDate() +
			(reversed ? "-" : "/") +
			(dateObj.getMonth() + 1) +
			(reversed ? "-" : "/") +
			dateObj.getFullYear()
		);
	}
	return (
		dateObj.getFullYear() +
		(reversed ? "-" : "/") +
		(dateObj.getMonth() + 1) +
		(reversed ? "-" : "/") +
		dateObj.getDate()
	);
}
